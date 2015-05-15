(function() {
	'use strict';

	angular.module( 'app' )
		.controller( 'AppController', AppController );


	AppController.$inject = [ '$scope', '$state', '$location', 'routerHelper', 'willowNodeService', '$browser' ];

	function AppController ( $scope, $state, $location, routerHelper, willowNodeService, $browser ) {

		$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			if ( angular.isDefined( toState.data.meta ) ) {
				$scope.meta = toState.data.meta;
			}
			
		});

		$scope.$on('$stateNotFound', function(event, toState, toParams, fromState, fromParams) {
			/*jshint -W027*/
			//return $state.go('error.404');
			event.preventDefault();

			var statePath = toState.to;
			var node;

			console.log(statePath);

			findWillowNode();

			function findWillowNode() {
				return willowNodeService.findByPath( statePath )
					.success(function( data ) {
						addStateForNode(statePath, data);
					})
					.error(function( data, status, headers ) {
						console.log(routerHelper.getStates());
						addErrorStateForNode(statePath, data, status);
						//addStateForNode()
				});
			}
		});

		// TODO: REDIRECT WHEN A 30x comes from the server!
		// consider checking if it's a full url and only
		// perform o real redirect if there's http:// etc present.
		// otherwise change the location without redirecting, to
		// change the state

		// TODO: CREATE A STATE SERVICE/RENAME ROUTER HELPER
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
				return $scope.go('error.404');
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

		function addErrorStateForNode( statePath, node, errorCode ) {
			var templateId = errorCode;
			var template;

			for (var i = 0; i < __mainConfig.stateErrorTemplates.length; i++) {
				if (__mainConfig.stateErrorTemplates[i].errorCode == templateId) {
					template = clone(__mainConfig.stateErrorTemplates[i].template);
					break;
				}
			}

			if (!template) {
				// TODO: handle is again is not found
				// (add all error states as error.{code} based on templates!!!)
				// return $scope.go('error.404');
			}

			// aimedState = makeStateString(aimedState)

			var errorTemplate = {
				state: statePath,
				config: {
					views: template.views,
					data: node
				}
			};

			if (startsWithSlash(statePath)) {
				errorTemplate.config.url = statePath;
			}
			console.log(errorTemplate);

			routerHelper.addStates([errorTemplate]);

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
