(function () {
	'use strict';

	angular
		.module( 'app.home' )
		.run( run );

	run.$inject = [ 'routerHelper' ];

	function run( routerHelper ) {
		routerHelper.configureStates( getStates() );
	}

	function getStates() {
		return [
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
						pageTitle: 'Home'
					}
				}
			}
		];
	}

})();
