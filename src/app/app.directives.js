(function() {
	'use strict';

	angular.module( 'app' )
		.directive('updatesRef', updatesUiRouterReference);

	
	updatesUiRouterReference.$inject = [ '$timeout' ];

	function updatesUiRouterReference( $timeout ) {
		return {
			link: function($scope, $element, attrs) {
				$scope.$on('states:added', function(event, data) {
					if ($element.attr('href') && $element.attr('href') == data.path) {
						$timeout(function() {
							$element.attr('ui-sref', data.state);
						});
					}
				});
			}
		};
	}

})();
