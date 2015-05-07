(function() {
	'use strict';

	angular
		.module( 'app' )
		.run( run );

	run.$inject = [ 'routerHelper' ];

	function run( routerHelper ) {
		routerHelper.configureStates( getStates() );
	}

	function getStates() {
		return [
			{
				state: 'generic',
				config: {
					url: '/about',
					views: {
						"main": {
							controller: 'AboutController',
							templateUrl: 'about/about.tpl.html'
						}
					},
					data: {
						pageTitle: 'What is It?'
					}
				}
			}
		];
	}
})();
