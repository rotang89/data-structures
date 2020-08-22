class DoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
    }
    //Methods
  addToHead(value) {
    var node = new Node(value);
    if (this.head === null && this.tail === null) { //No Nodes
      this.head = node;
      this.tail = node;
    } else {
      var previousHead = this.head;
      this.head = node;
      previousHead.previous = node;
      node.next = previousHead;
    }
  }

  addToTail(value) {
    var node = new Node(value);
    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      var previousTail = this.tail;
      this.tail = node;
      previousTail.next = node;
      node.previous = previousTail;
    }
  }

  removeHead() {
    if (this.head === null) {
      return false;
    } else if (this.head === this.tail) {
      var currentHeadValue = this.head.value;
      delete this.head;
      this.head = null;
      this.tail = null;
      return currentHeadValue;
    } else {
      var currentHead = this.head;
      var newHead = currentHead.next;
      var value = currentHead.value;
      delete this.head;
      this.head = newHead;
      newHead.previous = null;
      return value;
    }
  }

  removeTail() {
    if (this.tail === null) {
      return false;
    } else if (this.head === this.tail) {
      var value = this.tail.value;
      delete this.tail;
      this.head = null;
      this.tail = null;
      return value;
    } else {
      var value = this.tail.value;
      var newTail = this.tail.previous;
      delete this.tail;
      this.tail = newTail;
      this.tail.next = null;
      return value;
    }
  }

  contains(value) {
    if (this.head === value || this.tail === value) {
      return true;
    }
    var rabbit = this.head;
    var turtle = this.head;
    var backwards = false;
    while (turtle !== null) {
      if (turtle.value === value || rabbit.value === value) {
        return true;
      }
      turtle = turtle.next;
      if (backwards === true) {
        rabbit = rabbit.previous.previous;
      } else {
        if (rabbit.next.next === null && rabbit.next !== null) {
          rabbit = rabbit.next;
        } else if (rabbit.next.next === null && rabbit.next === null) {
          rabit = rabit.previous;
          backwards = true;
        }
      }
    }
  }
}
//if head or tail contains value
//return true
//else
//var turtle = this.head;
//var rabbit = this.head;
//var backwards = false;
//while (turtle.next !== null)
//if rabbit || turtle === value
//return true
//turtle = turtle.next
//if backwards is true
//rabbit = rabbit.previous.previous
//if rabit.next.next === null && rabit.next === true
//rabit = rabit.next
//if rabit.next === null && rabit.next.next === null
//rabit = rabit.previous
//backwards = true;


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

//addToHead(value)
//Takes a value and adds it to the front of the list


//create a new node(new head node)'
//if head and tail are both null
//point head and tail to the new node
//else
//store previous head into a var
//set head to new node
//point previous nodes(last head node).previous to new node


//addToTail(value)
//Adds node to end of list

//var node = new Node(value);
//if this.head and this.tail === null make the first node
//this.head = node
//this.tail = node
//else
//var previousTail = the last tail
//set tail to new node
//set previousNodes .next to the new node
//set new node .previous to previousNode


//removeTail()
//Removes the last node from the list and returns its value

//If theres no tail
//return false
//else if there is only one node
//store tails value
//delete the tail
//this.head = null
//this.tail = null
//return the value
//else
//


//removeHead()
//Remove sthe first node and returns its value

//Is there a head?
//if not return false
//else if there is only one node
//store current heads value
//set head to null
//set tail to null
//return the value
//else if there are more than one nodes
//store current heads value
//set head to previousHead.next
//set new head.previous to null
//delete the current head
//return the value

//contains(value)
//Search the list for the value, return true/false

//start at head node(both the turtle and the rabitt)
//check if the head has the value
//move the rabit 2 positions at a time(every time checking if the rabbit found our value)
//move the turtle 1 position at a time(every time checking if it found the value)

//If rabbit.next.next = null we have to send the rabbit backwards rabbit.previous.previous
//If turtle.next = null break the loop