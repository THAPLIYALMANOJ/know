// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('know', ['ionic'])

.run(run)
.config(config);


run.$inject = ['$ionicPlatform', 'Flashcard'];

function run($ionicPlatform, Flashcard) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    Flashcard.getFromLocalStorage();
  });
}


config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'states/home/home.html'
  })

  .state('createSet', {
    url: '/createSet',
    templateUrl: 'states/createSet/createSet.html',
    controller: 'CreateSetCtrl as vmCreateSet'
  })

  .state('viewSets', {
    url: '/viewSets',
    templateUrl: 'states/viewSets/viewSets.html',
    controller: 'ViewSetsCtrl as vmViewSets'
  })

  .state('editSet', {
    url: '/editSet/:setTitle',
    templateUrl: 'states/editSet/editSet.html',
    controller: 'EditSetCtrl as vmEditSet'
  })

  .state('viewCards', {
    url: '/cards/:setTitle',
    templateUrl: 'states/viewCards/viewCards.html',
    controller: 'ViewCardsCtrl as vmViewCards'
  });

  $urlRouterProvider.otherwise('/');

}
