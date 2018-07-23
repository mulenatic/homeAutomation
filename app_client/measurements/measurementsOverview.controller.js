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
	    .then(function(data) {
		vm.deviceList = data;
	    },
		  function(e) {
		      console.log(e);
		  })
	    .catch(function(e) {
		console.log(e)
	    });
	
    }
    
})();
