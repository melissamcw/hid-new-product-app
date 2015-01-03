angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Products', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var products = [
    { id: 0, name: 'Physical Access' },
    { id: 1, name: 'Logical Access' },
    { id: 2, name: 'Card Printers' }
  ];

  return {
    all: function() {
      return products;
    },
    get: function(friendId) {
      // Simple index lookup
      return products[friendId];
    }
  }
});
