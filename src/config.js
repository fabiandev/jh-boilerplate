var __mainConfig = {};

__mainConfig.config = {

	baseUrl: 'http://example.com',

	titleSuffix: ' | WatchClub',
	titlePrefix: '',

	defaultTitle: 'Title',
	defaultDescription: 'Description',
	defaultImage: 'http://example.com/image.jpg'

};
 
__mainConfig.states = [
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
		},
		children: [
			{
				state: 'test',
				config: {
					url: '/{someId:[0-9]{1,8}}',
					views: {
						"test": {
							controller: 'PageController',
							templateUrl: 'home/home.test.tpl.html'
						}
					},
					data: {
						meta: {
							title: 'A subview',
							description: 'Blablablahh'
						}
					}
				}
			},
			{
				state: 'anotherTest',
				config: {
					url: '/bla',
					views: {
						"test": {
							controller: 'PageController',
							templateUrl: 'home/home.test2.tpl.html'
						}
					},
					data: {
						meta: {
							title: 'A subview',
							description: 'Blablablahh'
						}
					}
				}
			}
		]
	}
];

__mainConfig.stateTemplates = [
	{
		type: 'page',
		template: {
			config: {
				views: {
					"main": {
						controller: 'PageController',
						templateUrl: 'generic/page/page.tpl.html'
					}
				}
			}
		}
	}
];
