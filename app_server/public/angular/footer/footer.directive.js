(function() {

    angular
	.module('homeAutomationApp')
	.directive('footerGeneric', footerGeneric);

    function footerGeneric() {
	return {
	    restrict: 'EA',
	    templateUrl: '/angular/footer/footer.view.html'
	};
    }

})();
