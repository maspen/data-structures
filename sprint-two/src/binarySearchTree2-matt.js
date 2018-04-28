var BinarySearchTree = function(value) {
  var tree = Object.create(binarySearchTreeMethods);

<<<<<<< HEAD
  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
=======
	tree.value = value;
	tree.left = null;
	tree.right = null;

	return tree;
>>>>>>> 580588393f8536e5c13cbd1fe468578ae957dd4f
};

var binarySearchTreeMethods = {
  insert: function(value) {
<<<<<<< HEAD
    var newNode = BinarySearchTree(value);

    var recurse = function(tree) {
      if (tree.value > value && tree.left === null) {
        tree.left = newNode;
      } 
      if (tree.value > value) {
        recurse(tree.left);
      }
      if (tree.value < value && tree.right === null) {
        tree.right = newNode;
      }
      if (tree.value < value) {
        recurse(tree.right);
      }
    }

    recurse(this);
  },
  contains: function(value) {
    var foundNode = false;

    var recurse = function(tree) {
      if( tree.value === value) {
        foundNode = true;
      }
      if (tree.value > value && tree.left !== null ) {
        recurse(tree.left);
      }
      if (tree.value < value && tree.right !== null) {
        recurse(tree.right);
      }
    }

    recurse(this);

    return foundNode;
  },
  depthFirstLog: function(cb) {
  var recurse = function(tree) {
=======
	  var newNode = BinarySearchTree(value);

	  var recurse = function(tree) {
	    if (tree.value > value && tree.left === null) {
	      tree.left = newNode;
	    } 
	    if (tree.value > value) {
	      recurse(tree.left);
	    }
	    if (tree.value < value && tree.right === null) {
	      tree.right = newNode;
	    }
	    if (tree.value < value) {
	      recurse(tree.right);
	    }
	  }

	  recurse(this);
  },
  contains: function(value) {
	  var foundNode = false;

	  var recurse = function(tree) {
	    if( tree.value === value) {
	      foundNode = true;
	    }
	    if (tree.value > value && tree.left !== null ) {
	      recurse(tree.left);
	    }
	    if (tree.value < value && tree.right !== null) {
	      recurse(tree.right);
	    }
	  }

	  recurse(this);

	  return foundNode;
  },
  depthFirstLog: function(cb) {
	var recurse = function(tree) {
>>>>>>> 580588393f8536e5c13cbd1fe468578ae957dd4f
      cb.call(tree, tree.value);
      if(tree.left !== null) {
        recurse(tree.left);
      }
      if(tree.right != null) {
        recurse(tree.right);
      }
    }

    recurse(this);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

 O(n) - worst case, have to traverse whole tree using recursion
<<<<<<< HEAD
 */
=======
 */
>>>>>>> 580588393f8536e5c13cbd1fe468578ae957dd4f
