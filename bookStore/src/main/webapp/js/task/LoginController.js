angular.module('crudApp').controller('LoginController',['LoginService','$scope', '$state',
	function(LoginService, $scope, $state) {
			$scope.formSubmit = function() {
		      if(LoginService.login($scope.username, $scope.password)) {
		        $scope.error = '';
		        $scope.username = '';
		        $scope.password = '';
		        $state.transitionTo('home');
		      } else {
		        $scope.error = "Incorrect username/password !";
		      }   
		    };
	
}]);