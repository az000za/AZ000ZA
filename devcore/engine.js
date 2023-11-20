module.exports = class Engine {
  constructor(functions) {
    this.functions = functions;
    this.graph = createDependencyGraph(functions);
    this.visited = new Set();
    this.order = [];
  }

  createDependencyGraph() {
    return createDependencyGraph(this.functions);
  }

  executeFunctionsInDependencyOrder() {
    function dfs(node) {
      if (this.visited.has(node)) {
        return;
      }

      this.visited.add(node);
      this.order.push(node);

      for (const neighbor of this.graph[node]) {
        dfs.call(this, neighbor);
      }
    }

    for (const node in this.graph) {
      dfs.call(this, node);
    }

    for (const node of this.order) {
      this.functions[node]();
    }
  }
}
