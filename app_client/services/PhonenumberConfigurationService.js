(function() {

    angular
	.module('homeAutomation')
	.service('phonenumberConfigurationService', phonenumberConfigurationService);

    function phonenumberConfigurationService($http) {

	var getAllPhonenumberConfigurations() {

	    return $http.get('/api/phonenumberConfiguration');

	}
    }

})();

