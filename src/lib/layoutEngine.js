import dagre from 'dagre';

/**
 * Auto-layout nodes using dagre algorithm.
 * Arranges nodes in a structured flow grouped by phase.
 */
const NODE_WIDTH = 260;
const NODE_HEIGHT = 80;
const PHASE_HEADER_HEIGHT = 44;

export function layoutNodes(phases, direction = 'TB') {
  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({
    rankdir: direction,
    nodesep: 40,
    ranksep: 80,
    marginx: 40,
    marginy: 40,
  });

  const allFlowNodes = [];

  phases.forEach((phase, phaseIdx) => {
    const nodes = phase.nodes || [];

    // Add phase header node
    const phaseNodeId = `phase-${phase.id}`;
    g.setNode(phaseNodeId, { width: NODE_WIDTH, height: PHASE_HEADER_HEIGHT });
    allFlowNodes.push({
      id: phaseNodeId,
      type: 'phaseHeader',
      data: { label: phase.title, duration: phase.duration_label },
      position: { x: 0, y: 0 },
    });

    nodes.forEach((node, nodeIdx) => {
      g.setNode(node.id, { width: NODE_WIDTH, height: NODE_HEIGHT });

      // Add as flow node
      allFlowNodes.push({
        id: node.id,
        type: 'roadmapNode',
        data: { ...node },
        position: { x: 0, y: 0 },
      });

      // Connect phase header to first node
      if (nodeIdx === 0) {
        g.setEdge(phaseNodeId, node.id);
      }

      // Connect sequential nodes within phase
      if (nodeIdx > 0) {
        g.setEdge(nodes[nodeIdx - 1].id, node.id);
      }
    });

    // Connect last node of phase to next phase header
    if (phaseIdx < phases.length - 1 && nodes.length > 0) {
      const nextPhaseId = `phase-${phases[phaseIdx + 1].id}`;
      g.setEdge(nodes[nodes.length - 1].id, nextPhaseId);
    }
  });

  dagre.layout(g);

  // Apply computed positions
  const positionedNodes = allFlowNodes.map((node) => {
    const nodeData = g.node(node.id);
    if (!nodeData) return node;
    const w = node.type === 'phaseHeader' ? NODE_WIDTH : NODE_WIDTH;
    const h = node.type === 'phaseHeader' ? PHASE_HEADER_HEIGHT : NODE_HEIGHT;
    return {
      ...node,
      position: {
        x: nodeData.x - w / 2,
        y: nodeData.y - h / 2,
      },
    };
  });

  return positionedNodes;
}

export { NODE_WIDTH, NODE_HEIGHT };
