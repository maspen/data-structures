var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};

  set.size = 0;

  return set;
};

var setPrototype = {
  add: function(item) {
    if(!this.contains(item)) {
    	this._storage[item] = item;
    	this.size++;
    }
  },
  contains: function(item) {
    if(this._storage.hasOwnProperty(item)) {
      return true;
    } else {
    	return false;
    }
  },
  remove: function(item) {
    if(this.contains(item)) {
    	delete this._storage[item];
    	this.size--;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
