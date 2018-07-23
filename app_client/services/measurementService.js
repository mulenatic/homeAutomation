(function() {

    angular
	.module('homeAutomationApp')
	.service('measurementService', measurementService);

    function measurementService($http) {

	var getDeviceList = function () {

	    return $http.get('/api/measurement/device');
	    
	}

	return {
	    getDeviceList: getDeviceList
	};
    }

})();
