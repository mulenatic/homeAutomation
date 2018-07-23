(function() {

    angular
	.module('homeAutomationApp')
	.directive('pageHeader', pageHeader);


    function pageHeader() {
	return {
	    restrict: 'EA',
	    scope: {
		content: '=content'
	    },
	    templateUrl: 'pageHeader/pageHeader.view.html'
	}
    };

})();
