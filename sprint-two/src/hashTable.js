

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
// get at index & see if undefined
  if(this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  var tupleArrayAtIndex = this._storage.get(index);
  var replaced = false;
  for (var i = 0; i < tupleArrayAtIndex; i++) {
    if (tupleArrayAtIndex[i][0] === k) {
      tupleArrayAtIndex[i] = [k, v];
      !replaced;
      break;
    }
  }
  if (!replaced) {
    tupleArrayAtIndex.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if(this._storage.get(index) !== undefined) {
    var tupleArrayAtIndex = this._storage.get(index);
    for(var i = 0; i < tupleArrayAtIndex.length; i++) {
      if (tupleArrayAtIndex[i][0] === k) {
        return tupleArrayAtIndex[i][1];
      }
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.delete(index);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


