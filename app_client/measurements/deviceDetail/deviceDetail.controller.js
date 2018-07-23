(function() {

    angular
	.module('homeAutomationApp')
	.controller('deviceDetailCtrl', deviceDetailCtrl);

    function deviceDetailCtrl($http) {

	var vm = this;

	vm.pageHeader = {
	    title: 'Geräte Details',
	    strapline: 'Überblick über alle Messungen des Geräts'
	};


	vm.message = "This is a test";

    }


})();
