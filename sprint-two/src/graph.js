// Instantiate a new graph
var Graph = function(value) {
  this.edges = {};
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value. //node = value
Graph.prototype.addNode = function(node) {
  if (this.nodes.indexOf(node) > -1) {
    return false;
  }
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (node === this.nodes[i]) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.nodes.indexOf(node) > -1) {
    var index = this.nodes.indexOf(node);
    this.nodes.splice(index, 1);
    delete this.edges[node];
  } else {
    return false;
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes.indexOf(fromNode) > -1 && this.nodes.indexOf(toNode) > -1) {
    var fromNodeArr = this.edges[fromNode];
    var toNodeArr = this.edges[toNode];
    if (fromNodeArr.indexOf(toNode) > -1 && toNodeArr.indexOf(fromNode) > -1) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.nodes.indexOf(fromNode) > -1 && this.nodes.indexOf(toNode) > -1) {
    var fromNodeConnection = this.edges[fromNode];
    var toNodeConnection = this.edges[toNode];
    if (fromNodeConnection.indexOf(toNode) > -1 || toNodeConnection.indexOf(fromNode) > -1) {
      return false;
    } else {
      this.edges[fromNode].push(toNode);
      this.edges[toNode].push(fromNode);
    }
  } else {
    return false;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.nodes.indexOf(fromNode) > -1 && this.nodes.indexOf(toNode) > -1) {
    var fromNodeArr = this.edges[fromNode];
    var toNodeArr = this.edges[toNode];
    if (fromNodeArr.indexOf(toNode) > -1 && toNodeArr.indexOf(fromNode) > -1) {
      fromNodeArr.splice(fromNodeArr.indexOf(toNode), 1);
      toNodeArr.splice(toNodeArr.indexOf(fromNode), 1);
    } else {
      return false;
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


//We are going to implement methods that create a graph of nodes

//Node
//We need some kind of reference to all of its direct edges
//Has to hold a value
//

//Constructor Params
//value
//arr to contain currently connected nodes

// addNode
//Create a new node in the graph space

//

//contains
//Starts at any node and traveres attempting to find a value : True/False

//removeNode
//Deletes passed in node, and all edges connected to it.

//addEdge
//Connects the two passed in nodes

//hasEdge
//Checks if two nodes are connected " True/False"

//removeEdge
//takes two connected nodes and removes the middle(edge) node

//forEachNode
//applies a callback to all