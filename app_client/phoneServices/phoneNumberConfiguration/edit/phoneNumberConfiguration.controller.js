(function() {

    angular
	.module('homeAutomationApp')
	.controller('phoneNumberConfigurationEditCtrl', phoneNumberConfigurationEditCtrl);

    function phoneNumberConfigurationEditCtrl(phonenumberConfigurationService, $location, $routeParams) {

	var vm = this;

	vm.pageHeader = {
	    title: 'Neuanlage einer Rufnummer',
	    strapline: ''
	};

	vm.input = {};
	
	vm.input.name = null;
	vm.input.number = null;
	vm.errorMessage = null;

	if ($routeParams._id) {

	    phonenumberConfigurationService
		.getPhonenumberConfiguration($routeParams._id);
		.then((configuration) => {
		    vm.input = configuration.data;
		})
		.catch((err) => {
		    vm.errorMessage = "Beim Laden der Daten ist ein Problem aufgetreten";
		    console.log(err);
		});

	}

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
		});
	};

	

    }

})();
