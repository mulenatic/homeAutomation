(function() {
    angular
	.module("homeAutomationApp")
	.config(['$routeProvider', config]);

    function config($routeProvider) {
	$routeProvider
	    .when('/', {
		templateUrl: 'angular/home/home.view.html',
		controller: 'homeCtrl',
		controllerAs: 'vm'
		
	    })
	    .otherwise({redirectTo: '/'});
    }
}());
