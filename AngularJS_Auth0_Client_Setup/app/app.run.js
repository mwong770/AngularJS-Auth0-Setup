// THIS FILE HELPS US PROCESS THE RESULT OF THE AUTHENTICATION TRANSACTION FROM AUTH0

(function() {

	//calls for app module 
	//when app runs calls function called run
	angular.module('app').run(run);

	run.$inject = ['authService'];

	//calls handleAuthentication so can listen for it as authentication results come in 
	function run(authService) {
		authService.handleAuthentication();
	}

})();