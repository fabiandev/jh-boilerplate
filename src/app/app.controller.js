(function() {
	'use strict';

	angular.module( 'app' )
		.controller( 'AppController', AppController );


	AppController.$inject = [ '$scope', '$state', '$location', 'routerHelper', 'willowNodeService' ];

	function AppController ( $scope, $state, $location, routerHelper, willowNodeService ) {

		$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			if ( angular.isDefined( toState.data.meta ) ) {
				$scope.meta = toState.data.meta;
			}
			
		});

		$scope.$on('$stateNotFound', function(event, toState, toParams, fromState, fromParams) {
			event.preventDefault();

			var path = $location.path();
			var aimedState = toState.to;
			var node;

			activate();


			// TODO: generate state like generic.child.grandchild
			// from /child/grandchild
			// so nesting is possible

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
					.catch(function( error ) {
						// handle error
						console.log(error);
				});
			}

		});

		function addStateForNode( aimedState, node ) {
			var controller = capitalizeFirstLetter(node.meta.type.toLowerCase()) + 'Controller';
			var template = node.meta.type.toLowerCase();

			// TODO: use state template

			routerHelper.configureStates([
				{
					state: aimedState,
					config: {
						url: aimedState,
						views: {
							"main": {
								controller: controller,
								templateUrl: 'generic/'+ template +'/'+ template +'.tpl.html'
							}
						},
						data: {
							data: node.data,
							meta: node.meta
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
