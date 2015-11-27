describe('Testing HomeController', function() {
  beforeEach(module('sampleApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$scope.submit', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('HomeController', { $scope: $scope });
    });

    it('test', function() {
      
    });


  });

});