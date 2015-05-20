(function() {
	'use strict';

	angular
		.module( 'app' )
		.run( run );

	run.$inject = [ '$rootScope', 'stateManager', '$log' ];

	function run( $rootScope, stateManager, $log ) {
		stateManager.addStates( __mainConfig.states );
		stateManager.addErrorStates( __mainConfig.stateErrorTemplates );

		stateManager.setOtherwise(function($injector, $location) {
			$rootScope.$broadcast('$stateNotFound', { to: $location.path() });
		});

	}

})();
