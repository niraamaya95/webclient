(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, FlashService) {
        var vm = this;

        alert("insidesd LoginController() ..&&&&............");
        
        alert("Before calling login");
        vm.login = login;
        alert("After calling login");
        
        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
        	
        	alert("inside loginController login() - 1");
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                	alert("inside loginController login() - 1  - success response");
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                    alert("inside loginController login() - eLSE  success respinse");
                }
            });
        };
    }

})();
