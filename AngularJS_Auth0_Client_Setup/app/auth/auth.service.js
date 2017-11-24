// HAS SERVICE CALLED LOGIN THAT CAN BE CALLED FROM THE NAVBAR SO WHEN CLICK LOGIN BUTTON GETS REDIRECTED TO AUTH0 WHERE AUTHENTICATED AFTER WHICH THEY COME BACK TO THIS APPLICATION


//********* IF DESIRED, MULTIFACTOR AUTHENTICATION AND TOKEN REFRESHING SHOULD BE ADDED ****************************

(function() {

	//creates service called authService and gives it a function called authService which defines the service
	angular.module('app').service('authService', authService);

	//manually injects dependencies
	authService.$inject = ['$state', 'angularAuth0', '$timeout'];

	//$state used to redirect the user to the appropriate spot
	//angularAuth0 used to make calls to auth0
	//$timeout helps to do redirections properly
	function authService($state, angularAuth0, $timeout) {

		function login() {
			//takes user to auth0
			angularAuth0.authorize();
		}

		//parses out hash fragment returned from auth0 in url
		function handleAuthentication() {
			
			//parseHash automatically grabs hash fragment in url
			angularAuth0.parseHash(function(err, authResult) { 

				//checks if access and id tokens exist
				if(authResult && authResult.accessToken && authResult.idToken) {
					//save results to local storage
					setSession(authResult);
					//redirects user to home page once logged in
					//sometimes $state does not work well without a $timeout
					$timeout(function() {
						$state.go('home');
					});
				} else if (err) {
          			$timeout(function() {
            			$state.go('home');
          			});
          			console.log(err);
          		}
			});
		}

		//saves items interested in from authResults to local storage
		function setSession(authResult) {

			//gets time access token expires
			var expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());

			//captures profile info returned from auth0
			var profile = {
				name: authResult.idTokenPayload.name,
				nickname: authResult.idTokenPayload.nickname,
				picture: authResult.idTokenPayload.picture
			}

			//stores items in local storage
			localStorage.setItem('access_token', authResult.accessToken);
			localStorage.setItem('id_token', authResult.idToken);
			localStorage.setItem('expires_at', expiresAt);

			//stringify converts object to a string
			localStorage.setItem('profile', JSON.stringify(profile));
		}

		//removes token info from local storage when user logs out
		function logout() {
			localStorage.removeItem('access_token');
			localStorage.removeItem('id_token');
			localStorage.removeItem('expires_at');
			localStorage.removeItem('profile');
			$timeout(function() {
            	$state.go('home');
          	});
		}

		//returns boolean indicating if access token has expired 
		function isAuthenticated() {
			
			//gets access token info from local storage and tells us time access token expires
			var expiresAt = JSON.parse(localStorage.getItem('expires_at'));

			console.log(new Date().getTime() < expiresAt);

			//compares access token to current time to know if it has expired yet
			return new Date().getTime() < expiresAt;
		}

		//returns methods
		return {
			login: login, 
			handleAuthentication: handleAuthentication,
			logout: logout,
			isAuthenticated: isAuthenticated
		}

	}

})();