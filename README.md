# AngularJS-Auth0-Setup

An AngularJS and Node.js application that sets up authentication with Auth0 and requests data from a server on a different domain.


## Table of Contents

[:computer:  Technologies Used](#technologies-used)

[:dvd:  Installation](#installation)

[:bar_chart:  Configuration](#configuration)

[:crystal_ball:  Usage](#usage)

[:boom:  Features](#features)

[:email:  Questions or Comments](#questions-or-comments)


## <a name="technologies-used"></a> :computer: Technologies Used 

* Node.js
* AngularJS
* Auth0
* Bootstrap
* HTML5
* CSS3
* Node Modules
	* [angular](https://www.npmjs.com/package/angular) 
	* [express](https://www.npmjs.com/package/express)
	* [express-jwt](https://www.npmjs.com/package/express-jwt) 
	* [angular-auth0](https://www.npmjs.com/package/angular-auth0) 
	* [angular-jwt](https://www.npmjs.com/package/angular-jwt) 
	* [auth0-js](https://www.npmjs.com/package/auth0-js) 
	* [@uirouter/angularjs](https://www.npmjs.com/package/@uirouter/angularjs)
	* [jwks-rsa](https://www.npmjs.com/package/jwks-rsa) 
	* [cors](https://www.npmjs.com/package/cors) 
	* [dotenv](https://www.npmjs.com/package/dotenv) 
	* [bootstrap](https://www.npmjs.com/package/bootstrap) 
   

## <a name="installation"></a> :dvd: Installation 

* Install [Node.js](https://nodejs.org/en/download/) if you don't have it.

* Clone the AngularJS-Auth0-Setup repository to your local computer.

* On your terminal, navigate to the folder where the repository is located. There are two directories inside the repository, AngularJS_Auth0_Client_Setup (for the client side application) and AngularJS_Auth0_Server_Setup (for the back end server).

* Navigate to AngularJS_Auth0_Server_Setup and run the command `npm install` to download all required server dependencies.

* Navigate to AngularJS_Auth0_Client_Setup and run the command `npm install` to download all required client dependencies.


## <a name="configuration"></a> :bar_chart: Auth0 Configuration 

* Make an account with [Auth0](https://auth0.com/signup/) if you don't have one. 

* Follow the instructions on the Auth0 website to create a client and an api.

* Go to the app.js file and enter your Auth0 client id, domain, and callback url, which can be found on the Auth0 dashboard after creating a client. 

* Go to the server.js file under the AngularJS_Auth0_Server_Setup directory and enter your jwt secret, audience, issuer, and algorithm, which can be found on the Auth0 dashboard after creating an api.


## <a name="usage"></a> :crystal_ball: Usage 

* On your terminal, navigate to the folder where the repository is located. 

* Navigate to AngularJS_Auth0_Server_Setup and run the command `node server.js` to start the server.

* Navigate to AngularJS_Auth0_Client_Setup and run the command `node server.js` to begin using the app.


## <a name="features"></a> :boom: Features

* Users must login to see menu options.

* Users can login to the app using Auth0 and Auth0's Lock.

* If authenticated, users can click 'Profile' to see their picture, name, and nickname if obtained from Auth0.

* If authenticated, users can click 'Favorite Dog' or 'Favorite Cat' to make a call to the server to get my favorite cat or dog breed.

* If authenticated, users can 'Log Out' to go back to the index page and no longer view menu options.


## <a name="questions-or-comments"></a> :email: Questions or Comments 

If you have any questions or comments, feel free to message me on [LinkedIn](https://www.linkedin.com/in/maria-wong/).

Thanks for checking out AngularJS-Auth0-Setup!
