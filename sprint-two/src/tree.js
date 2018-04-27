var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {
  addChild: function(value) {
    var newChild = new Tree(value);
    this.children.push(newChild);
  },
  contains: function(target) {
      // recursive
      var isFound = false;
      var findValInChild = function(tree) {
        if (tree.value === target) {
          isFound = true;
          return;
        }
        for (var i = 0; i < tree.children.length; i++) {
          findValInChild(tree.children[i]);
        }
      };

      findValInChild(this);
      return isFound;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

O(n) worst case since you need to traverse whole tree
 */
