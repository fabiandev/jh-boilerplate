(function () {
	'use strict';

	angular
		.module( 'app.home' )
		.run( run );

	run.$inject = [ 'stateManager' ];

	function run( stateManager ) {
		//stateManager.configureStates( getStates() );
	}

	function getStates() {
		/*return [
			{
				state: 'home',
				config: {
					url: '/home',
					views: {
						"main": {
							controller: 'HomeController',
							templateUrl: 'home/home.tpl.html'
						}
					},
					data: {
						meta: {
							title: 'Home'
						}
					}
				}
			}
		];*/
	}

})();
