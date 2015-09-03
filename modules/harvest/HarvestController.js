FarmClickerApp.controller('HarvestController', ['$scope', '$http', 'harvest', function($scope, $http, harvest){

  // $scope.harvestData = {};
  //
  // $http.get('/modules/harvest/HarvestData.js').success(function(data) {
  //   $scope.harvestData = data;
  // });

  $scope.getHarvestCropButton = function(){
    return harvest.getHarvestCropButton();
  };

  $scope.getCropsHarvested = function(){
    return harvest.getCropsHarvested();
  };

  $scope.getHarvestPerSec = function(){
    return harvest.getHarvestPerSec();
  };

  $scope.harvestCrops = function(){
    // $scope.pulseToggle = !$scope.pulseToggle
    harvest.harvestCrops();
  };

}]);