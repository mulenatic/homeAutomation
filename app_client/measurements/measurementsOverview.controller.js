(function() {
    angular
	.module("homeAutomationApp")
	.controller('measurementsOverviewCtrl', measurementsOverviewCtrl);

    function measurementsOverviewCtrl() {

	var vm = this;

	vm.pageHeader = {
	    title: 'Sensoren',
	    strapline: '�berblick �ber alle verf�gbaren Sensoren'
	};
	
    }
    
})();
