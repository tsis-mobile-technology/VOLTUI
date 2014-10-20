/**
 * 
 */
'use strict';

templateCtrl.controller('twda01ea', ['$scope', 'requestHTTP','$http', function($scope, requestHTTP,$http) {
	 // RealGrid variables
	var mainGrid, subGrid, mtrGrid;
    var mainProvider, subProvider, mtrProvider;
    var loading;
    var fields;
    var columns;
    var loadOptionArr=[];
    var loadOption="";
    var users;
    var tmp,tmp1;
    var comId;
    
    //변수 초기화
    var init = function(){
    	$scope.comId='A210';
    	$scope.stDate = "2012-01-01";
        $scope.edDate = "2012-12-31";
        $scope.reqName='';
    	$scope.defPurpose='0';
    	$scope.reqTp='0';
    	$scope.wrkNm='';
    	$scope.wrkCd='';
    	$scope.reqDate='';
    	$scope.custName='';
    	//$scope.$apply();
    };
    //option초기화 
    var loadStoreList = function(){
    	//ng-option 테스트
        function setVisits(result, status, headers, config) {
        	$scope.loadOption = result;
        	
        	$scope.stordCd=result[0];
        }
        function onStatsChart2Fail(data, status, headers, config) {
            console.log("call error");
        }
        
        requestHTTP.getJsonCrossdomainCallback("http://localhost/t-web/invokeDao.json?_jsondata={\"service\"=\"selStoreCdDao\",\"COM_ID\"=\""+$scope.comId +"\",\"TP\"=\"C\"}", "", setVisits, onStatsChart2Fail);
    };
    
    // object element insert at div element
    // tagId(grdMain) named element is must exists in body 
    console.log("0");
    
    setupGrid("grdMain", "100%", "300px");
    setupGrid("grdSub", "100%", "200px");
    setupGrid("grdMtr", "100%", "200px");
    
    
    RealGrids.onload = function (id) {
        console && console.log("==> RealGrid loaded.");
        
        if(id == "grdMain"){
        	mainGrid = new RealGrids.GridView(id);
        	mainProvider = new RealGrids.LocalDataProvider();
            mainGrid.setDataProvider(mainProvider); 
        	fields = [ 
						{fieldName: "REQ_NO"}, 
						{fieldName: "REQ_NAME"},
						{fieldName: "REQ_TP_NM"},
						{fieldName: "REQ_DATE"},
						{fieldName: "REQ_USER"},
						{fieldName: "PURPOSE"},
						{fieldName: "REQ_MAST_STATE"},
						{fieldName: "CONFIRM_USER"},
						{fieldName: "CONFIRM_DATE"},
						{fieldName: "REQ_PURPOSE_CD"},//10
						{fieldName: "REQ_MAST_STATE_CD"},  
						{fieldName: "REQ_TP"},
						{fieldName: "WRK_CD"},
						{fieldName: "WRKNAME"},
						{fieldName: "ACC_NAME"},
						{fieldName: "EPIT_NAME"},
						{fieldName: "ACC_CODE"},
						{fieldName: "EPIT_CODE"},
						{fieldName: "REMARK"},
						{fieldName: "REQ_USER_CD"}, //20
						{fieldName: "PROC_NM"},
						{fieldName: "CUST_CD"},
						{fieldName: "PROC_ST"},
						{fieldName: "YN_GBN1"},
						{fieldName: "YN_GBN2"}
        	        ];
        	
        	columns = [
        	{
                fieldName: "REQ_NO",
                width: 120,
                header: { text: "요청번호" },
                styles: { textAlignment: "near" }
            }, {
            	fieldName: "REQ_NAME",
                width: 330,
                header: { text: "요청서명" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "REQ_TP_NM",
                width: 140,
                header: { text: "입출고유형" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "REQ_DATE",
                width: 100,
                header: { text: "요청일자" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "REQ_USER",
                width: 100,
                header: { text: "요청자" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "PURPOSE",
                width: 100,
                header: { text: "용도" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "REQ_MAST_STATE",
                width: 100,
                header: { text: "요청서상태" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "CONFIRM_USER",
                width: 100,
                header: { text: "SO확인자" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "CONFIRM_DATE",
                width: 100,
                header: { text: "확인일" },
                styles: { textAlignment: "near"}
            }, {//10
            	fieldName: "REQ_PURPOSE_CD",
                width: 100,
                header: { text: "req_purpose_cd" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "REQ_MAST_STATE_CD",
                width: 100,
                header: { text: "req_mast_state_cd" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "REQ_TP",
                width: 100,
                header: { text: "req_tp" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "WRK_CD",
                width: 100,
                header: { text: "공사코드" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "WRKNAME",
                width: 100,
                header: { text: "공사명" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "ACC_NAME",
                width: 100,
                header: { text: "계정" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "EPIT_NAME",
                width: 100,
                header: { text: "표준적요" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "ACC_CODE",
                width: 100,
                header: { text: "계정코드" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "EPIT_CODE",
                width: 100,
                header: { text: "표준적요코드" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "REMARK",
                width: 300,
                header: { text: "비고" },
                styles: { textAlignment: "near"}
            }, {//20
            	fieldName: "REQ_USER_CD",
                width: 100,
                header: { text: "req_user_cd" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "PROC_NM",
                width: 100,
                header: { text: "설계단게" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "CUST_CD",
                width: 100,
                header: { text: "업체코드" },
                styles: { textAlignment: "near"}
            }
            , {
            	fieldName: "PROC_ST",
                width: 100,
                header: { text: "proc_st" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "YN_GBN1",
                width: 100,
                header: { text: "출고완료" },
                styles: { textAlignment: "near"}
            }, {
            	fieldName: "YN_GBN2",
                width: 100,
                header: { text: "입고완료" },
                styles: { textAlignment: "near"}
            }
            
            ];
        	
        	setFields(mainProvider, fields);
            setColumns(mainGrid, columns);
            setOptions(mainGrid);
            
                    
            mainGrid.onDataCellClicked = function(grid, index) {
            	alert(index.itemIndex);
            	alert(index.fieldName);
            	alert(index.column);
            	alert(index.dataRow);
            	alert(grid.getValue(index.itemIndex,index.fieldName));
            	alert(grid.getValue(index.itemIndex,"REQ_NO"));
            };
            
        	
        }else if(id == "grdSub"){
        	subGrid = new RealGrids.GridView(id);
        	subProvider = new RealGrids.LocalDataProvider();
            subGrid.setDataProvider(subProvider); 
            /*
        	fields = [ 
  	                {fieldName: "ITEM"}, 
  	                {fieldName: "MODEL"},
  	                {fieldName: "UNIT"},
  	                {fieldName: "REQ_CNT"},
  	                {fieldName: "CONF_CNT"},
  	                {fieldName: "UNIT_AMT"},
  	                {fieldName: "REMARK"}, 
	                {fieldName: "MTR_CD"},
	                {fieldName: "SPEC_CD"},
	                {fieldName: "SPEC_SEQ"},
	                {fieldName: "SPEC_DTL_SEQ"},
	                {fieldName: "SEQ"},
	                {fieldName: "PUR_YN"},
  	                ];
        	
  	
		  	columns = [{
		          fieldName: "ITEM",
		          width: 90,
		          header: { text: "품명" },
		          styles: { textAlignment: "near" }
		      }, {
		      	fieldName: "MODEL",
		          width: 80,
		          header: { text: "모델" },
		          styles: { textAlignment: "near",
		         }
		      }, {
			     fieldName: "UNIT",
			     width: 80,
			     header: { text: "단위" },
			     styles: { textAlignment: "near",
			     }
		      }, {
				 fieldName: "REQ_CNT",
				 width: 80,
				 header: { text: "청구수량" },
				 styles: { textAlignment: "near",
				         }
			 }, {
				 fieldName: "CONF_CNT",
				 width: 80,
				 header: { text: "불출수량" },
				 styles: { textAlignment: "near",
				         }
			 }, {
				 fieldName: "UNIT_AMT",
				 width: 80,
				 header: { text: "단기" },
				 styles: { textAlignment: "near",
				         }
			 }, {
				 fieldName: "REMARK",
				 width: 80,
				 header: { text: "비고" },
				 styles: { textAlignment: "near",
				         }
			 }, {
				 fieldName: "MTR_CD",
				 width: 80,
				 header: { text: "자재코드" },
				 styles: { textAlignment: "near",
				         }
			 }, {
				 fieldName: "SPEC_CD",
				 width: 80,
				 header: { text: "설계코드" },
				 styles: { textAlignment: "near",
				         }
			 }, {
				 fieldName: "SPEC_SEQ",
				 width: 80,
				 header: { text: "설계코드" },
				 styles: { textAlignment: "near",
				         }
			 }, {
				 fieldName: "SPEC_DTL_SEQ",
				 width: 80,
				 header: { text: "설계순번" },
				 styles: { textAlignment: "near",
				         }
			 }, {
				 fieldName: "SEQ",
				 width: 80,
				 header: { text: "청구서상세순번" },
				 styles: { textAlignment: "near",
				         }
			 }, {
				 fieldName: "PUR_YN",
				 width: 80,
				 header: { text: "자재구분" },
				 styles: { textAlignment: "near",
				         }
			 }];*/
		  	
		  	fields = [ 
	  	                {fieldName: "ITEM"}, 
	  	                {fieldName: "MTR_STD"},
	  	                {fieldName: "MTR_UNIT_NM"},
	  	                {fieldName: "MTR_MNFT_CORP"},
	  	                {fieldName: "MTR_COST"},
	  	                {fieldName: "IMG"},
	  	                {fieldName: "MTR_CD"}, 
		                {fieldName: "MTR_GBN"},
		                {fieldName: "MTR_UNIT"},
		                {fieldName: "CUST_CD"},	               
	  	                ];
	        	
	  	
			  	columns = [{
			          fieldName: "ITEM",
			          width: 90,
			          header: { text: "품명" },
			          styles: { textAlignment: "near" }
			      }, {
			      	fieldName: "MTR_STD",
			          width: 80,
			          header: { text: "모델" },
			          styles: { textAlignment: "near",
			         }
			      }, {
				     fieldName: "MTR_UNIT_NM",
				     width: 80,
				     header: { text: "자재단위이름" },
				     styles: { textAlignment: "near",
				     }
			      }, {
					 fieldName: "MTR_MNFT_CORP",
					 width: 80,
					 header: { text: "제조사" },
					 styles: { textAlignment: "near",
					         }
				 }, {
					 fieldName: "MTR_COST",
					 width: 80,
					 header: { text: "단가" },
					 styles: { textAlignment: "near",
					         }
				 }, {
					 fieldName: "IMG",
					 width: 80,
					 header: { text: "이미지" },
					 styles: { textAlignment: "near",
					         }
				 }, {
					 fieldName: "MTR_CD",
					 width: 80,
					 header: { text: "MTR_CD" },
					 styles: { textAlignment: "near",
					         }
				 }, {
					 fieldName: "MTR_GBN",
					 width: 80,
					 header: { text: "MTR_GBN" },
					 styles: { textAlignment: "near",
					         }
				 }, {
					 fieldName: "MTR_UNIT",
					 width: 80,
					 header: { text: "MTR_UNIT" },
					 styles: { textAlignment: "near",
					         }
				 }, {
					 fieldName: "CUST_CD",
					 width: 80,
					 header: { text: "CUST_CD" },
					 styles: { textAlignment: "near",
					         }
				 }];
		  	
		  	setFields(subProvider, fields);
            setColumns(subGrid, columns);
            setOptions(subGrid);
            
            subGrid.onDataCellDblClicked= function(grid, index) {
            	alert(index.itemIndex);
            	alert(index.fieldName);
            	alert(index.column);
            	alert(index.dataRow);
            	alert(grid.getValue(index.itemIndex,index.fieldName));
            	alert(grid.getValue(index.itemIndex,"REQ_NO"));
            };
        	
        }else{
        	mtrGrid = new RealGrids.GridView(id);
        	mtrProvider = new RealGrids.LocalDataProvider();
            mtrGrid.setDataProvider(mtrProvider); 
            
        	fields = [ 
  	                {fieldName: "ITEM"}, 
  	                {fieldName: "MTR_STD"},
  	                {fieldName: "MTR_UNIT_NM"},
  	                {fieldName: "MTR_MNFT_CORP"},
  	                {fieldName: "MTR_COST"},
  	                {fieldName: "IMG"},
  	                {fieldName: "MTR_CD"}, 
	                {fieldName: "MTR_GBN"},
	                {fieldName: "MTR_UNIT"},
	                {fieldName: "CUST_CD"},	               
  	                ];
        	
  	
		  	columns = [{
		          fieldName: "ITEM",
		          width: 90,
		          header: { text: "품명" },
		          styles: { textAlignment: "near" }
		      }, {
		      	fieldName: "MTR_STD",
		          width: 80,
		          header: { text: "모델" },
		          styles: { textAlignment: "near",
		         }
		      }, {
			     fieldName: "MTR_UNIT_NM",
			     width: 80,
			     header: { text: "자재단위이름" },
			     styles: { textAlignment: "near",
			     }
		      }, {
				 fieldName: "MTR_MNFT_CORP",
				 width: 80,
				 header: { text: "제조사" },
				 styles: { textAlignment: "near",
				         }
			 }, {
				 fieldName: "MTR_COST",
				 width: 80,
				 header: { text: "단가" },
				 styles: { textAlignment: "near",
				         }
			 }, {
				 fieldName: "IMG",
				 width: 80,
				 header: { text: "이미지" },
				 styles: { textAlignment: "near",
				         }
			 }, {
				 fieldName: "MTR_CD",
				 width: 80,
				 header: { text: "MTR_CD" },
				 styles: { textAlignment: "near",
				         }
			 }, {
				 fieldName: "MTR_GBN",
				 width: 80,
				 header: { text: "MTR_GBN" },
				 styles: { textAlignment: "near",
				         }
			 }, {
				 fieldName: "MTR_UNIT",
				 width: 80,
				 header: { text: "MTR_UNIT" },
				 styles: { textAlignment: "near",
				         }
			 }, {
				 fieldName: "CUST_CD",
				 width: 80,
				 header: { text: "CUST_CD" },
				 styles: { textAlignment: "near",
				         }
			 }];
		  	
		  	setFields(mtrProvider, fields);
            setColumns(mtrGrid, columns);
            setOptions(mtrGrid);            
        }
        
        //loadData();
    };
    
    
    
    function setFields(provider, fields) {
        // json array for data fields
        //if (provider == mainProvider)
            provider.setFields(fields);
        // If there's more provider then add else if code
    } 
    
    function setColumns(grid, columns) {
        // json array for grid columns
        // fieldName is must exists data provider fields
        //if (grid == mainGrid){
        	grid.setColumns(columns);
        	//grid.columnByname("COM_ID");
        //}
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
                visible: true,
                exclusive:false //true이면 단건 선택, false는 멀티
            },
            statesBar: {
                visible: true
            },
            edit: {
                insertable: true,
                appendable: true,
                updatable: false,
                deletable: true,
                deleteRowsConfirm: true,
                deleteRowsMessage: "Are you sure?"          
            }          
        });
        
    }
    
    
    
    //realGrid 셋팅 종료
    
    //ng-option 
    function setLoading(v,id) {
        if (v != loading) {
            loading = v;

            // data load가 시작되면 편집을 못하게 한다.
            id.setEditOptions({
                readOnly: loading
            });
        }
    }
    //
    //화면 로딩 된 이후
    $scope.$on('$viewContentLoaded', function(){
    	init();
    	loadStoreList();    	
    });
    
    
    
    
    $scope.search = function (comId, stordCd, stDate, edDate, reqProc, loginUser) {
    	alert(comId+stordCd+' '+stDate+' '+edDate+' '+reqProc+loginUser);
    	
    	grdMain.cancel();
		//mainProvider.rollback();
		mainProvider.clearRows();
    	
    	var jsonUrl = "http://localhost/t-web/invokeDao.json?_jsondata={\"service\"=\"selCooperMastDao\",\"com_id\"=\""+comId+"\"" +
		  ",\"st_dt\"=\""+stDate+"\"" +
 		  ",\"ed_dt\"=\""+edDate+"\"" +
 		  ",\"repo_cd\"=\""+stordCd+"\"" +
 		  ",\"stat\"=\""+reqProc+"\"" +
    	  ",\"login_user\"=\""+loginUser+"\"}";
    	
		GridLoad(mainProvider,grdMain, jsonUrl);
    };
    
    function GridLoad(provider, id, jsonUrl){
    	
    	alert(jsonUrl);
    	provider.loadData({
	        type: "json",
	        method: "post",
	        url: jsonUrl,
	        //url: "http://localhost/t-web/invokeDao.json?_jsondata="{\"service\"=\"sampleDao\",\"COM_ID\"=\"A210\"}",
   	        //url: "http://localhost:8080/t-web/invokeDao.json?_jsondata={\"service\"=\"sampleDao\",\"BUGTYM\"=\"" + $scope.param +"\"}",
	        //}
	        progress: true//,
	       // fillMode : "insert", //append, update
	       // fillPos:dataRow
	    }, function (provider) {
	        var count = provider.getRowCount();
	        $("#loadResult").css("color", "green").text(parseInt(count).toLocaleString() + " rows loaded.").show();
	        setLoading(false,id);
	        id.setFocus();
	    }, function (provider, message) {
	        $("#loadResult").css("color", "red").text("Load failed: " + message).show();
	        setLoading(false,id);
	    });
    }
    
    function GridLoadCsv(provider, id, jsonUrl){
    	
    	provider.loadData({
    		  type: "csv",
              url: "mtr.csv?__time__=" + new Date().getTime(),
              progress: true
    	});
    }
   
	
	$scope.initData = function(){
		
		$scope.reqName='';
		$scope.defPurpose='0';
		$scope.reqTp='0';
		$scope.wrkNm='';
		$scope.wrkCd='';
		$scope.reqDate='';
		$scope.custName='';
		$scope.remark='';
		//$scope.$apply();
		
		grdSub.cancel();
		//mainProvider.rollback();
		subProvider.clearRows();
	};
    
	
	$scope.insMtr = function(){
		//로직
		
		$("#mtrPopup").modal('show');
		$("#mtrPopup").draggable({handle:".modal-header"});
		
	};
	
	
	
	$scope.saveList = function(){
		var saveList = subProvider.getJsonRows(0,subProvider.getRowCount()-1);
		
		var saveList1 = [{'SPEC_CD':'A21014060101'},{'SPEC_CD':'A21014060102'},{'SPEC_CD':'A21014060102'}];
		
		$scope.grdList = saveList;
		//subGrid.getCurrent().dataRow
		
		alert(JSON.stringify(saveList));
		
		function setVisits(result, status, headers, config) {
			alert(status);
        	
        }
        function onStatsChart2Fail(data, status, headers, config) {
            console.log("call error");
        }
        
        //requestHTTP.getJsonCrossdomainCallback("http://localhost/t-web/saveService.json?_jsondata={\"jsonData\"=\""+saveList+"\"}", "", setVisits, onStatsChart2Fail);
        //requestHTTP.getJsonCrossdomainCallback("http://localhost/t-web/saveService.json?_jsondata={\"jsonData\"=\"[{'SPEC_CD':'A21014060101'},{'SPEC_CD':'A21014060102'},{'SPEC_CD':'A21014060102'}]\"}", "", setVisits, onStatsChart2Fail);
		
        
        var tmpJson = {'jsonData':saveList};
	    $http.post("http://localhost/t-web/saveService.json","{jsonData:"+JSON.stringify(saveList)+",jsonPara:"+JSON.stringify(saveList1)+"}","")
	    .success(function (data, status,headers, config){
	    	subProvider.setJsonRows(data);
	    }).error(function (data,status,headers, config){
	    	console.log("call error");
	    });
	    
	};
	
	
	$scope.showExcel = function(){
		mainGrid.exportGrid({
			type:"excel",
			target:"local",
			url:"test.xls",
			confirmTitle:"엑셀저장 테스트",
			confirmMessage:"저장하시겠습니까?."
			
		});
	};
	
	
	
	
	$scope.mtrSch = function(){
		
		GridLoadCsv(mtrProvider, mtrGrid, "mtr.csv__time__=" + new Date().getTime());
	};
	
	$scope.mtrAdd = function(){
		var rows = mtrGrid.getCheckedRows();
		
		for(var index=0;index<rows.length;index++){
			
			//mtrGrid.getValue(rows[index], "ITEM")
			
			var row ={
					"ITEM": mtrGrid.getValue(rows[index], "ITEM"),
					"MTR_STD": mtrGrid.getValue(rows[index], "MTR_STD"),
					"MTR_UNIT_NM": mtrGrid.getValue(rows[index], "MTR_UNIT_NM"),
					"MTR_MNFT_CORP": "1234",
					"MTR_COST": "1234",
					"IMG": "1234",
					"MTR_CD": "1234",
					"MTR_GBN": "1234",
					"MTR_UNIT": "1234",
					"CUST_CD": "1234"
			};
			
			subProvider.addRow(row);
		}
		$("#mtrPopup").modal('hide');	
	};
	
	/* {fieldName: "ITEM"}, 
  	                {fieldName: "MODEL"},
  	                {fieldName: "UNIT"},
  	                {fieldName: "REQ_CNT"},
  	                {fieldName: "CONF_CNT"},
  	                {fieldName: "UNIT_AMT"},
  	                {fieldName: "REMARK"}, 
	                {fieldName: "MTR_CD"},
	                {fieldName: "SPEC_CD"},
	                {fieldName: "SPEC_SEQ"},
	                {fieldName: "SPEC_DTL_SEQ"},
	                {fieldName: "SEQ"},
	                {fieldName: "PUR_YN"},
	 * alert(index.itemIndex);
        	alert(index.fieldName);
        	alert(index.column);
        	alert(index.dataRow);
        	alert(grid.getValue(index.itemIndex,index.fieldName));
        	alert(grid.getValue(index.itemIndex,"REQ_NO"));
        	
	 *  {fieldName: "ITEM"}, 
       {fieldName: "MTR_STD"},
       {fieldName: "MTR_UNIT_NM"},
       {fieldName: "MTR_MNFT_CORP"},
       {fieldName: "MTR_COST"},
       {fieldName: "IMG"},
       {fieldName: "MTR_CD"}, 
     {fieldName: "MTR_GBN"},
     {fieldName: "MTR_UNIT"},
     {fieldName: "CUST_CD"},	               
       ];
	*/
	
	/* 구분자에 의해 select option 테그 생성
	  $scope.users = [
		                 { "CODE": 'Jo', "NAME": 'Jordan',   "GBN": '111'},
		                 { "CODE": 'Anne', "NAME": 'Asher',  "GBN": '111'},
		                 { "CODE": 'Steve', "NAME": 'Stone', "GBN": '222'},
		                 { "CODE": 'Kev', "NAME": 'King',    "GBN": '222'}
		                 ];
	    
	    $scope.tmp=[];
	    $scope.tmp1=[];
	    
	    for(var i=0;i<$scope.users.length;i++){
			if($scope.users[i].GBN=="111"){
				$scope.tmp.push($scope.users[i]);
			}else if($scope.users[i].GBN=="222"){
				$scope.tmp1.push($scope.users[i]);
			}
		}
	
	*/
	 
	$scope.showPop = function(){
		//로직
		
		$("#myModal").modal('show');
		$("#myModal").draggable({handle:".modal-header"});
	};
	
	$scope.hidePop = function(){
		$("#myModal").modal('hide');		
	};
	
	$scope.gridAdd = function(){
		mainProvider.setValue(1, "REQ_NO","xxxxxxxxxx");
		
	};
	
	$scope.checkBar = function(){
		/* 체크하기
		 * var row = mainGrid.getCurrent().dataRow;
		var exclusive = $('#chkExclusive').is("checked");
		mainGrid.checkItem(row,true,exclusive);
		*/
		
		var items = mainGrid.getCheckedItems();
		alert(items);
		var rows = mainGrid.getCheckedRows();
		alert(rows);
	};
	 
	$scope.acc_chg = function(){
		alter(index);
	};
	
	
	
    
}]);