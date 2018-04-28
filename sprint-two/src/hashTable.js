

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
  tupleArrayAtIndex.push([k,v]);
    
  // this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.delete(index);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


