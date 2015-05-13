var stateData = [
	{
		state: 'home',
		config: {
			url: '/',
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
];

var stateTemplates = [
	{
		type: 'page',
		template: {
			state: 'generic-page-*',
			config: {
				views: {
					"main": {
						controller: 'PageController',
						templateUrl: 'generic/page/home.tpl.html'
					}
				},
			},
			children: [
				{
					name: '',
					url: '*/:someId'
					// controller
					// templateUrl
				},
				{
					name: '',
					url: '/ownurl'
					// controller
					// templateUrl
				}
			]
		}
	}
];
