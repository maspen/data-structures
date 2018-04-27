

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // if this.nodes has perperty node
    // return true
  // return false
  if (this.nodes.hasOwnProperty(node)) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    delete this.nodes[node];
  }

  for (var key in this.edges) {
    if (this.edges[key].includes(node)) {
      delete this.edges[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var key in this.edges) {
    if (this.edges[key].includes(fromNode) && this.edges[key].includes(toNode)){
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.edges[fromNode] = [fromNode, toNode];
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var key in this.edges) {
    if (this.edges[key].includes(fromNode) && this.edges[key].includes(toNode)){
      delete this.edges[key];
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(this.nodes[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
O(n) - most complex iteration is once through keys
 */


