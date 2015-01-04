'use strict';
angular.module('HidProductAppNew.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Physical Access', description: '' },
    { id: 1, title: 'Logical Access', description: '' },
    { id: 2, title: 'Card Printers', description: '' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  };
});


