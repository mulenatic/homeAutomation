(function() {
    angular
	.module("homeAutomationApp")
	.config(config);

    function config($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);
	
    	$routeProvider
    	    .when('/ui', {
    		templateUrl: 'home/home.view.html',
    		controller: 'homeCtrl',
    		controllerAs: 'vm'
    	    })
	    .when('/ui/measurementOverview', {
		templateUrl: 'measurements/measurementsOverview.view.html',
		controller: 'measurementsOverviewCtrl',
		controllerAs: 'vm'
	    })
	    .when('/ui/deviceDetail/:deviceId', {
		templateUrl: 'measurements/deviceDetail/deviceDetail.view.html',
		controller: 'deviceDetailCtrl',
		controllerAs: 'vm'
	    })
    	    .otherwise({redirectTo: '/ui'});
    }


}());
