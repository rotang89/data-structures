var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.key = 0;
  someInstance.i = 0;

  // Implement the methods below

  var index = 0;

  someInstance.enqueue = function(value) {
    someInstance.i++;
    someInstance.storage[someInstance.key] = value;
    someInstance.key++;
  };

  someInstance.dequeue = function() {
    someInstance.i--;
    if (someInstance.i < 0) {
      someInstance.i = 0;
    }
    var least = Infinity;
    for (var key in someInstance.storage) {
      if (key < least) {
        console.log('test');
        least = key;
      }
    }
    var string = someInstance.storage[least];
    delete someInstance.storage[least];
    return string;
  };

  someInstance.size = function() {
    return someInstance.i;
  };

  return someInstance;
};

// [NEW] [] [] [] [] [REMOVE]
// n^length ----------> 0 (numeric keys)
//