(function() {

    angular
	.module('homeAutomationApp')
	.directive('footerGeneric', footerGeneric);

    function footerGeneric() {
	return {
	    restrict: 'EA',
	    templateUrl: 'footer/footer.view.html'
	};
    }

})();
