(function() {
	'use strict';

	angular
		.module( 'app' )
		.run( run );

	run.$inject = [ '$rootScope', 'routerHelper' ];

	function run( $rootScope, routerHelper ) {

		routerHelper.addStates(__mainConfig.states);

		routerHelper.setOtherwise(function($injector, $location) {
			$rootScope.$broadcast('$stateNotFound', { to: $location.path() });
		});

	}

})();
