// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js


angular.module('starter', ['ionic', 'ionic.utils', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive


  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'app/shared/tabs.html',
    controller: 'MainCtrl'
  })
  


  // Each tab has its own nav history stack:
  
   .state('tab.list', {
      url: '/lists',
      views: {
        'tab-lists': {
          templateUrl: 'app/views/list/tab-lists.html',
          controller: 'ListCtrl'
        }
      }
    })
  
   .state('tab.list-add', {
      url: '/lists/add',
      views: {
        'tab-lists': {
          templateUrl: 'app/views/list/list-add.html',
          controller: 'ListCtrl'
        }
      }
    })
  
    .state('tab.list-detail', {
      url: '/lists/:listId',
      views: {
        'tab-lists': {
          templateUrl: 'app/views/list/list-detail.html',
          controller: 'ListDetailCtrl'
        }
      }
    })
  
  
   .state('tab.list-detail-add', {
      url: '/lists/:listId/add',
      views: {
        'tab-lists': {
          templateUrl: 'app/views/list/list-detail-add.html',
          controller: 'ListDetailCtrl'
        }
      }
    })
  
  
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'app/views/dash/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'app/views/account/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/lists');

});


var controllers = angular.module('starter.controllers', []);
var services = angular.module('starter.services', []);