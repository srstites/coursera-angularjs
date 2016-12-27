(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['ProfileService'];
function MyinfoController(ProfileService) {
  var myinfoCtrl = this;

  myinfoCtrl.$onInit = function() {
    myinfoCtrl.signedUp = ProfileService.getIsSignedUp();

    myinfoCtrl.user = ProfileService.getUserProfile();
  }
}

})();
