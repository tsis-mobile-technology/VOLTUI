	'use strict';

/* Controllers */
	myCtrl.controller('MyCtrl_n3_charts', ['$scope', function($scope){
		$scope.data = [{x: 0, value: 12}, {x: 1, value: 0}, {x: 2, value: 23}];

		// Column
		$scope.options = {
			lineMode: 'cardinal',
			tension: 0.2,
			series: [
				{y: 'value', type: 'column'},
				{y: 'x', type: 'column'},
				{y: 'value', label: 'Pouet'}
			]
		};
	}]);