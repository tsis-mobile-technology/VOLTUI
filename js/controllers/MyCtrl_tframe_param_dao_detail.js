'use strict';

/* Controllers */
	myCtrl.controller('MyCtrl_tframe_param_dao_detail', ['$scope', 'requestHTTP', function($scope, requestHTTP){
        // use case : XHR
        function setParamDaoResult(result, status, headers, config) {
            $scope.tframe_param_dao_result = result;

        }
        function setParamDaoJSONResult(result, status, headers, config) {
            $scope.tframe_param_dao_json_result = result;

        }
        function setParamDaoTestResult(result, status, headers, config) {
            $scope.tframe_param_dao_test_result = result;

        }
        function onStatsChart2Fail(data, status, headers, config) {
            console.log("call error");
        }
		requestHTTP.getJsonCrossdomainCallback("../invokeParamDao.do?_SQLNAME=sample.selectBean&BEAN_NAME=TEST4", "", setParamDaoResult, onStatsChart2Fail);
		requestHTTP.getJsonCrossdomainCallback("../invokeParamDao.json?_jsondata={%22_SQLNAME%22=%22sample.selectBean%22,%22BEAN_NAME%22=%22TEST4%22}", "", setParamDaoJSONResult, onStatsChart2Fail);
		requestHTTP.getJsonCrossdomainCallback("../invokeParamDao.test?_SQLNAME=sample.selectBean&BEAN_NAME=TEST4", "", setParamDaoTestResult, onStatsChart2Fail);
		
		
	}]);