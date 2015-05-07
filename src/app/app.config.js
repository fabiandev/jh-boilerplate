(function() {
	'use strict';

	angular.module( 'app' )
		.config( config );

	config.$inject = [ 'routerHelperProvider' ];

	function config ( routerHelperProvider ) {

		//$locationProvider.html5Mode( true ).hashPrefix( '!' );

		/*$urlRouterProvider.otherwise(function ($injector, $location) {

		});*/

	}

})();
