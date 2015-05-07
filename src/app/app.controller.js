(function() {
	'use strict';

	angular.module( 'app' )
		.controller( 'AppController', AppController );


	AppController.$inject = [ '$scope', '$state', '$location', 'routerHelper', 'willowNodeService' ];

	function AppController ( $scope, $state, $location, routerHelper, willowNodeService ) {

		$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

			if ( angular.isDefined( toState.data.pageTitle ) ) {
				$scope.pageTitle = toState.data.pageTitle + ' | Watch Club' ;
			}
			
		});

		$scope.$on('$stateNotFound', function(event, toState, toParams, fromState, fromParams) {
			event.preventDefault();

			var path = $location.path();
			var aimedState = toState.to;
			var node;

			activate();


			function activate() {
				return findWillowNode().then(function() {
					addStateForNode( aimedState, node );
					console.log(node);
				});
			}

			function findWillowNode() {
				return willowNodeService.findByPath( path )
					.then(function( response ) {
						node = response;
					})
					['catch'] (function( error ) {
						// handle error
						console.log(error);
				});
			}

		});

		function addStateForNode(aimedState, node) {
			routerHelper.configureStates([
				{
					state: aimedState,
					config: {
						url: aimedState,
						views: {
							"main": {
								controller: 'PageController',
								templateUrl: 'generic/page/page.tpl.html'
							}
						},
						data: {
							pageTitle: 'Test Page'
						}
					}
				}
			]);

			$state.go(aimedState);
		}

		$scope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams) {
			event.preventDefault();
			// TODO: handle error
		});

	}

})();
