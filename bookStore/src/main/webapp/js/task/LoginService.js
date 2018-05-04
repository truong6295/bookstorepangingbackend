'user strict';
 
angular.module('crudApp').factory('LoginService',['$localStorage',
        function ($localStorage) {
    	var admin = 'root';
        var pass = '1234';
        var isAuthenticated = false;
        
        return {
          login : function(username, password) {
            isAuthenticated = username === admin && password === pass;
            return isAuthenticated;
          },
          isAuthenticated : function() {
            return isAuthenticated;
          }
        };
	}
]);