 (function() {

	//creates module called app with dependencies
	angular.module('app', ['auth0.auth0', 'ui.router', 'angular-jwt'])
           .config(config);//passes in config function 

    //injects config function parameters (as strings) in case minification library modifies these parameter names
  	config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', '$httpProvider', 'angularAuth0Provider', 'jwtOptionsProvider'];

	//from ui.router - lets us to go from one state/route to the next
	//$urlRouterProvider helps configure the router
	//angularAuth0Provider helps configure auth0
	function config($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, angularAuth0Provider, jwtOptionsProvider) {
		//sets up home state
		$stateProvider
			.state('home', {
				//configures home state
				url: '/',
				controller: 'HomeController',
				templateUrl: 'app/home/home.html',
				//use vm to refer to controller
				controllerAs: 'vm'
			})
			//users will be sent here immediately after authentication
			//gives 'loading' message instead of blank page 
			.state('callback', {
				url: '/callback',
				controller:  'CallbackController',
				templateUrl: 'app/callback/callback.html',
				controllerAs: 'vm'
			})
			//users will be sent here once authentication complete
			.state('profile', {
				url: '/profile',
				controller:  'ProfileController',
				templateUrl: 'app/profile/profile.html',
				controllerAs: 'vm'
			})
		;

		//asks auth0 to give back access token (aka token) and id token - will see in url after auth0 redirects to /callback after user signs in
		//scope tells auth0 that as part of the authentication transaction give info about user based on oic (open id connect) and profile (ex. name, picture, etc)
		//url will be constructed with this info when call auth0
		//audience is the idenfier that was set up when a new api was created in auth0
		angularAuth0Provider.init({
			clientID: AUTH0_CLIENT_ID,
      		domain: AUTH0_DOMAIN,
      		responseType: 'token id_token',
      		redirectUri: AUTH0_CALLBACK_URL,
      		scope: 'openid profile',
      		audience: 'http://localhost:3000/api'
		});

		//angular-jwt automatically includes access token with http requests
		//tokenGetter retrieves the access token
		//whitelists any domains that we want to allow requests to go to
		jwtOptionsProvider.config({
			tokenGetter: function() {
				return localStorage.getItem('access_token');
			},
			whiteListedDomains: ['localhost']
		})

		//allows use of jwtInterceptor that comes from angular-jwt
		//pushes jwtInterceptor onto the httpProvider interceptors array
		$httpProvider.interceptors.push('jwtInterceptor');

		//if user tries to go to unrecognized path, redirect then to /
		$urlRouterProvider.otherwise('/');

		//changes hash prefix (piece we see b/t main domain and route) b/c some libraries depend on #
		//before Angular 1.6 is #, but 1.6 uses #!
		//removes ! after #
		$locationProvider.hashPrefix('');

		//removes hash in routes
		//with html5 mode need server to handle routes
		$locationProvider.html5Mode(true);
	}
})();