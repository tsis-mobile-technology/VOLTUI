'use strict';

/* Controllers */
	myCtrl.controller('MyCtrl_tframe_simple_web_detail', ['$scope', 'requestHTTP', function($scope, requestHTTP){
        // use case : XHR
        function setWebResult(result, status, headers, config) {
            $scope.tframe_simple_web_result = result;

        }
        function setWebJSONResult(result, status, headers, config) {
            $scope.tframe_simple_web_json_result = result;

        }
        function setWebTestResult(result, status, headers, config) {
            $scope.tframe_simple_web_test_result = result;

        }
        function onStatsChart2Fail(data, status, headers, config) {
            console.log("call error");
        }
		requestHTTP.getJsonCrossdomainCallback("../sampleBiz.do?", "", setWebResult, onStatsChart2Fail);
		requestHTTP.getJsonCrossdomainCallback("../sampleBiz.json?_jsondata={}", "", setWebJSONResult, onStatsChart2Fail);
		requestHTTP.getJsonCrossdomainCallback("../sampleBiz.test?", "", setWebTestResult, onStatsChart2Fail);
		
		
	}]);