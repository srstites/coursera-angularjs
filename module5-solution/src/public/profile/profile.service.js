(function () {
"use strict";

angular.module('common')
.service('ProfileService', ProfileService);


function ProfileService() {
  var service = this;
  service.signedUp = false;
  service.user = {};

  service.getIsSignedUp = function() {
    return service.signedUp;
  }

  service.setUserProfile = function(user) {
    service.signedUp = true;
    service.user = user;
  }

  service.getUserProfile = function() {
    return service.user;
  }
}

})();
