

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._numberInserts = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  console.log('index ' + index);

  if(this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  var tupleArrayAtIndex = this._storage.get(index);
  var replaced = false;
  for (var i = 0; i < tupleArrayAtIndex.length; i++) {
    if (tupleArrayAtIndex[i][0] === k) {
      tupleArrayAtIndex[i] = [k, v];
      !replaced;
      // increment number of tuple inserts so can
      // later use to determine if _limit needs to increase
      this._numberInserts++;
    }
  }
  if (!replaced) {
    tupleArrayAtIndex.push([k, v]);
    this._numberInserts++;
  }
  // debugger;
  // increase limit if 75%
  // var numberOccupiedArrayCells = 0;
  // for(var l = 0; l < this._limit; l++) {
  //   // 
  //   if(this._storage.get(l) !== undefined) {
  //     numberOccupiedArrayCells++;
  //   }
  // }
  if(this._numberInserts >= (this._limit * 0.75)) {
    this._limit = this._limit * 2;
  }
  console.log(this._numberInserts);
  console.log(this._limit);
};

HashTable.prototype.changeLimit = function(newLimit) {
  
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
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i].splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
  O(n) - we have the first index, so we only need to iterate throughthe contents of the bucket array
 */


