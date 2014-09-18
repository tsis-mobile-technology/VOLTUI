'use strict';

/* Controllers */
	myCtrl.controller('MyCtrl_tframe_property_dao_detail', ['$scope', 'requestHTTP', function($scope, requestHTTP){
        // use case : XHR
        function setPropertyDaoResult(result, status, headers, config) {
            $scope.tframe_property_dao_result = result;

        }
        function setPropertyDaoJSONResult(result, status, headers, config) {
            $scope.tframe_property_dao_json_result = result;
//            var str = JSON.stringify(result);
//            console.log(str);
//            var newArr = JSON.parse(result);
//            while (newArr.count > 0) {
                console.log(result._error);
                console.log(result.selectAgent);
                console.log(result.selectBeans);
                console.log(result.selectBean);
//            }
        }
        function setPropertyDaoTestResult(result, status, headers, config) {
            $scope.tframe_property_dao_test_result = result;

        }
        function onStatsChart2Fail(data, status, headers, config) {
            console.log("call error");
        }
		requestHTTP.getJsonCrossdomainCallback("../invokeDao.do?service=propService&BEAN_NAME=TEST4", "", setPropertyDaoResult, onStatsChart2Fail);
		requestHTTP.getJsonCrossdomainCallback("../invokeDao.json?_jsondata={%22service%22=%22propService%22,%22BEAN_NAME%22=%22TEST5%22}", "", setPropertyDaoJSONResult, onStatsChart2Fail);
		requestHTTP.getJsonCrossdomainCallback("../invokeDao.test?service=propService&BEAN_NAME=TEST4", "", setPropertyDaoTestResult, onStatsChart2Fail);
		
		
	}]);