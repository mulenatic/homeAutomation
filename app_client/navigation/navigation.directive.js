(function() {

    angular
	.module("homeAutomationApp")
	.directive("navigation", navigation);

    function navigation() {
	return {
	    restrict: 'EA',
	    templateUrl: 'navigation/navigation.view.html'
	}
    }

})();
