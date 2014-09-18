'use strict';

/* Controllers */
	myCtrl.controller('MyCtrl_tframe_param_dao_detail', ['$scope', 'requestHTTP', function($scope, requestHTTP){
		
        // RealGrid variables
        var mainGrid;
        var mainProvider;
        var loading;
        // object element insert at div element
        // tagId(grdMain) named element is must exists in body 
        console.log("0");
        setupGrid("gridMain", "100%", "500px");
            
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
//		requestHTTP.getJsonCrossdomainCallback("/t-web/invokeParamDao.do?_SQLNAME=sample.selectBean&BEAN_NAME=TEST4", "", setParamDaoResult, onStatsChart2Fail);
//		requestHTTP.getJsonCrossdomainCallback("/t-web/invokeParamDao.json?_jsondata={%22_SQLNAME%22=%22sample.selectBean%22,%22BEAN_NAME%22=%22TEST4%22}", "", setParamDaoJSONResult, onStatsChart2Fail);
//		requestHTTP.getJsonCrossdomainCallback("/t-web/invokeParamDao.test?_SQLNAME=sample.selectBean&BEAN_NAME=TEST4", "", setParamDaoTestResult, onStatsChart2Fail);

        function setFields(provider) {
            // json array for data fields
            var fields = [{fieldName: "FG_GROUP",datType: "text"}, 
                {fieldName: "CD_POSITION"}, 
                {fieldName: "NO_TEL"}, 
                {fieldName: "DD_IN"},
                {fieldName: "CD_BRANCH"},
                {fieldName: "FG_USER"},
                {fieldName: "EMAIL"},
                {fieldName: "DT_UPDATE"},
                {fieldName: "ID_USER"},
                {fieldName: "DD_USE_END"}];

            if (provider == mainProvider)
                provider.setFields(fields);
            // If there's more provider then add else if code
        } 
        
        function setColumns(grid) {
            // json array for grid columns
            // fieldName is must exists data provider fields
            var columns = [{
                fieldName: "FG_GROUP",
                width: 90,
                header: { text: "FG_GROUP" },
                styles: { textAlignment: "far" }
            }, {
                    fieldName: "CD_POSITION",
                width: 80,
                header: { text: "CD_POSITION" },
                styles: { textAlignment: "near" }
            }, {
                fieldName: "NO_TEL",
                width: 100,
                header: { text: "NO_TEL" },
                styles: { textAlignment: "near" }
            }, {
                fieldName: "DD_IN",
                width: 80,
                header: { text: "DD_IN" },
                styles: { textAlignment: "near" }
            }, {
                fieldName: "CD_BRANCH",
                width: 150,
                header: { text: "CD_BRANCH" },
                styles: { textAlignment: "near" }
            }, {
                fieldName: "FG_USER",
                width: 250,
                header: { text: "FG_USER" },
                styles: { textAlignment: "near" }
            }, {
                fieldName: "EMAIL",
                width: 150,
                header: { text: "EMAIL" },
                styles: { textAlignment: "near" }
            }, {
                fieldName: "DT_UPDATE",
                width: 80,
                header: { text: "DT_UPDATE" },
                styles: { textAlignment: "near" }
            }, {
                fieldName: "ID_USER",
                width: 80,
                header: { text: "ID_USER" },
                styles: { textAlignment: "near" }
            }, {
                fieldName: "DD_USE_END",
                width: 80,
                header: { text: "DD_USE_END" },
                styles: { textAlignment: "near" }
            }];

            if (grid == mainGrid)
                grid.setColumns(columns);
            // If there's more grid then add else if code
        }       
        
        function setOptions(grid) {
            grid.setOptions({
                panel: {
                    visible: true
                },
                footer: {
                    visible: true
                },
                checkBar: {
                    visible: true
                },
                statesBar: {
                    visible: true
                },
                edit: {
                    insertable: true,
                    appendable: true,
                    updatable: true,
                    deletable: true,
                    deleteRowsConfirm: true,
                    deleteRowsMessage: "Are you sure?"          
                },          
            });
        }
        
        function setLoading(v) {
            if (v != loading) {
                loading = v;
//                $('#btnInsert').attr("disabled", v);
//                $('#btnAppend').attr("disabled", v);
//                $('#btnUpdate').attr("disabled", v);
         
                // data load가 시작되면 편집을 못하게 한다.
                gridMain.setEditOptions({
                    readOnly: loading
                });
            }
        }
        
        function loadData() {
//        	    $.ajaxSetup({ cache: false });
//        	    var gridUrl;
//        	    if (language == "ko")
//        	        gridUrl = "http://demo.realgrid.net/DemoGrids/defaultgrid_ko.grid";
//        	    else
//        	        gridUrl = "http://demo.realgrid.net/DemoGrids/defaultgrid_en.grid";
//        	 
//        	    $.getJSON(gridUrl, {}, function (data) {
//        	        mainGrid.loadGrid(data);
//        	        setOptions(grdMain);
//        	        setSkin(grid, 49, setStyles);
//        	    });
        	
        	mainProvider.loadData({
        	        type: "json",
        	        method: "post",
//        	        url: "http://demo.realgrid.net/DemoData/defaultloaddata.json?__time__=" + new Date().getTime(),
        	        url: "http://localhost:8080/t-web/invokeDao.json?_jsondata={%22service%22=%22sampleDao%22}",
//        	        url: "http://localhost:8080/volt_test/invokeParamDao.json?_jsondata={%22_SQLNAME%22=%22sample.selectBean%22,%22BEAN_NAME%22=%22TEST4%22}",
        	        progress: true
        	    }, function (provider) {
        	        var count = provider.getRowCount();
        	        $("#loadResult").css("color", "green").text(parseInt(count).toLocaleString() + " rows loaded.").show();
        	        setLoading(false);
        	        gridMain.setFocus();
        	    }, function (provider, message) {
        	        $("#loadResult").css("color", "red").text("Load failed: " + message).show();
        	        setLoading(false);
        	    });
        }
        
	}]);