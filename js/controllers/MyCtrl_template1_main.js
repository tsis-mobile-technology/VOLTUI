'use strict';

/* Controllers */
templateCtrl.controller('MyCtrl_template1_main', ['$scope', '$timeout', 'requestHTTP', 'ngReactGridTextField', 'ngReactGridCheckbox',function($scope, $timeout, requestHTTP, ngReactGridTextField, ngReactGridCheckbox){
    // use case : XHR
	// XHR Success function
    function setDaoJSONResult(result, status, headers, config) {
    	var dataResult = '';	
        $scope.grid.data = result;
        $scope.beforeData = angular.copy(result);
        console.log(result);
    }
    function onStatsChart2Fail(data, status, headers, config) {
        console.log("call error");
    }
    
    // get data
	requestHTTP.getJsonCrossdomainCallback("/t-web/invokeDao.json?_jsondata={%22service%22=%22sampleDao%22}", "", setDaoJSONResult, onStatsChart2Fail);
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
    
    $scope.init = function () {
    	var r = confirm("데이터를 초기화 하시겠습니까?");
    	if (r == true) {
    	    $scope.grid.data = angular.copy($scope.beforeData);
    	} 
    };

    $scope.save = function () {
        var data = $scope.grid.save();
        if(angular.equals($scope.grid.save(), $scope.beforeData) == true) {
        	console.log("changeData: No");
        }
        else {
        	var r = confirm("변경된 데이터가 있습니다!\n정말 저장하시겠습니까?");
        	if (r == true) {
        		$scope.beforeData = angular.copy(data);
        		// TODO : after database update service call
        	}
        	/** TO DO Change data Commit call */
        	console.log("changeData: Yes");
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
            horizontalScroll: true//,
//            localMode: false,
//            getData: function() {
//            	$timeout(function() {
//
//                }, 2000);
//            }
        };
}]);