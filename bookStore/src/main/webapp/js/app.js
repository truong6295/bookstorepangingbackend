
var app = angular.module('crudApp',['ui.router','ngStorage']);
///
app.run(['$rootScope','$state','LoginService',function($rootScope,$state, LoginService) {
    $rootScope.$on('$locationChangeStart', 
      function(event){ 
      if(!LoginService.isAuthenticated()) {
        event.preventDefault();
        $state.transitionTo('login');
      }
    });
  }]);
//
app.constant('urls', {
    BASE: 'http://localhost:8080/',
    BOOKSTORE_SERVICE_API: 'http://localhost:8080/app/book'
});
////
app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
 
        $stateProvider
        	.state('home',{
        		url:'/',
        		templateUrl:'/'
        	})
            .state('bookstore', {
                url: '/bookstore',
                templateUrl: 'partials/bookstore',
                controller:'BookController',
                controllerAs:'ctrl',
                resolve: {
                    bookstores: function ($q, BookService) {
                        console.log('Load all book');
                        var deferred = $q.defer();
                        BookService.loadAllBooks(0,1).then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }
                }
            })
            .state('login',{
        		url:'/login',
        		templateUrl:'partials/login',
        		controller:'LoginController',
        		controllerAs:'ctrl'
        	})
        $urlRouterProvider.otherwise('/login');
    }

]);
