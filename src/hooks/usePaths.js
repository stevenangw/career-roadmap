import { useState, useEffect, useCallback } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { DEMO_PATHS, getAllNodesFromPath, calculateProgress } from '../lib/constants';

// Deep clone helper for demo mode
function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

// LocalStorage key for demo mode
const DEMO_STORAGE_KEY = 'pathforge-demo-paths-v2';

function loadDemoPaths() {
  try {
    const saved = localStorage.getItem(DEMO_STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (err) {
    console.error('Failed to parse local paths', err);
  }
  return cloneData(DEMO_PATHS);
}

function saveDemoPaths(paths) {
  localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(paths));
}

export function usePaths() {
  const { user, isDemo } = useAuth();
  const [paths, setPaths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPaths = useCallback(async () => {
    setLoading(true);
    setError(null);

    if (isDemo || !isSupabaseConfigured) {
      setPaths(loadDemoPaths());
      setLoading(false);
      return;
    }

    try {
      // Fetch paths with nested phases and nodes
      const { data: pathsData, error: pathsError } = await supabase
        .from('paths')
        .select(`
          *,
          phases (
            *,
            nodes (*)
          )
        `)
        .eq('user_id', user.id)
        .order('sort_order');

      if (pathsError) throw pathsError;

      // Sort phases and nodes by sort_order
      const sorted = (pathsData || []).map((path) => ({
        ...path,
        phases: (path.phases || [])
          .sort((a, b) => a.sort_order - b.sort_order)
          .map((phase) => ({
            ...phase,
            nodes: (phase.nodes || []).sort((a, b) => a.sort_order - b.sort_order),
          })),
      }));

      setPaths(sorted);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching paths:', err);
    } finally {
      setLoading(false);
    }
  }, [user, isDemo]);

  useEffect(() => {
    if (user) {
      const timer = setTimeout(() => fetchPaths(), 0);
      return () => clearTimeout(timer);
    }
  }, [user, fetchPaths]);

  // Get a single path by ID
  function getPath(pathId) {
    return paths.find((p) => p.id === pathId) || null;
  }

  // Get progress for a path
  function getPathProgress(pathId) {
    const path = getPath(pathId);
    if (!path) return 0;
    const allNodes = getAllNodesFromPath(path);
    return calculateProgress(allNodes);
  }

  // Get all nodes across all paths (for focus today / progress tracker)
  function getAllNodes() {
    return paths.flatMap((path) =>
      (path.phases || []).flatMap((phase) =>
        (phase.nodes || []).map((node) => ({
          ...node,
          pathId: path.id,
          pathTitle: path.title,
          pathColor: path.color,
          phaseTitle: phase.title,
        }))
      )
    );
  }

  // Update node status
  async function updateNodeStatus(nodeId, newStatus) {
    if (isDemo || !isSupabaseConfigured) {
      const updated = paths.map((path) => ({
        ...path,
        phases: path.phases.map((phase) => ({
          ...phase,
          nodes: phase.nodes.map((node) =>
            node.id === nodeId
              ? {
                  ...node,
                  status: newStatus,
                  updated_at: new Date().toISOString(),
                  completed_at: newStatus === 'done' ? new Date().toISOString() : null,
                }
              : node
          ),
        })),
      }));
      setPaths(updated);
      try {
        saveDemoPaths(updated);
      } catch (saveErr) {
        return { error: saveErr };
      }
      return { error: null };
    }

    try {
      const updateData = {
        status: newStatus,
        updated_at: new Date().toISOString(),
        completed_at: newStatus === 'done' ? new Date().toISOString() : null,
      };

      const { error } = await supabase
        .from('nodes')
        .update(updateData)
        .eq('id', nodeId);

      if (error) throw error;

      // Optimistic update
      setPaths((prev) =>
        prev.map((path) => ({
          ...path,
          phases: path.phases.map((phase) => ({
            ...phase,
            nodes: phase.nodes.map((node) =>
              node.id === nodeId ? { ...node, ...updateData } : node
            ),
          })),
        }))
      );

      return { error: null };
    } catch (err) {
      console.error('Error updating node:', err);
      return { error: err };
    }
  }

  // Stats
  function getStats() {
    const allNodes = getAllNodes();
    return {
      total: allNodes.length,
      done: allNodes.filter((n) => n.status === 'done').length,
      inProgress: allNodes.filter((n) => n.status === 'in_progress').length,
      todo: allNodes.filter((n) => n.status === 'todo').length,
      overallProgress: calculateProgress(allNodes),
    };
  }

  return {
    paths,
    loading,
    error,
    fetchPaths,
    getPath,
    getPathProgress,
    getAllNodes,
    updateNodeStatus,
    getStats,
  };
}
