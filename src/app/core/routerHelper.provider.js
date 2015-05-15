(function() {
	'use strict';

	angular
		.module( 'app.core' )
		.provider( 'routerHelper', routerHelperProvider );

	routerHelperProvider.$inject = [ '$locationProvider', '$stateProvider', '$urlRouterProvider' ];

	function routerHelperProvider( $locationProvider, $stateProvider, $urlRouterProvider ) {
		/* jshint validthis:true */
		this.$get = RouterHelper;

		$locationProvider.html5Mode( true ).hashPrefix( '!' );

		RouterHelper.$inject = [ '$state' ];

		function RouterHelper( $state ) {
			var hasOtherwise = false;

			// TODO: fetch defaults from server
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

			function addStates( states ) {
				var allstates = findAllStatesWithNested(states, []);
				console.log('states to add', states);
				configureStates(allstates);
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
						
						return findAllStatesWithNested( states[i].children, statesCollection );
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
							state.config.data.meta.url = defaults.baseUrl + state.config.url;
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
