(function() {
	'use strict';

angular
	.module( 'app.core' )
	.factory( 'willowNodeService', willowNodeService );

willowNodeService.$inject = [ '$http' ];

function willowNodeService ( $http ) {

	return {
		findByPath: findByPath
	};

	function findByPath( path ) {

		return $http.get( '/api/generic' );

	}
	
}
	
})();
