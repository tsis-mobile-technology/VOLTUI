'use strict';

/* Controllers */
	myCtrl.controller('MyCtrl_tframe_simple_dao_detail', ['$scope', '$timeout', 'requestHTTP', 'ngReactGridTextField', 'ngReactGridCheckbox',function($scope, $timeout, requestHTTP, ngReactGridTextField, ngReactGridCheckbox){
        // use case : XHR
		// XHR Success function
        function setDaoResult(result, status, headers, config) {
            $scope.tframe_simple_dao_result = result;

        }
        function setDaoJSONResult(result, status, headers, config) {
        	var dataResult = '';	
//        	dataResult = angular.fromJson(result);
            $scope.tframe_simple_dao_json_result = result;
            $scope.grid.data = result;
            $scope.beforeData = angular.copy(result);
            
            console.log(result._error);
            console.log(result.selectAgent);
            console.log(result.selectBeans);
            console.log(result.selectBean);
        }
        function setDaoTestResult(result, status, headers, config) {
            $scope.tframe_simple_dao_test_result = result;

        }
        function onStatsChart2Fail(data, status, headers, config) {
            console.log("call error");
        }
        // get data
		requestHTTP.getJsonCrossdomainCallback("/t-web/invokeDao.do?service=sampleDao", "", setDaoResult, onStatsChart2Fail);
		requestHTTP.getJsonCrossdomainCallback("/t-web/invokeDao.json?_jsondata={%22service%22=%22sampleDao%22}", "", setDaoJSONResult, onStatsChart2Fail);
		requestHTTP.getJsonCrossdomainCallback("/t-web/invokeDao.test?service=sampleDao", "", setDaoTestResult, onStatsChart2Fail);
		//Grid edit function
		$scope.selections = [];
        $scope.clickedOnRecord = {};
        $scope.editingGrid = false;

        $scope.isEditing = function () {
            return $scope.editingGrid;
        };

        $scope.edit = function () {
            $scope.grid.edit();
            $scope.editingGrid = true;
        };

        $scope.save = function () {
            var data = $scope.grid.save();
            if(angular.equals($scope.grid.save(), $scope.beforeData) == true) {
            	console.debug("changeData: No");
            }
            else {
            	/** TO DO Change data Commit call */
            	console.debug("changeData: Yes");
            }
            $scope.editingGrid = false;
        };

        $scope.cancel = function () {
            $scope.editingGrid = false;
            $scope.grid.cancel();
        };

		$scope.grid = {
                data: [],
                columnDefs: [
                    new ngReactGridCheckbox($scope.selections),
                    {
                    	field: "ID_USER",
                    	displayName: "ID_USER",
                    	edit: function (row) {
                            return new ngReactGridTextField(row, 'ID_USER');
                        },
                        render: function(row) {
                        	return React.DOM.a({href:"javascript:", onClick: function() {
                                $scope.clickedOnRecord = row;
                            }}, row.ID_USER);
                        }
                    },
                    {field: "ID_SO",displayName: "ID_SO"},
                    {field: "ID_RO",displayName: "ID_RO"},
                    {field: "NM_USER",displayName: "NM_USER"},
                    {field: "NO_TEL",displayName: "NO_TEL"},
                    {field: "NO_FAX",displayName: "NO_FAX"},
                    {field: "EMAIL",displayName: "EMAIL"},
                    {field: "ID_LOGIN",displayName: "ID_LOGIN"},
                    {field: "PWD",displayName: "PWD"},
                    {field: "DT_PWD",displayName: "DT_PWD"}
                ],
//                localMode: false,
                getData: function() {
                	$timeout(function() {
//                		requestHTTP.getJsonCrossdomainCallback("../invokeDao.json?_jsondata={%22service%22=%22sampleDao%22}", "", setDaoJSONResult, onStatsChart2Fail);
//                        $scope.grid.data = employees;
//                        $scope.grid.totalCount = employees.length;
                    }, 2000);
                }
            };
		
	}]);