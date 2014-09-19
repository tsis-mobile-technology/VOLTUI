'use strict';

/* Controllers */
templateCtrl.controller('MyCtrl_template1_main_real', ['$scope', 'requestHTTP', '$templateCache', function($scope, requestHTTP, $templateCache) {
	this.form = $scope.form;
    // RealGrid variables
    var mainGrid;
    var mainProvider;
    var loading;
    // object element insert at div element
    // tagId(grdMain) named element is must exists in body 
    console.log("0");
//    setupGrid("grdMain", "100%", "500px");

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
    
    // Action Two : Input Data setting
    function setData() {
        var row = 0;
        var current = grdMain.getCurrent();
     
        if (current) {
            row = Math.max(0, current.dataRow);
        }
     
        var v = mainProvider.getJsonRow(row);
        console.log(row + " => " + JSON.stringify(v));
        $scope.action_two = [];
    	$scope.action_two = mainProvider.getJsonRow(row);
    	
    	console.log($scope.action_two.ID_SO);
    	
    	$scope.$apply();
    }
    
    $scope.init = function (action_two) {

    	var r = confirm("데이터를 초기화 하시겠습니까?");
    	if (r == true) {
    		$scope.action_two = [];
    		grdMain.cancel();
    		mainProvider.rollback();
    	} 
    };

    $scope.save = function () {
    	$templateCache.put('templateId.html', 'This is the content of the template');
    };
    
    function setFields(provider) {
        // json array for data fields
        var fields = [{fieldName: "FG_GROUP",datType: "text"}, 
            {fieldName: "ID_SO"}, 
            {fieldName: "NM_USER"}, 
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
                fieldName: "ID_SO",
            width: 80,
            header: { text: "ID_SO" },
            styles: { textAlignment: "near" }
        }, {
            fieldName: "NM_USER",
            width: 100,
            header: { text: "NM_USER" },
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
        grid.onDataCellClicked = function(id, index) {
        	setData();
        }
    }
    
    function setLoading(v) {
        if (v != loading) {
            loading = v;

            // data load가 시작되면 편집을 못하게 한다.
            grdMain.setEditOptions({
                readOnly: loading
            });
        }
    }
    
    function loadData() {
  	
    	mainProvider.loadData({
    	        type: "json",
    	        method: "post",
    	        url: "http://localhost:8080/t-web/invokeDao.json?_jsondata={%22service%22=%22sampleDao%22}",
    	        progress: true
    	    }, function (provider) {
    	        var count = provider.getRowCount();
    	        $("#loadResult").css("color", "green").text(parseInt(count).toLocaleString() + " rows loaded.").show();
    	        setLoading(false);
    	        grdMain.setFocus();
    	    }, function (provider, message) {
    	        $("#loadResult").css("color", "red").text("Load failed: " + message).show();
    	        setLoading(false);
    	    });
    }
}]);