var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.key = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.storage[someInstance.key] = value;
    someInstance.key++;
  };

  someInstance.pop = function() {
    someInstance.key--;
    if(someInstance.key < 0) {
      someInstance.key = 0;
    }
    return someInstance.storage[someInstance.key];
  };

  someInstance.size = function() {
    return someInstance.key;
  };

  return someInstance;
};
