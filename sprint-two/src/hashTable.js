//LimitedArray obj
// .set(index, value) add
// get(index) retrieve
// each(callback) applies callback to all elements



var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
// [ //Limited storage arr
//   1 [ //Specific index of that arr
//       [mouse, fast], [cat, fiesty]
//   ]
// ]

// storage[0] = [
//   [k, v]
// ]
// storage[0].push[k1, v1]

// LimitedArray.storage = [];
// LimitedArray.storage[index] = [];



HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //edge cases
  if (typeof k === 'string') {
    var touple = [k, v];
    if (Array.isArray(this._storage.get(index))) {
      for (var i = 0; i < this._storage.get(index).length; i++) {
        if (k === this._storage.get(index)[i][0]) {
          this._storage.get(index)[i][1] = v;
        }
      }
      this._storage.get(index).push(touple);
      console.log(this._storage[index]);
    } else {
      this._storage.set(index, [touple]);
    }
  }
  return false;
  //Hash with native function
  //Insert .set
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (typeof k === 'string') {
    var bucket = this._storage.get(index);
    console.log(bucket);
    for (var i = 0; i < bucket.length; i++) {
      if (k === bucket[i][0]) {
        return bucket[i][1];
      }
    }
    return undefined;
  }
  return false;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (typeof k === 'string') {
    var bucket = this._storage.get(index);
    console.log(bucket);
    for (var i = 0; i < bucket.length; i++) {
      if (k === bucket[i][0]) {
        console.log('Keys matched');
        bucket.splice(i, 1);
      }
    }
  }
  return false;
};

//We are going to input some data
//that data will be assigned to an index key
//we can retrieve that data or delete based on that key

//insert
// Insert data into the table
// key has to be string

//if the key is a string
//create the index
//set the touple
//if the storage[index] is empty
//create a bucket with our new touple [ [touple] ]
//use .set to insert the touple to the index
// else if there is already a bucket
// push [k,v] into storage[index]
//else
//return false

//retrieve
// Get data out by giving a key
// Make sure key exists and is a string

//if the key is a string
//var bucket = calling .get on our index

//iterate over bucket
//return if bucket key === given key
//else
//return false
//else
//return false

//remove
// Deletes a specific key-value pair
// Make sure key exists and is a string

//if key is a string
//var bucket = .get();
//iterate over bucket
//if key === given key
//splice on bucket[i]
//break
//else
//return false;
//----------------------------------------
//else
//return false

/*
 * Complexity: What is the time complexity of the above functions?
 */