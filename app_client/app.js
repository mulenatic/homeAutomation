(function() {

    angular
	.module("homeAutomationApp", ['ngRoute']);

    function config($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);
	
    	$routeProvider
    	    .when('/', {
    		templateUrl: 'home/home.view.html',
    		controller: 'homeCtrl',
    		controllerAs: 'vm'
    	    })
	    .when('/measurementOverview', {
		templateUrl: 'measurements/measurementsOverview.view.html',
		controller: 'measurementsOverviewCtrl',
		controllerAs: 'vm'
	    })
    	    .otherwise({redirectTo: '/'});
    }

    angular
    	.module('homeAutomationApp')
    	.config(config);

})();

