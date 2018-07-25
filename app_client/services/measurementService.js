(function() {

    angular
	.module('homeAutomationApp')
	.service('measurementService', measurementService);

    function measurementService($http) {

	var getDeviceList = function () {

	    return $http.get('/api/measurement/device');
	    
	}

	var getDeviceMeasurements = function(deviceId, isAll) {

	    var timeString = isAll ? "" : "/today";
	    
	    return $http.get('/api/measurement/device/' + deviceId + timeString);
	}

	return {
	    getDeviceList: getDeviceList,
	    getDeviceMeasurements: getDeviceMeasurements
	};
    }

})();
