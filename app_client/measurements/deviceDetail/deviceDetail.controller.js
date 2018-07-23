(function() {

    angular
	.module('homeAutomationApp')
	.controller('deviceDetailCtrl', deviceDetailCtrl);

    function deviceDetailCtrl(measurementService, $routeParams, $filter) {

	var vm = this;

	vm.deviceId = $routeParams.deviceId;

	vm.pageHeader = {
	    title: 'Geräte Details',
	    strapline: 'Überblick über alle Messungen des Geräts'
	};

	vm.chartdata=[];
	vm.chartlabels=[];
	vm.measurementTypes = [];
	vm.chartseries = [];

	measurementService
	    .getDeviceMeasurements(vm.deviceId)
	    .then( (data) => {
		vm.data = data.data;

		vm.data.forEach((item) => {
		    if (!vm.measurementTypes.includes(item.measurementType)) {
			vm.measurementTypes.push(item.measurementType);
		    }
		});

		vm.measurementTypes.forEach((item) => {
		    vm.chartdata.push([]);
		    vm.chartseries.push(item);
		});

		vm.data.forEach((item) => {
		    
		    var index = vm.measurementTypes.indexOf(item.measurementType);
		    vm.chartdata[index].push(item.measurementValue);
		    if (index == 0) {
			vm.chartlabels.push($filter('date')(item.createdOn, 'short'));
		    }

		});

		
	    })
	    .catch( (err) => {
		console.log(error);
	    });



    }



})();
