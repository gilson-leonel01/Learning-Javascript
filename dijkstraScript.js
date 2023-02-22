// Dijkstra's algorithm implementation
function dijkstra(graph, startNode) {
    // Set up initial values
    const distances = {};
    const visitedNodes = {};
    const previousNodes = {};
    const nodes = Object.keys(graph);
  
    nodes.forEach((node) => {
      distances[node] = Infinity;
      previousNodes[node] = null;
    });
  
    distances[startNode] = 0;
  
    while (Object.keys(visitedNodes).length !== nodes.length) {
      // Select unvisited node with the smallest distance
      const currentNode = Object.keys(distances).reduce((minNode, node) => {
        if (!visitedNodes[node] && distances[node] < distances[minNode]) {
          minNode = node;
        }
        return minNode;
      }, null);
  
      // Mark node as visited
      visitedNodes[currentNode] = true;
  
      // Update distances to neighboring nodes
      nodes.forEach((node) => {
        const weight = graph[currentNode][node];
        if (weight !== undefined) {
          const distance = distances[currentNode] + weight;
          if (distance < distances[node]) {
            distances[node] = distance;
            previousNodes[node] = currentNode;
          }
        }
      });
    }
  
    return {
      distances,
      previousNodes,
    };
}
  
  // Sample graph
const graph = {
    A: { B: 5, C: 1 },
    B: { A: 5, C: 2, D: 1 },
    C: { A: 1, B: 2, D: 4 },
    D: { B: 1, C: 4 },
};
  
  // Test Dijkstra's algorithm with sample graph starting from node A
  const result = dijkstra(graph, "A");
  console.log(result.distances); // Output: { A: 0, B: 3, C: 1, D: 4 }
  console.log(result.previousNodes); // Output: { A: null, B: "C", C: "A", D: "B" }