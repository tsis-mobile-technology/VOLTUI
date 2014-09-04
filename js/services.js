'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  value('appname', 'VOLT UI').
  factory('requestHTTP', ['$rootScope', '$http', function($rootScope, $http) {
  	var factory = {};
    factory.getJsonCrossdomain = function(url, param) {
        $http({
            method      : 'GET',
            url         : url + param,
            dataType    : 'json',
            crossDomain : true,
            timeout     : 5000,
            header      : {
                    'Access-Control-Allow-Origin': '*', //'http://59.12.238.193:8080',
                    'Access-Control-Allow-Headers': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Methods': 'Origin Accept Content-Type X-Requested-With X-CSRF-Token'}
        }).
        success(function(data, status, headers, config) {
            console.log("requestGetJsonCrossdomain:url:" + url);
            console.log("requestGetJsonCrossdomain:param:" + param);
            console.log("requestGetJsonCrossdomain:data:" + data);
            // console.log("requestGetJsonCrossdomain:status:" + status);
            // console.log("requestGetJsonCrossdomain:headers:" + headers);
            // console.log("requestGetJsonCrossdomain:config:" + config);    
            return data;
        }).
        error(function(data, status, headers, config) {
            console.log("requestGetJsonCrossdomain:url:" + url);
            console.log("requestGetJsonCrossdomain:param:" + param);
            // console.log("requestGetJsonCrossdomain:data:" + data);
            // console.log("requestGetJsonCrossdomain:status:" + status);
            // console.log("requestGetJsonCrossdomain:headers:" + headers);
            // console.log("requestGetJsonCrossdomain:config:" + config);
            return status;
        });
    };

    factory.getJsonCrossdomainCallback = function(url, param, callback, failback) {
        $http({
            method      : 'GET',
            url         : url + param,
            dataType    : 'json',
            crossDomain : true,
            timeout     : 30000,
            header      : {
                    'Access-Control-Allow-Origin': '*', //'http://59.12.238.193:8080',
                    'Access-Control-Allow-Headers': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Methods': 'Origin Accept Content-Type X-Requested-With X-CSRF-Token'}
        }).
        success(callback).
        error(failback);
    };

    return factory;
}]).
factory('appStorage',[ '$window', function($window) {
	      var appStorages = {};
	      var api = undefined;

	      if ($window.localStorage) {
	        api = {
	          set : function(name, value) {
	            $window.localStorage.setItem(name, JSON.stringify(value));
	          },
	          get : function(name) {
	            var str = $window.localStorage.getItem(name);
	            var val = {};
	            try {
	              val = str ? JSON.parse(str) : {};
	            }
	            catch (e) {
	              console.log('Parse error for localStorage ' + name);
	            }
	            return val;
	          },
	          clear : function() {
	            $window.localStorage.clear();
	          }
	        };
	      }
	      // possibly support other

	      if (!api) {
	        throw new Error('Could not find suitable storage');
	      }

	      return function(appName, property, scope) {
	        if (appName === undefined) {
	          throw new Error('appName is required');
	        }

	        var appStorage = appStorages[appName];

	        var update = function() {
	          api.set(appName, appStorage);
	        };

	        var clear = function() {
	          api.clear(appName);
	        };

	        if (!appStorage) {
	          appStorage = api.get(appName);
	          appStorages[appName] = appStorage;
	          update();
	        }

	        var bind = function(property, scope) {
	          scope[property] = appStorage;
	          scope.$watch(property, function() {
	            update();
	          }, true);
	        };

	        if (property !== undefined && scope !== undefined) {
	          bind(property, scope);
	        }

	        return {
	          get : function(name) {
	            return appStorage[name];
	          },
	          set : function(name, value) {
	            appStorage[name] = value;
	            update();
	          },
	          clear : clear
	        };
	      };
	    } ]);

angular.module('myApp-template1.services', []).
factory('requestHTTP', ['$rootScope', '$http', function($rootScope, $http) {
	var factory = {};
  factory.getJsonCrossdomain = function(url, param) {
      $http({
          method      : 'GET',
          url         : url + param,
          dataType    : 'json',
          crossDomain : true,
          timeout     : 5000,
          header      : {
                  'Access-Control-Allow-Origin': '*', //'http://59.12.238.193:8080',
                  'Access-Control-Allow-Headers': 'GET, POST, PUT, DELETE, OPTIONS',
                  'Access-Control-Allow-Methods': 'Origin Accept Content-Type X-Requested-With X-CSRF-Token'}
      }).
      success(function(data, status, headers, config) {
          console.log("requestGetJsonCrossdomain:url:" + url);
          console.log("requestGetJsonCrossdomain:param:" + param);
          console.log("requestGetJsonCrossdomain:data:" + data);
          // console.log("requestGetJsonCrossdomain:status:" + status);
          // console.log("requestGetJsonCrossdomain:headers:" + headers);
          // console.log("requestGetJsonCrossdomain:config:" + config);    
          return data;
      }).
      error(function(data, status, headers, config) {
          console.log("requestGetJsonCrossdomain:url:" + url);
          console.log("requestGetJsonCrossdomain:param:" + param);
          // console.log("requestGetJsonCrossdomain:data:" + data);
          // console.log("requestGetJsonCrossdomain:status:" + status);
          // console.log("requestGetJsonCrossdomain:headers:" + headers);
          // console.log("requestGetJsonCrossdomain:config:" + config);
          return status;
      });
  };

  factory.getJsonCrossdomainCallback = function(url, param, callback, failback) {
      $http({
          method      : 'GET',
          url         : url + param,
          dataType    : 'json',
          crossDomain : true,
          timeout     : 30000,
          header      : {
                  'Access-Control-Allow-Origin': '*', //'http://59.12.238.193:8080',
                  'Access-Control-Allow-Headers': 'GET, POST, PUT, DELETE, OPTIONS',
                  'Access-Control-Allow-Methods': 'Origin Accept Content-Type X-Requested-With X-CSRF-Token'}
      }).
      success(callback).
      error(failback);
  };

  return factory;
}]);