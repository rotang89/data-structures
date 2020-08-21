var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {};

treeMethods.contains = function(target) {};

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

/*
 * Complexity: What is the time complexity of the above functions?
 */