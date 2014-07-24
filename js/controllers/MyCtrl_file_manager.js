'use strict';

/* Controllers */
	myCtrl.controller('MyCtrl_file_manager', ['$scope', function($scope){
		/* ---------- File Manager ---------- */
		var elf = $('.file-manager').elfinder({
			url : 'assets/misc/elfinder-connector/connector.php'  // connector URL (REQUIRED)
		}).elfinder('instance');
	}]);