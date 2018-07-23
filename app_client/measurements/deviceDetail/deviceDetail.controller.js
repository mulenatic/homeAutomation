(function() {

    angular
	.module('homeAutomationApp')
	.controller('deviceDetailCtrl', deviceDetailCtrl);

    function deviceDetailCtrl(measurementService, $routeParams) {

	var vm = this;

	vm.deviceId = $routeParams.deviceId;

	vm.pageHeader = {
	    title: 'Geräte Details',
	    strapline: 'Überblick über alle Messungen des Geräts'
	};

	measurementService
	    .getDeviceMeasurements(vm.deviceId)
	    .then( (data) => {
		vm.data = data.data

		vm.measurementTypes = [];
		vm.data.forEach((item) => {
		    if (!vm.measurementTypes.includes(item.measurementType)) {
			vm.measurementTypes.push(item.measurementType);
		    }
		});
	    })
	    .catch( (err) => {
		console.log(error);
	    });

    }



})();
