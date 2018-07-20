(function() {
    angular
	.module("homeAutomationApp", []);

    var homeCtrl = function($scope) {
	$scope.data = {
	    title: "Ein neuer Titel",
	    strapline: "Teststrapline"
	}
    }

    angular
	.module("homeAutomationApp")
	.controller("homeCtrl", homeCtrl);
})();

