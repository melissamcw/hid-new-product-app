angular.module('myApp', ['ionic'])

.config(function ($compileProvider){
  // Set the whitelist for certain URLs just to be safe
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      //abstract: true,
      templateUrl: "tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash@tab': {
          template: '<ion-view title="Dashboard"></ion-view>',
        }
      }
    })
    .state('tab.posts', {
      url: '/posts',
      views: {
        'tab-posts@tab': {
          template: '<ion-view title="Posts"></ion-view>'
        }
      }
    })
    
    .state('home', {
          url: '/home',
          views: {
              '': {
                  templateUrl: 'tpl.home.html',
                  controller: 'HomeCtrl',
              }
          }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');
  $urlRouterProvider.otherwise('/home');

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('HomeCtrl', function($scope, $location) {
})
;