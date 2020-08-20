var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    }
    var previous = list.tail;
    previous.next = node;
    node.next = null;
    list.tail = node;
  };

  list.removeHead = function() {
    if (list.head === null) {
      //return something?
    } else if (list.head === list.tail) {
      var current = list.head;
      var value = current.value;
      list.head = null;
      list.tail = null;
      delete current;
      return value;
    } else {
      var current = list.head;
      var value = current.value;
      list.head = current.next;
      delete current;
      return value;
    }
  };

  list.contains = function(target) {
    var current = list.head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};
// addToTail
// [] [] [x] ---> [x] node.next =
//Creating a new node
//if theres no nodes already we point head and tail to that node
//else
//point previous tail to new node
//point new node to null (because this is the tail now)
//set the tail to the new node

//Remove head
//Have to return deleted nodes value

//If no head return false
//If only one link head needs to point to null again and tail would have to be have null

//If head is null
//return false
//else if there is only one link
//store current head to a var
//point head to null
//point tail to null
//delete old head
//return the deleted value
//else
//store current head to a var
//point the head to the next link
//delete the old head
//return the deleted value


//Contains

//Set current node, while loop through current = current.next if current.next = target return true, else if we get to tail return false
// current = head
// while (current !== null) {
//   if (current.value == value) {
//     return true;
//   }
//   current = current.next;
// }
// return false;

//if no node retrurn false


//set current to equal head
//


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addToTail --> O(1);
  removeHead --> O(1);
  contains --> O(n);
 */