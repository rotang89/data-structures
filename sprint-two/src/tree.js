var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = Tree(value);
  tree.parent = this;
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

treeMethods.removeFromParent = function() {
  if (this.parent === null) {
    return false;
  }
  if (this.children.length === 0) {
    var parentArr = this.parent.children;
    var index = parentArr.indexOf(this);
    parentArr.splice(index, 1);
    delete this;
  } else if (this.children.length > 0) {
    var parentNode = this.parent;
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].parent = parentNode;
      parentNode.children.push(children[i]);
    }
    var index = parentNode.children.indexOf(this);
    parentNode.children.splice(index, 1);
    delete this;
  }
};
//we need to store removed nodes parent
//point removed nodes children to that parent
//delete the selected node
//The parent nodes children arr needs to be updated with its new children

//if the node doesnt have a parent
//if the node has children or not

//if there is no parent
//return false
//if there are no children
//we edit the childrends arr of the parent node
//delete the node
//if there are children
//store the parent node
//point the to be deleted nodes children, to the parent node(this.parent = parent node)
//update the parent node arr, by removing the deleted node, and adding the new children nodes


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