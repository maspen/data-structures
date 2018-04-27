

// Instantiate a new graph
// You will be implementing an undirected graph
// Implement a graph class, in pseudoclassical style
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
	if(this.nodes.hasOwnProperty(node)) {
		return true;
	} else {
		return false;
	}
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	if (this.contains(node)) {
		delete this.nodes[node];
		this.removeEdgeForRemovedNode(node);
	}
};

Graph.prototype.removeEdgeForRemovedNode = function(node) {
	// iterate over this.edges
	//   check if key[0] == node --> yes its 'fromNode', get key[1] its 'toNode'
	//     pass to removeEdge(fromNode, toNode)
	//   check if key[1] === node --> yes its 'toNode', get key[0] its 'toNode'
	//     pass to removeEdge(fromNode, toNode)
	var fromNode, toNode;
	for(var key in this.edges) {
		if(this.edges[key][0] === node) {
			fromNode = node;
			toNode = this.edges[key][1];
			this.removeEdge(fromNode, toNode);
			return;
		}
		if(this.edges[key][1] === node) {
			fromNode = this.edges[key][0];
			toNode = this.edges[key][1];
			this.removeEdge(fromNode, toNode);
			return;
		}
	}
};

// Returns a boolean indicating whether two specified nodes are connected.  
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	for(var key in this.edges) {
		// get this.edges[key][0] & compare to from
		// get this.edges[key][1] & compare to to
		// get this.edges[key][0] & compare to to
		// get this.edges[key][1] & compare to from
		// if either of these is true, then we have an edge b/w from and to
		var from0 = this.edges[key][0];
		var to1 = this.edges[key][1];
		var zeroOneMatch = false;
		if(from0 === fromNode && to1 === toNode) {
			zeroOneMatch = true;
		}

		var from1 = this.edges[key][1];
		var to0 = this.edges[key][0];
		var oneZeroMatch = false;
		if(from1 === fromNode && to0 === toNode) {
			oneZeroMatch = true;
		}

		if(zeroOneMatch || oneZeroMatch) {
			return true;
		}
	}
	return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	// graph.addEdge(3, 2);
	// results in array 0=3, 1=2
	this.edges[fromNode] = [fromNode, toNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	if(this.hasEdge(fromNode, toNode)) {
		console.log('has edge ' + fromNode + ' ' + toNode);
		delete this.edges[fromNode];
	}
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for(var key in this.nodes) {
		cb(this.nodes[key]);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


