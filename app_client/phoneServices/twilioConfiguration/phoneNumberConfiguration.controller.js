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

	phonenumberConfigurationService
	    .getAllPhonenumberConfigurations()
	    .then((data) => {
		vm.configurations = data;
	    }, (err) => {
		console.log(err);
	    })
	    .catch((err) => {
		console.log(err);
	    });

    }

})();
