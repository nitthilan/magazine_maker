
window.routes =
{
  "home": {
    url:'/home',
    templateUrl: 'modules/newstream/home.html', 
    controller: 'homeCtrl', 
    requireLogin: false
  },
  "feedback": {
    url:'/feedback',
    templateUrl: 'modules/feedback/feedback.html', 
    controller: 'feedbackCtrl', 
    requireLogin: false
  },
  "front_page": {
    url:'/{magazineid:[a-fA-F0-9]{24}}?categories',
    templateUrl: 'modules/newstream/front_page.html', 
    controller: 'frontPageCtrl', 
    requireLogin: false
  },
  "preview": {
    url:'/preview/{magazineid:[a-fA-F0-9]{24}}',
    templateUrl: 'modules/newstream/article_preview.html', 
    controller: 'articlePreviewCtrl', 
    requireLogin: false
  },
  "setting": {
    url:'/setting/{magazineid:[a-fA-F0-9]{24}}',
    templateUrl: 'modules/newstream/magazine_setting.html', 
    controller: 'magazineSettingCtrl', 
    requireLogin: false
  }
};
// Declare app level module which depends on filters, and services
var MyApp = angular.module('myApp', ['myApp.services', 'myApp.directives', 
                            'myApp.controllers', 'ngRoute', 'ngResource', 'ngSanitize', 
                            'ui.bootstrap', 'LocalStorageModule', 'ui.select2', 'ui.utils',
                            'xeditable', 'angularMoment', 'ui.router', 'ngTagsInput']);
var MyAppControllers = angular.module('myApp.controllers', []);
var MyAppServices = angular.module('myApp.services',[]);
var MyAppDirectives = angular.module('myApp.directives',[]);



MyApp
.config(['$stateProvider', '$urlRouterProvider', '$routeProvider','localStorageServiceProvider', 
  function($stateProvider, $urlRouterProvider, $routeProvider, localStorageServiceProvider) {
    $urlRouterProvider.otherwise("/home");
    for (var statePath in window.routes){
      $stateProvider
        .state(statePath, {
          url: window.routes[statePath].url,
          templateUrl: window.routes[statePath].templateUrl,
          controller: window.routes[statePath].controller
        });
    }
  /* for(var path in window.routes){
    $routeProvider.when(path, window.routes[path]);
  }
  $routeProvider.otherwise({redirectTo: '/front_page'});
  // Set a prefix for this application key values
  localStorageServiceProvider.setPrefix('collab'); */
}])
.run(['$rootScope','$location', 'editableOptions',function($rootScope, $location, editableOptions){
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
  /* if(!SessionService.getUserAuthenticated()){
    $location.path('/login');
  } */
  $rootScope.$on("$locationChangeStart", function(event, next, current) {
    for(var i in window.routes) {
      if(next.indexOf(i) != -1) {
        if(window.routes[i].requireLogin /*&& !SessionService.getUserAuthenticated()*/) {
          alert("You need to be authenticated to see this page!");
          event.preventDefault();
        }
      }
    }
  });
}]);

