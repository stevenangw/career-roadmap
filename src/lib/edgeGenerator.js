/**
 * Auto-generate React Flow edges from path data.
 * Connects nodes sequentially within phases and across phases.
 */
export function generateEdges(phases, pathColor = '#3B82F6') {
  const edges = [];
  const edgeStyle = {
    stroke: pathColor,
    strokeWidth: 2,
    opacity: 0.5,
  };
  const animatedEdgeStyle = {
    ...edgeStyle,
    opacity: 0.8,
  };

  phases.forEach((phase, phaseIdx) => {
    const nodes = phase.nodes || [];

    // Connect nodes within the same phase
    for (let i = 0; i < nodes.length - 1; i++) {
      edges.push({
        id: `e-${nodes[i].id}-${nodes[i + 1].id}`,
        source: nodes[i].id,
        target: nodes[i + 1].id,
        type: 'smoothstep',
        animated: nodes[i].status === 'in_progress',
        style: nodes[i].status === 'in_progress' ? animatedEdgeStyle : edgeStyle,
      });
    }

    // Connect last node of current phase to first node of next phase
    if (phaseIdx < phases.length - 1) {
      const nextPhase = phases[phaseIdx + 1];
      const nextNodes = nextPhase.nodes || [];
      if (nodes.length > 0 && nextNodes.length > 0) {
        const lastNode = nodes[nodes.length - 1];
        const firstNextNode = nextNodes[0];
        edges.push({
          id: `e-phase-${lastNode.id}-${firstNextNode.id}`,
          source: lastNode.id,
          target: firstNextNode.id,
          type: 'smoothstep',
          animated: false,
          style: {
            ...edgeStyle,
            strokeDasharray: '8 4',
            opacity: 0.3,
          },
        });
      }
    }
  });

  return edges;
}
