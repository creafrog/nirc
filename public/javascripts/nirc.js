angular.module('nirc', [])
  .controller('MainCtrl', function($scope, Client) {
    $scope.client = Client;
  })

  .controller('TabCtrl', function($scope) {

    $scope.isActive = function(ch) {
      return $scope.activeChannel === ch;
    };

  });
