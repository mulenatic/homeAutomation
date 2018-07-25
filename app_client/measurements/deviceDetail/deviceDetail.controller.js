(function() {

    angular
	.module('homeAutomationApp')
	.controller('deviceDetailCtrl', deviceDetailCtrl);

    function deviceDetailCtrl(measurementService, $routeParams, $filter) {

	var vm = this;

	vm.deviceId = $routeParams.deviceId;

	vm.pageHeader = {
	    title: 'Messungen des Geräts ' + vm.deviceId,
	    strapline: ''
	};

	vm.chartdata={};
	vm.chartlabels={};
	vm.measurementTypes = [];
	vm.showAll = false;

	vm.getMeasurementData = function() {

	    measurementService
		.getDeviceMeasurements(vm.deviceId, vm.showAll)
		.then( (data) => {
		    vm.data = data.data;

		    vm.data.forEach((item) => {
			if (!vm.measurementTypes.includes(item.measurementType)) {
			    vm.measurementTypes.push(item.measurementType);
			}
		    });

		    vm.measurementTypes.forEach((item) => {
			vm.chartdata[item] = [];
			vm.chartlabels[item] = [];
		    });


		    vm.data.forEach((item) => {

			vm.chartdata[item.measurementType].push(item.measurementValue);
			vm.chartlabels[item.measurementType].push($filter('date')(item.createdOn, 'short'));


		    });

		    
		})
		.catch( (err) => {
		    console.log(error);
		});
	}

	vm.getMeasurementData();


    }


})();
