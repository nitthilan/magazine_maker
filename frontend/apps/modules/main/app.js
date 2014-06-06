
window.routes =
{
  "/front_page": {
    templateUrl: 'modules/newstream/front_page.html', 
    controller: 'frontPageCtrl', 
    requireLogin: false
  },
  "/preview": {
    templateUrl: 'modules/newstream/article_preview.html', 
    controller: 'articlePreviewCtrl', 
    requireLogin: false
  },
  "/setting": {
    templateUrl: 'modules/newstream/magazine_setting.html', 
    controller: 'magazineSettingCtrl', 
    requireLogin: false
  }
};
// Declare app level module which depends on filters, and services
var MyApp = angular.module('myApp', ['myApp.services', 'myApp.directives', 
                            'myApp.controllers', 'ngRoute', 'ngResource', 'ngSanitize', 
                            'ui.bootstrap', 'LocalStorageModule', 'ui.select2', 'ui.utils',
                            'xeditable', 'angularMoment']);
var MyAppControllers = angular.module('myApp.controllers', []);
var MyAppServices = angular.module('myApp.services',[]);
var MyAppDirectives = angular.module('myApp.directives',[]);



MyApp
.config(['$routeProvider','localStorageServiceProvider', 
  function($routeProvider, localStorageServiceProvider) {
  for(var path in window.routes){
    $routeProvider.when(path, window.routes[path]);
  }
  $routeProvider.otherwise({redirectTo: '/front_page'});
  // Set a prefix for this application key values
  localStorageServiceProvider.setPrefix('collab');
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

