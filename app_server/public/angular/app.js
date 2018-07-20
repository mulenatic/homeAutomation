(function() {
    angular
	.module("homeAutomationApp", ['ngRoute']);

    var homeCtrl = function($scope) {
	$scope.data = {
	    title: "Ein neuer Titel"
	}
    }

    angular
	.module("homeAutomationApp")
	.controller("homeCtrl", homeCtrl);

    
})();
