(function() {
	'use strict';

	angular
		.module( 'app.core' )
		.provider( 'stateManager', stateManagerProvider );

	stateManagerProvider.$inject = [ '$locationProvider', '$stateProvider', '$urlRouterProvider' ];

	function stateManagerProvider( $locationProvider, $stateProvider, $urlRouterProvider ) {
		/* jshint validthis:true */
		this.$get = StateManager;

		$locationProvider.html5Mode( true ).hashPrefix( '!' );

		StateManager.$inject = [ '$state' ];

		function StateManager( $state ) {
			var hasOtherwise = false;

			var defaults = {
				baseUrl: __mainConfig.config.baseUrl,
				title: __mainConfig.config.defaultTitle,
				description: __mainConfig.config.defaultDescription,
				image: __mainConfig.config.defaultImage,
				titleSuffix: __mainConfig.config.titleSuffix,
				titlePrefix: __mainConfig.config.titlePrefix
			};

			var defaultData = {
				meta: {
					title: defaults.titlePrefix + defaults.title + defaults.titleSuffix,
					description: defaults.description,
					image: defaults.image
				}
			};

			var service = {
				addStates: addStates,
				addState: addState,
				addErrorStates: addErrorStates,
				addStateForNode: addStateForNode,
				addErrorStateForNode: addErrorStateForNode,
				setOtherwise: setOtherwise,
				getStates: getStates
			};

			return service;

			///////////////

			function setOtherwise( otherwise ) {
				if (otherwise && !hasOtherwise) {
					hasOtherwise = true;
					$urlRouterProvider.otherwise( otherwise );
				}
			}

			function addState( state ) {
				addStates( [state] );
			}

			function addStates( states ) {
				var allstates = findAllStatesWithNested(states, []);
				configureStates(allstates);
			}

			function addErrorStates( states ) {
				var template;
				var errorStates = [];

				for (var i = 0; i < states.length; i++) {
					template = clone(states[i].template);

					errorStates.push({
						state: states[i].errorCode == 'none' ? 'error' : 'error.' + states[i].errorCode,
						config: {
							views: template.views,
							data: template.data
						}
					});

				}

				addStates(errorStates);
			}

			function addStateForNode( state, node ) {

				var templateId = node.meta.type.toLowerCase();
				var template;

				for (var i = 0; i < __mainConfig.stateTemplates.length; i++) {
					if (__mainConfig.stateTemplates[i].type == templateId) {
						template = clone(__mainConfig.stateTemplates[i].template);
						break;
					}
				}

				if (!template) {
					return addErrorStateForNode(state, node);
				}

				
				template.config.data = node;
				template.config.url = state;
				template.state = state;

				addState(template);
			}

			function addErrorStateForNode( state, node, errorCode ) {
				var templateId = errorCode;
				var template;

				if (!errorCode) {
					errorCode = 'none';
				}

				for (var i = 0; i < __mainConfig.stateErrorTemplates.length; i++) {
					if (__mainConfig.stateErrorTemplates[i].errorCode == templateId) {
						template = clone(__mainConfig.stateErrorTemplates[i].template);
						break;
					}
				}

				if (!template) {
					return addErrorStateForNode(state, node);
				}

				var errorTemplate = {
					state: state,
					config: {
						views: template.views,
						data: node
					}
				};

				if (startsWithSlash(state)) {
					errorTemplate.config.url = state;
				}

				stateManager.addState(errorTemplate);
			}

			function findAllStatesWithNested( states, statesCollection ) {
				for (var i = 0; i < states.length; i++) {
					statesCollection.push({
						state: states[i].state,
						config: states[i].config
					});

					if ( states[i].children && states[i].children.length ) {
						for (var j = 0; j < states[i].children.length; j++) {
							states[i].children[j].state = states[i].state + '.' + states[i].children[j].state;
						}
						
						findAllStatesWithNested( states[i].children, statesCollection );
					}
				}

				return statesCollection;
			}

			function configureStates( states ) {
				states.forEach(function( state ) {

					if ( ! state.config.data ) {
						state.config.data = defaultData;
					} else if ( ! state.config.data.meta ) {
						state.config.data.meta = defaultData.meta;
					} else {
						if ( ! state.config.data.meta.title ) {
							state.config.data.meta.title = defaults.title;
						} else {
							state.config.data.meta.title = defaults.titlePrefix + state.config.data.meta.title + defaults.titleSuffix;
						}

						if ( ! state.config.data.meta.description ) {
							state.config.data.meta.description = defaults.description;
						}

						if ( ! state.config.data.meta.image ) {
							state.config.data.meta.image = defaults.image;
						}

						if ( ! state.config.data.meta.url ) {
							state.config.data.meta.url = defaults.baseUrl;

							if (state.config.url) {
								state.config.data.meta.url += state.config.url;
							}
						}
					}

					$stateProvider.state( state.state, state.config );

				});
			}

			function getStates() {
				return $state.get();
			}
		}
	}

})();
