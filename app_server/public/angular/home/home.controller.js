angular
    .module("homeAutomationApp")
    .controller('homeCtrl', homeCtrl);

function homeCtrl() {

    var vm = this;
    
    vm.pageHeader = {
	title: 'Home',
	strapline: 'This is a test'
    }
}
