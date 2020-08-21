var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.children.length > 0) {
    var result = [];
    for (var i = 0; i < this.children.length; i++) {
      var thisTree = this.children[i];
      var nodeContains = thisTree.contains(target);
      result.push(nodeContains);
    }
    if (result.indexOf(true) === -1) {
      return false;
    } else {
      return true;
    }
  }
};

treeMethods.traverse = function(callback) {
  //apply callback on value
  //check if it has kids to traverse
};

//Whenever we add or remove a node, we need to update .childer property.


//addChild(value)
//We have to add the new tree to the children list of its parent
//Create new tree

//if there are no nodes yet
//we would init this as the head or primary node
//else
//create a new tree(child)
//add new child tree to parent tree's children array


//contains(value)
//Traverse a tree and all its children to determine if the value exists in any of those trees.
//Always start at the head node

//if node has no children
//return false
//else
// check if any direct children contain the value
//if no children contain the value
//check if those nodes contain children
//if they do contain children
//run this function again on new node
//else
//return false

/*
 * Complexity: What is the time complexity of the above functions?
 addChild = O(1);
 contains = O(n);
 */