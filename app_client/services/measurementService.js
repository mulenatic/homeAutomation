(function() {

    angular
	.module('homeAutomationApp')
	.service('measurementService', measurementService);

    function measurementService($http) {

	var getDeviceList = function () {

	    return $http.get('/api/measurement/device');
	    
	}

	var getDeviceMeasurements = function(deviceId) {
	    return $http.get('/api/measurement/device/' + deviceId)
	}

	return {
	    getDeviceList: getDeviceList,
	    getDeviceMeasurements: getDeviceMeasurements
	};
    }



})();
