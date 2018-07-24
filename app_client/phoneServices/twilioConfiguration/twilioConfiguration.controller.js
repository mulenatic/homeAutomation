(function() {

    angular
	.module('homeAutomationApp')
	.controller('twilioConfigurationCtrl', twilioConfigurationCtrl);

    function twilioConfigurationCtrl() {

	var vm = this;

	vm.pageHeader = {
	    title: 'Twilio Konfiguration',
	    strapline: 'Anrufe konfigurieren'
	};

    }

})();
