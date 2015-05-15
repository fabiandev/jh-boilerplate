var __mainConfig = {};

__mainConfig.config = {

	baseUrl: 'http://localhost:4567',

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

__mainConfig.stateErrorTemplates = [

	{
		errorCode: '400',
		template: {
			views: {
				"main": {
					controller: 'ErrorController',
					templateUrl: 'generic/error/error.400.tpl.html'
				}
			},
			data: {
				meta: {
					title: 'Bad Request',
					description: 'Sorry, soemthing was wrong with your request.'
				}
			}
		}
	},

	{
		errorCode: '401',
		template: {
			views: {
				"main": {
					controller: 'ErrorController',
					templateUrl: 'generic/error/error.401.tpl.html'
				}
			},
			data: {
				meta: {
					title: 'Unauthorized',
					description: 'You do not have permission to access this resource.'
				}
			}
		}
	},

	{
		errorCode: '403',
		template: {
			views: {
				"main": {
					controller: 'ErrorController',
					templateUrl: 'generic/error/error.404.tpl.html'
				}
			},
			data: {
				meta: {
					title: 'Forbidden',
					description: 'Sorry, this resource is not accessible.'
				}
			}
		}
	},

	{
		errorCode: '404',
		template: {
			views: {
				"main": {
					controller: 'ErrorController',
					templateUrl: 'generic/error/error.404.tpl.html'
				}
			},
			data: {
				meta: {
					title: 'Not found',
					description: 'Whoops, sorry, but this page doesn\'t exist'
				}
			}
		}
	},

	{
		errorCode: '408',
		template: {
			views: {
				"main": {
					controller: 'ErrorController',
					templateUrl: 'generic/error/error.404.tpl.html'
				}
			},
			data: {
				meta: {
					title: 'Request Timeout',
					description: 'Your request unfortunately timed out.'
				}
			}
		}
	},

	{
		errorCode: '410',
		template: {
			views: {
				"main": {
					controller: 'ErrorController',
					templateUrl: 'generic/error/error.404.tpl.html'
				}
			},
			data: {
				meta: {
					title: 'Gone',
					description: 'This content is no longer available.'
				}
			}
		}
	},

	{
		errorCode: '500',
		template: {
			views: {
				"main": {
					controller: 'ErrorController',
					templateUrl: 'generic/error/error.404.tpl.html'
				}
			},
			data: {
				meta: {
					title: 'Error',
					description: 'There was an error on our side, we\'re really sorry for that.'
				}
			}
		}
	},

	{
		errorCode: '503',
		template: {
			views: {
				"main": {
					controller: 'ErrorController',
					templateUrl: 'generic/error/error.404.tpl.html'
				}
			},
			data: {
				meta: {
					title: 'Maintenance',
					description: 'We\'re down for maintenance and will be back shortly.'
				}
			}
		}
	},

];