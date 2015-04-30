angular.module( 'app', [
  'templates-app',
  'templates-common',
  'app.home',
  'app.about',
  'ui.router'
])

.config( function myAppConfig ( $locationProvider, $stateProvider, $urlRouterProvider ) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Watch Club' ;
    }
  });
})

;

