(function() {

    angular
	.module('homeAutomationApp')
	.controller('phoneNumberConfigurationCtrl', phoneNumberConfigurationCtrl);

    function phoneNumberConfigurationCtrl(phonenumberConfigurationService) {

	var vm = this;

	vm.pageHeader = {
	    title: 'Rufnummer Konfiguration',
	    strapline: 'Liste der anrufbaren Rufnummern'
	};

	vm.getConfigurations = function() {

	    phonenumberConfigurationService
	    .getAllPhonenumberConfigurations()
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

	    phonenumberConfigurationService
		.deleteConfiguration(configurationId)
		.then((data) => {
		    vm.getConfigurations();
		}, (err) => {
		    vm.getConfigurations();
		    console.log(err);
		    alert(err);
		})
		.catch((err) => {
		    console.log(err);
		    alert(err);
		));
		

	};

	vm.getConfigurations();

    }

})();
