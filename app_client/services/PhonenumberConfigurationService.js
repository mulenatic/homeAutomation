(function() {

    angular
	.module('homeAutomationApp')
	.service('phonenumberConfigurationService', phonenumberConfigurationService);

    function phonenumberConfigurationService($http) {

	var getAllPhonenumberConfigurations = function() {

	    return $http.get('/api/phonenumberConfiguration');

	}

	var savePhonenumberConfiguration = function(input) {

	    return $http.post('/api/phonenumberConfiguration', input);

	}

	var deleteConfiguration = function(configurationId) {

	    return $http.delete('/api/phonnumberConfiguration/' + String(configurationId));
	}

	return {
	    getAllPhonenumberConfigurations: getAllPhonenumberConfigurations,
	    savePhonenumberConfiguration: savePhonenumberConfiguration,
	    deleteConfiguration: deleteConfiguration
	};
    }
    

})();

