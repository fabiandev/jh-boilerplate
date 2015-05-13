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
				baseUrl: 'http://example.com',
				title: 'Title',
				description: 'Description',
				image: 'http://example.com/image.jpg',
				titleSuffix: ' | WatchClub'
			};

			var defaultData = {
				meta: {
					title: defaults.title + defaults.titleSuffix,
					description: defaults.description,
					image: defaults.image
				}
			};

			var service = {
				configureStates: configureStates,
				configureOtherwise: configureOtherwise,
				getStates: getStates
			};

			return service;

			///////////////

			function configureOtherwise( otherwise ) {
				if (otherwise && !hasOtherwise) {
					hasOtherwise = true;
					$urlRouterProvider.otherwise( otherwise );
				}
			}

			function configureStates( states, otherwise ) {
				states.forEach(function( state ) {

					if ( ! state.config.data ) {
						state.config.data = defaultData;
					} else if ( ! state.config.data.meta ) {
						state.config.data.meta = defaultData.meta;
					} else {
						if ( ! state.config.data.meta.title ) {
							state.config.data.meta.title = defaults.title;
						} else {
							state.config.data.meta.title += defaults.titleSuffix;
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

				if (otherwise && !hasOtherwise) {
					hasOtherwise = true;
					$urlRouterProvider.otherwise( otherwise );
				}
			}

			function getStates() {
				return $state.get();
			}
		}
	}

})();
