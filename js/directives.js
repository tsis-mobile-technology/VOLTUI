'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('appName', ['appname', function(appname) {
  	return function(scope, elm, attrs) {
  		elm.text(appname);
  	}
  }]).
  directive('plotchart', function() {
    return {
      restrict: 'E',
      link: function(scope, elem, attrs) {
        var chart = null,
            opts = {
                  series: {
                    lines: { show: true,
                        lineWidth: 2
                    },
                    points: { show: true, 
                      lineWidth: 2 
                    },
                    shadowSize: 0
                  },
                  grid: { hoverable: true, 
                    clickable: true, 
                    tickColor: "#f9f9f9",
                    borderWidth: 0
                  },
                  legend: {
                    show: false
                  },  
                  colors: ["#bdea74"],
                  xaxis: {ticks:15, tickDecimals: 0},
                  yaxis: {ticks:5, tickDecimals: 0},
            };
        var data = scope[attrs.ngModel];
        scope.$watch('data', function(v) {
          if(!chart) {
            chart = $.plot(elem, v, opts);
            elem.show();
          } else {
            chart.setData(v);
            chart.setupGrid();
            chart.draw();
          }
        });
      }
    };
  });
