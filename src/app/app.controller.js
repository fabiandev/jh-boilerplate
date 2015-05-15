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
			console.log(event);
			var statePath = toState.to;
			var node;

			activate();


			// TODO: generate state like generic.child.grandchild
			// from /child/grandchild
			// so nesting is possible

			function activate() {
				return findWillowNode().then(function() {
					addStateForNode( statePath, node );
					console.log(node);
				});
			}

			function findWillowNode() {
				return willowNodeService.findByPath( statePath )
					.then(function( response ) {
						node = response;
					})
					.catch(function( error ) {
						// handle error
						console.log(error);
				});
			}

		});
  
		function addStateForNode( statePath, node ) {
			var templateId = node.meta.type.toLowerCase();
			var template;

			for (var i = 0; i < __mainConfig.stateTemplates.length; i++) {
				if (__mainConfig.stateTemplates[i].type == templateId) {
					template = clone(__mainConfig.stateTemplates[i].template);
					break;
				}
			}

			if (!template) {
				// handle page not found
			}

			// aimedState = makeStateString(aimedState)
			
			template.config.data = node;
			template.config.url = statePath;
			template.state = statePath;

			routerHelper.addStates([template]);

			//return;
			// TODO: check if aimedState exists, then broadcast and go

			/*$scope.$broadcast('states:added', {
				path: stateUrl,
				state: aimedState
			});*/
			
			console.log('states created', routerHelper.getStates());

			$state.go(statePath);
		}

		$scope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams) {
			event.preventDefault();
			// TODO: handle error
		});

	}

})();
