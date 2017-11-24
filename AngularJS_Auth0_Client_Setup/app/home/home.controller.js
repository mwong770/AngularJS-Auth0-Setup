(function() {

	//creates HomeController on app module and gives it a function called homeController
	angular.module('app').controller('HomeController', homeController)

	homeController.$inject = ['$http', 'authService'];

	function homeController($http, authService) {

		var vm = this;

		//need this in order to use vm.auth in home.html to confirm user is authenticated
		vm.auth=authService;

		// makes request to server to get data from /dog
		vm.getDog = function() {
			$http.get('http://localhost:8080/dog')
				.then(function(result) {
					vm.favDog = result.data.favDog;
					vm.favCat = '';
				}, function(err) {
					console.log(err);
				})
		}

		// makes request to server to get data from /cat
		vm.getCat = function() {
			$http.get('http://localhost:8080/cat')
				.then(function(result) {
					vm.favCat = result.data.favCat;
					vm. favDog = '';
				}, function(err) {
					console.log(err);
				})
		}
	}

})();