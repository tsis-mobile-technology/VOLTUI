'use strict';

/* Controllers */
var myCtrl = angular.module('myApp.controllers', [])
	.controller('MyCtrl_gallery', ['$scope', function($scope){}])
	.controller('MyCtrl_icons_filetypes', ['$scope', function($scope){}])
	.controller('MyCtrl_icons_font_awesome', ['$scope', function($scope){}])
	.controller('MyCtrl_icons_glyphicons_pro', ['$scope', function($scope){}])
	.controller('MyCtrl_icons_halflings', ['$scope', function($scope){}])
	.controller('MyCtrl_icons_social', ['$scope', function($scope){}])
	.controller('MyCtrl_login', ['$scope', function($scope){}])
	.controller('MyCtrl_page_todo', ['$scope', function($scope){}])
	.controller('MyCtrl_typography', ['$scope', function($scope){}]);

var templateCtrl = angular.module('myApp-template1.controllers', [])
	.controller('MyCtrl_template1_left_menu_one', ['$scope', '$location', '$route', '$routeParams', function($scope, $location, $route, $routeParams){

	    $scope.goVOLTUI = function() {
	    	console.log("goVOLTUI");
	        document.location.href = "/t-web/VOLTUI";
	    };
	    $scope.goReact = function() {
	    	console.log("goReact!");
	    	$location.path("/main");
	    	$scope.style3="r-l";
    		$scope.style2="active";
    		$scope.style1="r-l";
	    };
	    $scope.goWelcome = function() {
	    	console.log("goWelcome!");
	    	$location.path("/welcome");
	    	$scope.style3="r-l";
	    	$scope.style1="active";
    		$scope.style2="r-l";
	    };
	    $scope.goRealgrid = function() {
	    	console.log("goRealgrid!");
	    	$location.path("/main-real");
	    	$scope.style1="r-l";
    		$scope.style2="r-l";
    		$scope.style3="active";
	    };
	}]);
