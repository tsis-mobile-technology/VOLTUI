'use strict';

/* Controllers */
	myCtrl.controller('MyCtrl_tframe_simple_dao_detail', ['$scope', 'requestHTTP', function($scope, requestHTTP){
        // use case : XHR
        function setDaoResult(result, status, headers, config) {
            $scope.tframe_simple_dao_result = result;

        }
        function setDaoJSONResult(result, status, headers, config) {
            $scope.tframe_simple_dao_json_result = result;

        }
        function setDaoTestResult(result, status, headers, config) {
            $scope.tframe_simple_dao_test_result = result;

        }
        function onStatsChart2Fail(data, status, headers, config) {
            console.log("call error");
        }
		requestHTTP.getJsonCrossdomainCallback("../invokeDao.do?service=sampleDao", "", setDaoResult, onStatsChart2Fail);
		requestHTTP.getJsonCrossdomainCallback("../invokeDao.json?_jsondata={%22service%22=%22sampleDao%22}", "", setDaoJSONResult, onStatsChart2Fail);
		requestHTTP.getJsonCrossdomainCallback("../invokeDao.test?service=sampleDao", "", setDaoTestResult, onStatsChart2Fail);
		
		
	}]);