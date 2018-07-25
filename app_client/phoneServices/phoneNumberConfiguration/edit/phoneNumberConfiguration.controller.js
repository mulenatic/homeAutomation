(function() {

    angular
	.module('homeAutomationApp')
	.controller('phoneNumberConfigurationEditCtrl', phoneNumberConfigurationEditCtrl);

    function phoneNumberConfigurationEditCtrl(phonenumberConfigurationService) {

	var vm = this;

	vm.pageHeader = {
	    title: 'Rufnummer Konfiguration',
	    strapline: 'Neuanlage/Bearbeitung einer Rufnummern'
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
