(function() {

    angular
	.module("homeAutomationApp", ['ngRoute']);

    function config($routeProvider) {
    	$routeProvider
    	    .when('/', {
    		templateUrl: 'home/home.view.html',
    		controller: 'homeCtrl',
    		controllerAs: 'vm'
    	    })
    	    .otherwise({redirectTo: '/'});
    }

    angular
    	.module('homeAutomationApp')
    	.config(config);

})();

