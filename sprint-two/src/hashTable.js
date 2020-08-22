var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create the tuple with k at 0 and v at 1
  var tuple = [k, v];
  // if the index is empty, set the value at the hashed index as the tuple
  if (this._storage[index] === undefined) {
    this._storage.set(index, []);
    this._storage.storage[index].push(tuple);
  } else {
    this._storage[index].push(tuple);
  }

  // console.log(this._storage.get(index, tuple));
  console.log(this._storage);
  // else push the tuple into that index array
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // storage = [['a', 'b']];
  var bucket = this._storage.get(index);
  return bucket[key];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// hashInstance.insert('cat', 'feisty')
// first we would hash cat which would result in 2
// then we would


// [null, null, [['cat', 2], ['fox', 2]]]

// hashInstance.retrieve('cat')

// then we access our array at the result of the cat hash, 2
// iterate through until we find cat
// return