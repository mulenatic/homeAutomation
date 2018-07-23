(function() {
    angular
	.module("homeAutomationApp")
	.controller('measurementsOverviewCtrl', measurementsOverviewCtrl);

    function measurementsOverviewCtrl(measurementService) {

	var vm = this;

	vm.pageHeader = {
	    title: 'Sensoren',
	    strapline: '�berblick �ber alle verf�gbaren Sensoren'
	};

	measurementService
	    .getDeviceList()
	    .success(function(data) {
		vm.deviceList = data
	    })
	    .error(function(e) {
		console.log(e);
	    });
	
    }
    
})();
