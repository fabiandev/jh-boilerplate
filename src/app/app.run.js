(function() {
	'use strict';

	angular
		.module( 'app' )
		.run( run );

	run.$inject = [ '$rootScope', 'routerHelper' ];

	function run( $rootScope, routerHelper ) {

		routerHelper.configureStates(stateData);

		routerHelper.configureOtherwise(function($injector, $location) {
			$rootScope.$broadcast('$stateNotFound', { to: $location.path() });
		});

	}

})();
