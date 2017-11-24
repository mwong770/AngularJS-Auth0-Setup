//THIS DIRECTIVE CONTROLS THE NAVBAR

(function() {

	//puts directive called navbar in app module and provides function called navbar which describes this directive
	//to refer to this directive in html, put in tag called navbar
	angular.module('app').directive('navbar', navbar);

	function navbar() {
		return {
			templateUrl: 'app/navbar/navbar.html',
			controller: navbarController,
			controllerAs: 'vm'
		}
	}

	navbarController.$inject = ['authService'];
	//this is the controller to our navbar directive
	//injects authService which contains login function
	function navbarController(authService) {

		var vm = this;

		//now can reference vm.auth in html to point to authService
		vm.auth = authService;
	}

})();