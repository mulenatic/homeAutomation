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
	    .when('/ui/phoneServices/twilioConfiguration', {
		templateUrl: 'phoneServices/twilioConfiguration/twilioConfiguration.view.html',
		controller: "twilioConfigurationCtrl",
		controllerAs: 'vm'
	    })
	    .when('/ui/phoneServices/phoneNumberConfiguration', {
		templateUrl: 'phoneServices/twilioConfiguration/phoneNumberConfiguration.view.html',
		controller: "phoneNumberConfigurationCtrl",
		controllerAs: 'vm'
	    })
    	    .otherwise({redirectTo: '/ui'});
    }


}());
