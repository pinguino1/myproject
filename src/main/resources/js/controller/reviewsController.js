
//Angular code
(function (){
	angular.module('escapeRoomApp').controller('reviewsController', ['$scope', '$window', function($scope, $window) {
		//Properties
		$scope.showForm=1;
		$scope.review = new Review();

		$scope.review.construct(1,"","","");
		$scope.rates = [1,2,3,4,5];

		// this.getId = function () {return this.id;}
		// this.getRate = function () {return this.rate;}
		// this.getOpinion = function () {return this.opinion;}
		// this.getEmail = function () {return this.email;}

		$scope.allValidFields = function(){
			var valid = true;
			if($scope.review.getEmail() != null
				 && $scope.review.getOpinion() != null && $scope.review.getRate() != null){
					valida = false;
				}
				return valid;
		}

		$scope.submitReview = function(){
			console.log($scope.review);

			// $scope.review = new Review();
			$scope.reviewsManagement.$setPristine();
			$scope.$parent.action="thanks";
		};


	}]);



	angular.module('escapeRoomApp').directive("reviewsTemplate", function (){
		return {
			restrict: 'E',
			templateUrl:"view/templates/reviews-template.html",
			controller:function(){

			},
			controllerAs: 'reviewsTemplate'
		};
	});
})();
