angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('ProductsCtrl', function($scope, Products) {
  $scope.products = Products.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Products) {
  $scope.friend = Products.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
