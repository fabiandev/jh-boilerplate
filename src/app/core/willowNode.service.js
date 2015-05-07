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

		return $http.get( '/api/generic' )
			.then( findByUrlComplete )
			['catch']( findByUrlFailed );

		function findByUrlComplete( response ) {
			return response.data;
		}

		function findByUrlFailed( error ) {
			return error;
		}

	}
	
}
	
})();
