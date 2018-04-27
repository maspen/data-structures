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
    // iterate over this.children
    // if(this.value === target){
    //   return true;
    // } else if(this.children.length === 0) {
    //   return false;
    // } else {
      // recursive
      var findValInChild = function(tree) {
        debugger;
        if (tree.value === target) {
          return true;
        }
        if (tree.children.length > 0) {
          for (var i = 0; i < tree.children.length; i++) {
            findValInChild(tree.children[i]);
          }
        }
      };

      return findValInChild(this);
      // return false; 
    // }
  }
};

// treeMethods.addChild = function(value) {
// };

// treeMethods.contains = function(target) {
// };



/*
 * Complexity: What is the time complexity of the above functions?
 */
