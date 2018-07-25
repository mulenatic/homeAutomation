(function() {

    angular
	.module('homeAutomationApp')
	.service('phonenumberConfigurationService', phonenumberConfigurationService);

    function phonenumberConfigurationService($http) {

	var getAllPhonenumberConfigurations = function() {

	    return $http.get('/api/phonenumberConfiguration');

	}

	return {
	    getAllPhonenumberConfigurations: getAllPhonenumberConfigurations
	};
    }

})();

