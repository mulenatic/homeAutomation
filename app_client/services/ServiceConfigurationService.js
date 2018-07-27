(function() {

    angular
	.module('homeAutomationApp')
	.service('serviceConfigurationService', serviceConfigurationService);

    function serviceConfigurationService($http) {

	var getAllServiceConfigurations = function() {

	    return $http.get('/api/serviceConfiguration');

	}

	var getServiceConfiguration = function(id) {
	    return $http.get('/api/serviceConfiguration');
	}

	var saveServiceConfiguration = function(input) {

	    return $http.post('/api/serviceConfiguration', input);

	}

	var deleteConfiguration = function(configurationId) {

	    return $http.delete('/api/serviceConfiguration/' + String(configurationId));
	}

	return {
	    getAllServiceConfigurations: getAllServiceConfigurations,
	    getServiceConfiguration: getServiceConfiguration,
	    saveServiceConfiguration: saveServiceConfiguration,
	    deleteConfiguration: deleteConfiguration
	};
    }
    

})();

