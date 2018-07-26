(function() {

    angular
	.module('homeAutomationApp')
	.controller('phoneNumberConfigurationEditCtrl', phoneNumberConfigurationEditCtrl);

    function phoneNumberConfigurationEditCtrl(phonenumberConfigurationService, $location) {

	var vm = this;

	vm.pageHeader = {
	    title: 'Neuanlage einer Rufnummer',
	    strapline: ''
	};

	vm.input = {};
	
	vm.input.name = null;
	vm.input.number = null;
	vm.errorMessage = null;

	vm.savePhonenumberConfiguration = function() {

	    vm.errorMessage = null;
	    
	    phonenumberConfigurationService
		.savePhonenumberConfiguration(vm.input)
		.then(() => {
		    $location.path('/ui/phoneServices/phoneNumberConfiguration');
		}).
		catch((err) => {
		    vm.errorMessage = "Alle Felder müssen gefüllt sein, der Name muss eindeutig sein.";
		    console.log(err);
		});;
	};

	

    }

})();
