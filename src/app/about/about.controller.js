(function() {
	'use strict';

	angular.module( 'app.about' )
		.controller( 'AboutController', AboutController );

	AboutController.$inject = [ '$scope' ];

	function AboutController( $scope ) {
		$scope.dropdownDemoItems = [
			"The first choicea!",
			"And another choice for you.",
			"but wait! A third!"
		];
	}

})();
