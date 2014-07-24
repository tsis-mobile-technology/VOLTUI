'use strict';

/* Controllers */

	myCtrl.controller('MyCtrl_grid_react', ['$scope',  '$http', '$timeout', 'requestHTTP', 'ngReactGrid', function($scope, $http, $timeout, requestHTTP, ngReactGrid) {
 
        var employees = [];
        
        // for(var i = 0; i < 49; i++)
        //     employees.push({
        //         firstName: "John " + i,
        //         lastName: "Doe " + i,
        //         companyName: "tsis " + i,
        //         liveCity: "서울 " + i
        //     });

        // for logging
        function logArrayElements(element, index, array) {
            console.log("a[" + index + "] = " + element);
        }

        // use case : XHR
        function setGridReact(result, status, headers, config) {
            result.forEach(logArrayElements);
            console.log(result);
            $scope.grid.data = result;

        }

        function onRequestHTTP2Fail(data, status, headers, config) {
            console.log("call error");
        }

        $scope.grid = {
            data: [],
            columnDefs: [
                {
                    field: "firstName",
                    displayName: "First Name"
                },
                {
                    field: "lastName",
                    displayName: "Last Name"
                },
                {
                    field: "companyName",
                    displayName: "회사이름"
                },
                {
                    field: "liveCity",
                    displayName: "사는 곳"
                }
            ],
            localMode: false,
            getData: function() {
                var grid = this;
                $timeout(function() {
                    requestHTTP.getJsonCrossdomainCallback("grid_react.jsp", "", setGridReact, onRequestHTTP2Fail);
                    $scope.grid.data = employees;
                    $scope.grid.totalCount = employees.length;
                }, 2000);
            }
        };

        // $scope.$watch(
        //     function() { return  $scope.grid; },
        //     function(newVal) { onRequestHTTP2Succ(); }
        // );
        
	}]);