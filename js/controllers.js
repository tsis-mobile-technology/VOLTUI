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
	.controller('MyCtrl_template1_left_menu_one', ['$scope', '$location', '$route', '$routeParams', '$rootScope', 'documentComponent', 'requestHTTP', function($scope, $location, $route, $routeParams, $rootScope, documentComponent, requestHTTP){
	    function init(){
	    	console.log("init");
	        resizeH();
	        userInfoLoc();
	    }
	    function resizeH(){
	        $("#left-category, #left-menu").css({'height':$(document).height()});
	    }
	    function userInfoLoc(){
	    	var temp_ = ($(document).height()) - (($(window).height()) + ($(window).scrollTop()));
	        $('.user-info').css({'top': $(document).height()-150 });
	    }
	    
	    $scope.oneDepth = function () {
	    	console.log("oneDepth");
	    	function setDaoJSONResult(result, status, headers, config) {
	        	$rootScope.subMenu = "00000";
	            $rootScope.menuMains = result;	            
	        }
	        
	        function onStatsChart2Fail(data, status, headers, config) {
	            console.log("call error");
	        }
	    	// get data
	    	requestHTTP.getJsonCrossdomainCallback("/t-web/menuMainBiz.json?_jsondata={%22UP_MENU_ID%22=%2200000%22}", "", setDaoJSONResult, onStatsChart2Fail);
	        
	    };

	    $scope.goVOLTUI = function() {
	    	console.log("goVOLTUI");
	        document.location.href = "/t-web/VOLTUI";
	    };
	    
	    $scope.goContents = function (MENU_ID) {
	    	console.log(MENU_ID);
	    	$location.path("/" + MENU_ID);
	    	
	    };
	    
	    $scope.goDepth1st = function(MENU_ID) {
	    	console.log(MENU_ID);
	    	$rootScope.stMenu = MENU_ID;
	    	$rootScope.menu1STs = $scope.menuMains;
	    };

		$scope.$on('$routeChangeSuccess', function(next, current) { 
			console.log("$routeChangeSuccess");
		});
		$scope.$on('$routeUpdate', function(next, current) { 
			console.log("$routeChangeSuccess");
		});
		$scope.$on('$routeChangeStart', function(next, current) { 
			console.log("$routeChangeStart");
		});
		$scope.$on('$locationChangeSuccess', function(next, current) { 
			console.log("$locationChangeSuccess");
		});
		$scope.$on('$locationChangeStart', function(next, current) { 
			console.log("$locationChangeStart");
		});
		$scope.$on('$includeContentRequested', function(next, current) { 
			console.log("$includeContentRequested");
		});
		$scope.$on('$includeContentLoaded', function(next, current) { 
			console.log("$includeContentLoaded");
			init();
			setupGrid("grdMain", "100%", "500px");
		});	

	}]).
	controller('MyCtrl_template1_left_menu_two', ['$scope', '$location', '$route', '$routeParams', '$rootScope', 'documentComponent', 'requestHTTP', function($scope, $location, $route, $routeParams, $rootScope, documentComponent, requestHTTP){
	    $scope.goContentsMenu = function (MENU_ID) {
	    	console.log(MENU_ID);
	    	$rootScope.stContentsMenu = MENU_ID;
	    	$rootScope.menu2STs = $scope.menuMains;
	    };
	    $scope.showTwoDepth = function (MENU_ID) {
	    	$(document).on("click", ".menu-title", function() {
		            $('.caret').removeClass('caret-up');
		            $('.depth-1, .depth-2').hide();
		            $(this).find('.caret').addClass('caret-up');
		            $(this).next('.depth-1').show();
	    	});

	        $('.depth-1').children('li').off('click').on('click', function(){
	            $(this).children('.depth-2').show();
	        });
	        $('.tab-menu').children('div').off('click').on('click', function(){
	            $('.tab-menu div').removeClass('active');
	            $(this).addClass('active');
	        });
	    }
	}]);