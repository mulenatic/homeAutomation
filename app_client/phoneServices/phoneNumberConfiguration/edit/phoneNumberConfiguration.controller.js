(function() {

    angular
	.module('homeAutomationApp')
	.controller('phoneNumberConfigurationEditCtrl', phoneNumberConfigurationEditCtrl);

    function phoneNumberConfigurationEditCtrl(phonenumberConfigurationService) {

	var vm = this;

	vm.pageHeader = {
	    title: 'Neuanlage einer Rufnummer',
	    strapline: ''
	};

	vm.input = {};
	
	vm.input.name = null;
	vm.input.number = null;

	vm.savePhonenumberConfiguration = function() {
	    phonenumberConfigurationService
		.savePhonenumberConfiguration(vm.input)
		.then((configuration) => {
		    $location.path('/ui/phoneServices/phoneNumberConfiguration');
		}).
		catch((err) => {
		    console.log(err);
		});;
	};

	

    }

})();
