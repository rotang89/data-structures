class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    var tree = new BinarySearchTree(value);
    if (typeof value === 'number') {
      if (value > this.value) { //Right
        if (this.right === null) { //No node
          this.right = tree;
        } else {
          this.right.insert(value);
        }
      } else if (value < this.value) { // Left
        if (this.left === null) {
          this.left = tree;
        } else {
          this.left.insert(value);
        }
      } else if (value === this.value) {
        return false;
      }
    }
    return false;
  }

  contains(value) {
    if (typeof value === 'number') {
      if (value > this.value) { //Right
        if (this.right === null) {
          return false;
        } else {
          return this.right.contains(value);
        }
      } else if (value < this.value) { //Left
        if (this.left === null) {
          return false;
        } else {
          return this.left.contains(value);
        }
      } else if (value === this.value) {
        return true;
      }
    }
    return false;
  }

  depthFirstLog(cb) {
    if (cb instanceof Function) {
      cb(this.value);
      if (this.left !== null) { //There is left node
        this.left.depthFirstLog(cb);
      }
      if (this.right !== null) { //There is a right node
        this.right.depthFirstLog(cb);
      }
    }
    return false;
  }
}
//   breadthFirstLog(cb) {
//     for (var i = 0; i < 2; i++) {
//       i.breadthFirstLog(cb); // i = 0
//       //Time between
//       i.breadthFirstLog(cb); // i = 1
//     }
//     i.breadthFirstLog();
//     i2.breadthFirstLog();
//   }
// }


//Left less than | Right greater than

// .left property
// Traverses down to the left if there is a tree there.

// right property
// Traveses down to the right if there is a tree there

// .insert(value)
// Traveses the tree and puts value in the right position
// Point parent tree to new node as well.

// Can not pass in a duplicate value (if value ever matches node value break from function)
// Value should be an int

//if is a int
//if value is greater than current node (right)
// if there is a right node
//recall the function on that right node
// else if there is no right node
// Point parent tree to new node(created node)
//else if value is less than current node (left)
//if there is a left node
//recall the function on the left node
//else if there is no left node
//Point parent tree to new node.
//--------------------------------
//else return false

// .contains(value)
// Search of the tree to locate one value (.indexOf)

//Make sure value an int
//Stopping point is when we can no longer traverse the tree (this.right/left === null)

//if value is an int
//if value is greater than current node(right)
//if there is a this.right
//call this function on that right node
// else
//return false;
//else if value is less then current node(left)
//if there is a this.left
//call this function on that node
//else
//return false;
//else if value === node
//return true


//--------------------------------------------------------------------
//else return false

// .depthFirstLog(callback)
// applies callback to all nodes (.map)

//Make sure the cb is a function obj

//if the arg passed is a function
//apply function to value
//if there is a left node
//call function left
//if there isnt a left node
//do nothing
//if there is a right node
//call function on right
//if there isnt a right node
//do nothing

//---------------------------------------
//else return false


//---------------------------------------------------------------------------------------------------------------------------

// Complexity: What is the time complexity of the above functions?
// insert - O(log n)
// depthfirstseatch - O(n)
// containts - O(log n)