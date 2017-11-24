(function() {
	angular.module('app').controller('ProfileController', profileController)

	function profileController() {

		var vm = this;

		//gets profile info from local storage
		vm.profile = JSON.parse(localStorage.getItem('profile'));
	}

})();