var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  var index = 0;

  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function() {
    if (index > 0) {
      var dequeued = storage[0];
      delete storage[0];
      for (var key in storage) {
        storage[key - 1] = storage[key];
      }
      delete storage[index - 1];
      index--;
      return dequeued;
    }

  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};