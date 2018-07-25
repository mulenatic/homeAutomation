(function() {

    angular
	.module('homeAutomationApp')
	.controller('phoneNumberConfigurationCtrl', phoneNumberConfigurationCtrl);

    function phoneNumberConfigurationCtrl() {

	var vm = this;

	vm.pageHeader = {
	    title: 'Rufnummer Konfiguration',
	    strapline: 'Liste der anrufbaren Rufnummern'
	};

    }

})();
