(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'ProfileService'];
function SignupController(MenuService, ProfileService) {
  var signupCtrl = this;
  signupCtrl.saveSuccess = false;
  signupCtrl.menuItemInvalid = false;

  signupCtrl.$onInit = function() {
    signupCtrl.user = ProfileService.getUserProfile();
  }

  signupCtrl.submit = function() {
    MenuService.getMenuItem(signupCtrl.user.menuItem)
      .success(function(response) {
        signupCtrl.menuItemInvalid = false;
        signupCtrl.user.item = response;
        ProfileService.setUserProfile(signupCtrl.user);
        signupCtrl.saveSuccess = true;
      })
      .error(function(response) {
        signupCtrl.menuItemInvalid = true;
        signupCtrl.saveSuccess = false;
      });
  }
}

})();
