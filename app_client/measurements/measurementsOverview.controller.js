(function() {
    angular
	.module("homeAutomationApp")
	.controller('measurementsOverviewCtrl', measurementsOverviewCtrl);

    function measurementsOverviewCtrl(measurementService) {

	var vm = this;

	vm.pageHeader = {
	    title: 'Sensoren',
	    strapline: 'Überblick über alle verfügbaren Sensoren'
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
