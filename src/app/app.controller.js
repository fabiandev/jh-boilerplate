(function() {
	'use strict';

	angular.module( 'app' )
		.controller( 'AppController', AppController );


	AppController.$inject = [ '$scope', '$state', '$location', 'stateManager', 'willowNodeService', '$browser', '$log' ];

	function AppController ( $scope, $state, $location, stateManager, willowNodeService, $browser, $log ) {

		$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			if ( angular.isDefined( toState.data.meta ) ) {
				$scope.meta = toState.data.meta;
			}
		});

		$scope.$on('$stateNotFound', function(event, toState, toParams, fromState, fromParams) {
			/*jshint -W027*/
			//return $state.go('error.404');
			event.preventDefault();

			var state = toState.to;
			var node;

			$log.debug('state '+ state +' not found, looking for a node..');

			findWillowNode();

			function findWillowNode() {
				return willowNodeService.findByPath( state )
					.success(function( data ) {
						$log.debug('node has been found, going to add a state for '+ state);
						addStateForNode(state, data);
					})
					.error(function( data, status, headers ) {
						$log.debug('no node found for path '+ state);
						addErrorStateForNode(state, data, status);
				});
			}
		});

		function addStateForNode( state, node ) {
			stateManager.addStateForNode( state, node );
			$state.go(state);
		}

		function addErrorStateForNode( state, node, errorCode ) {
			stateManager.addErrorStateForNode( state, node, errorCode );
			$state.go(state);
		}

		$scope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams) {
			event.preventDefault();

			if ( toState.to != 'error' ) {
				$state.go( 'error' );
			}
		});

	}

})();
