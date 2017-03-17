// jQuery code
$(document).ready(function () {

});

(function (){
angular.module('escapeRoomApp').controller('escapeRegistryController', ['$scope', '$window',function($scope, $window) {
	$scope.user;
	this.backForm;


	this.init = function(){
		$scope.user= new User();
		$scope.allValid = false;
		$scope.user.construct("","","","","","","","","");
		$scope.user.setId(1);
		$scope.user.setbirthDate(new Date(),'yyyy-MM-dd HH:mm');
		$scope.$parent.action=0;
	}

	this.backForm = function(){
		$scope.allValid=false;
	}

  $scope.checkInDate = {
    opened: false
  };

  $scope.openCheckInDate = function() {
    $scope.checkInDate.opened = true;
  };

  this.submit=function(){
		console.log($scope.user);
		$scope.registryManagement.$setPristine();

  }

	this.init();

}]);

angular.module('escapeRoomApp').directive("registryForm", function (){
 return {
   restrict: 'E',
   templateUrl:"view/templates/registry-form.html",
   controller:function(){

   },
   controllerAs: 'registryForm'
 };
});

})();
