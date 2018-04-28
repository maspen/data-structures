var BinarySearchTree = function(value) {
  var newBinTree = Object.create(binTreeMethods);
  newBinTree.value = value;
  newBinTree.left = null;
  newBinTree.right = null;
  return newBinTree;
};

var binTreeMethods = {
  insert: function(value){
  // input: value
  // output:
  // debugger;
    var insertTreeBranch = function(tree){
      // console.log(tree);
      if (value > tree.value) {
        if (tree.right === null) {
          tree.right = new BinarySearchTree(value);
        } else {
          insertTreeBranch(tree.right)
        }
      } else {
        if (tree.left === null) {
          tree.left = new BinarySearchTree(value);
        } else {
          insertTreeBranch(tree.left);
        }
      }
    };

    insertTreeBranch(this);  
  },

  contains: function(value){
    var isFound = false;
    
    var findsValueInTree = function(tree){
      if (value === tree.value) {
        isFound = true;
      } else {
        if (value > tree.value && tree.right) {
          findsValueInTree(tree.right);
        }
        if (value < tree.value && tree.left) {
          findsValueInTree(tree.left);
        }
      }
    };
    findsValueInTree(this);
    return isFound;
  },

  depthFirstLog: function(cb){
    
    var recurseAndApplyCallback = function(tree) {
      cb(tree.value);
      
      if (tree.left) {
        recurseAndApplyCallback(tree.left);
      }
      if (tree.right) {
        recurseAndApplyCallback(tree.right);
      }
    };
    
    recurseAndApplyCallback(this);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 
 O(log(n)) for each operation due to recursion
 
 */
