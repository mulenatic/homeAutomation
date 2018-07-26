(function() {

    angular
	.module('homeAutomationApp')
	.controller('serviceConfigurationCtrl', serviceConfigurationCtrl);

    function serviceConfigurationCtrl(serviceConfigurationService) {

	var vm = this;

	vm.pageHeader = {
	    title: 'Service Konfiguration',
	    strapline: 'Liste aller Services'
	};

	vm.getConfigurations = function() {

	    serviceConfigurationService
	    .getAllServiceConfigurations()
	    .then((data) => {
		vm.configurations = data.data;
	    }, (err) => {
		console.log(err);
	    })
	    .catch((err) => {
		console.log(err);
	    });
	    
	}

	vm.deleteConfiguration = function(configurationId) {

	    serviceConfigurationService
		.deleteConfiguration(configurationId)
		.then((data) => {
		    vm.getConfigurations();
		}, (err) => {
		    vm.getConfigurations();
		    console.log(err);
		    alert("Error occured: " + err);
		})
		.catch((err) => {
		    console.log(err);
		    alert("Fatal error occured: " + err);
		});
		

	};

	vm.getConfigurations();

    }

})();
