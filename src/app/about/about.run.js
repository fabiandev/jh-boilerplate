(function() {
	'use strict';

	angular
		.module( 'app.about' )
		.run( run );

	run.$inject = [ 'routerHelper' ];

	function run( routerHelper ) {
		routerHelper.configureStates( getStates() );
	}

	function getStates() {
		return [
			{
				state: 'about',
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
