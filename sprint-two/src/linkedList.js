var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.index = 0;
  list.size = 0;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    // need to set the node's 'index' so can delete
    newNode.listIndex = list.index;
    list[list.index] = newNode;
    // increment list.index
    list.index++;
    // increment size
    list.size++;
    
    if (list.head === null) {
      // empty list
      list.head = newNode;
      list.tail = newNode;
    } else {
      // get tail node
      let tailNode = list.tail;
      // set tail node's node.next to point to newNode
      tailNode.next = newNode;
      // set list.tail to newNode
      list.tail = newNode;
    }
  };

  // test asks to return the 'value'
  list.removeHead = function() {
    if (list.size === 0) {
      return null;
    } else if (list.size === 1) {
      // get node at list.head
      //Node headNode = list.head;
      var headNode = list.head;
      // set list.index to 0
      list.index = 0;
      // set list.size to 0
      list.size = 0;
      // remove head from list
      delete list[headNode.listIndex];
      // return 'former' headNode
      return headNode.value;
    } else {
      // get head node
      var headNode = list.head;
      // using headNode.next, get 2ndNode
      var secondNode = headNode.next;
      // set list.head to 2ndNode
      list.head = secondNode;
      // delete head node
      delete list[headNode.listIndex];
      // decrement list.size
      list.size--;
      // return 'former' head node
      return headNode.value;
    }
  };

  list.contains = function(target) {
    // if list.size === 0, return false
    if (list.size === 0) {
      return false;
    }
    // else if list.size === 1, determine if list.head.value === targer ... true/false
    else if (list.size === 1) {
      return list.head.value === target;
    }
    // else starting at list.head, traverse linked list to
    // see if 'current' Node has value. continue until Node.next === null
    else {
      var node = list.head;
      do {
        if (node.value === target) {
          return true;
        }
        node = node.next;
      } while (node);
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  // need to add this to be able to remove
  node.listIndex = 0;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

O(n)

 */
