(function() {

    angular
	.module('homeAutomationApp')
	.service('phonenumberConfigurationService', phonenumberConfigurationService);

    function phonenumberConfigurationService($http) {

	var getAllPhonenumberConfigurations = function() {

	    return $http.get('/api/phonenumberConfiguration');

	}

	var getPhonenumberConfiguration = function(id) {
	    return $http.get('/api/phonenumberConfiguration');
	}

	var savePhonenumberConfiguration = function(input) {

	    return $http.post('/api/phonenumberConfiguration', input);

	}

	var deleteConfiguration = function(configurationId) {

	    return $http.delete('/api/phonenumberConfiguration/' + String(configurationId));
	}

	return {
	    getAllPhonenumberConfigurations: getAllPhonenumberConfigurations,
	    getPhonenumberConfiguration: getPhonenumberConfiguration,
	    savePhonenumberConfiguration: savePhonenumberConfiguration,
	    deleteConfiguration: deleteConfiguration
	};
    }
    

})();

