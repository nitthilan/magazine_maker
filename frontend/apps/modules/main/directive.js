/* Services */
// Demonstrate how to register services
// In this case it is a simple value service.
MyAppServices.value('version', '0.1');

/* Directives */
MyAppDirectives.
  directive('appVersion', ['version', function(version) {
    'use strict';
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
