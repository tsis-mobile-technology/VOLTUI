'use strict';

/* Controllers */

	myCtrl.controller('MyCtrl_grid_realgrid', ['$scope',  '$http', 'requestHTTP', function($scope, $http, requestHTTP) {
 
        // variables
        var mainGrid;
        var mainProvider;
        
        // object element insert at div element
        // tagId(grdMain) named element is must exists in body 
        console.log("0");
        setupGrid("grdMain", "100%", "500px");
            
        RealGrids.onload = function (id) {
            console && console.log("==> RealGrid loaded.");         
            mainGrid = new RealGrids.GridView(id);
            mainProvider = new RealGrids.LocalDataProvider();
            mainGrid.setDataProvider(mainProvider);           
            setFields(mainProvider);
            setColumns(mainGrid);
            setOptions(mainGrid);           
            loadData();          
        }
        
        function setFields(provider) {
            // json array for data fields
            var fields = [{fieldName: "ItemId",datType: "text"}, 
                {fieldName: "ItemName"}, 
                {fieldName: "RequestType"}, 
                {fieldName: "ServiceName"},
                {fieldName: "ServiceCode"},
                {fieldName: "Standard"},
                {fieldName: "LowBounds"},
                {fieldName: "LowSign"},
                {fieldName: "HighSign"},
                {fieldName: "HighBounds"},
                {fieldName: "CheckUnit"},
                {fieldName: "CheckPrice", dataType: "number"}];

            if (provider == mainProvider)
                provider.setFields(fields);
            // If there's more provider then add else if code
        } 
        
        function setColumns(grid) {
            // json array for grid columns
            // fieldName is must exists data provider fields
            var columns = [{
                    fieldName: "ItemId",
                width: 40,
                header: { text: "ItemId" },
                styles: { textAlignment: "near" }
            }, {
                fieldName: "ItemName",
                width: 100,
                header: { text: "항목명" },
                styles: { textAlignment: "near" }
            }, {
                fieldName: "RequestType",
                width: 80,
                header: { text: "분야" },
                styles: { textAlignment: "near" }
            }, {
                fieldName: "ServiceName",
                width: 150,
                header: { text: "유형명" },
                styles: { textAlignment: "near" }
            }, {
                fieldName: "ServiceCode",
                width: 250,
                header: { text: "서비스코드" },
                styles: { textAlignment: "near" }
            }, {
                fieldName: "Standard",
                width: 150,
                header: { text: "표준" },
                styles: { textAlignment: "near" }
            }, {
                fieldName: "LowBounds",
                width: 80,
                header: { text: "하위 값" },
                styles: { textAlignment: "near" }
            }, {
                fieldName: "HighBounds",
                width: 80,
                header: { text: "상위 값" },
                styles: { textAlignment: "near" }
            }, {
                fieldName: "CheckUnit",
                width: 80,
                header: { text: "단위" },
                styles: { textAlignment: "near" }
            }, {
                fieldName: "CheckPrice",
                width: 90,
                header: { text: "수수료" },
                styles: { textAlignment: "far" }
            }];

            if (grid == mainGrid)
                grid.setColumns(columns);
            // If there's more grid then add else if code
        }       
        
        function setOptions(grid) {
            grid.setOptions({
                panel: {
                    visible: false
                },
                footer: {
                    visible: false
                },
                checkBar: {
                    visible: false
                },
                statesBar: {
                    visible: false
                },
                edit: {
                    insertable: false,
                    appendable: false,
                    updatable: false,
                    deletable: true,
                    deleteRowsConfirm: true,
                    deleteRowsMessage: "Are you sure?"          
                },          
            });
        }
        
        function loadData() {
            mainProvider.loadData({
                type: "csv",
                url: "DemoData.csv?__time__=" + new Date().getTime(),
                progress: true
            });     
        }
	}]);