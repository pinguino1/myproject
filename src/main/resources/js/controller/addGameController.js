// jQuery code
$(document).ready(function () {

});
(function (){
angular.module('escapeRoomApp').controller('addFormController', ['$scope', '$window', function($scope, $window) {
    $scope.game;
    this.backForm;

    this.init=function(){
      $scope.game=new Game();
      $scope.allValid = false;
      $scope.game.construct("","","","","","");
      $scope.game.setUploadDate(new Date(),'yyyy-MM-dd HH:mm');
    }

    this.backForm = function(){
  		$scope.allValid=false;
  	}

    this.submit=function(){
      console.log($scope.game);
      $scope.addGameForm.$setPristine();
    }

    this.init();


}]);

/**Add a new game form*/
angular.module('escapeRoomApp').directive("addGameForm", function (){
 return {
   restrict: 'E',
   templateUrl:"view/templates/add-game-form.html",
   controller:function(){

   },
   controllerAs: 'addForm'
 };
});

})();
