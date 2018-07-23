(function() {
    angular
	.module("homeAutomationApp")
	.controller('homeCtrl', homeCtrl);

    function homeCtrl() {

	var vm = this;

	vm.pageHeader = {
	    title: 'Startseite',
	    strapline: 'Überblick über alle verfügbaren Services'
	};
	
    }
    
})();
