(function() {
	'use strict';

	angular.module( 'app' )
		.config( config );

	config.$inject = [ 'stateManagerProvider' ];

	function config ( stateManagerProvider ) {

		//$locationProvider.html5Mode( true ).hashPrefix( '!' );

		/*$urlRouterProvider.otherwise(function ($injector, $location) {

		});*/

	}

})();
