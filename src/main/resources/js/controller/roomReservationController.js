
//Angular code
(function (){
	angular.module('escapeRoomApp').controller('roomReservationController', ['$scope', '$window', function($scope, $window) {
		//Properties
		 //$scope.showForm=1;
		 $scope.showData=0;
		 var pricePlayer = 25;

		 /*
			 @author: Junaid Aslam
			 @date 24/02/2017
			 @name init()
			 version:1.3
			 @Description: Shows the form and initializes the reservation Object and some attributes
			 @params : none
			 @return: none
		 */

		 $scope.init = function(){

			 	$scope.reservation = new Reservation();
				$scope.reservation.construct(1,"","","","","");
				$scope.reservation.setCheckInDate(new Date());
				$scope.numberOfPlayers = [2,3,4,5];
				//default value
				$scope.reservation.setNumOfPlayers(2);
				//Games
				$scope.games=["Laberinto","Detective Conan","Hell"];
				$scope.reservation.setRoomPreference($scope.games[0]);

		 }
		 $scope.checkInTime=[];



		//Scope variables


		//Date pickers scope variables and functions
		$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
		$scope.format = $scope.formats[0];
		$scope.dateOptions = {
			dateDisabled: disabled,
			formatYear: 'yyyy',
			maxDate: new Date(2020, 5, 22),
			minDate: new Date(),
			startingDay: 1
		};

		$scope.checkInDate = {
			opened: false
		};

		$scope.checkOutDate = {
			opened: false
		};
		$scope.openCheckInDate = function() {
			$scope.checkInDate.opened = true;
		};

		$scope.openCheckOutDate = function() {
			$scope.checkOutDate.opened = true;
		};


		$scope.createTimeArray = function(){

			for (var i = 13; i < 23 ; i++) {
				$scope.checkInTime.push(i+":00");
			}
			//default value;
			$scope.reservation.setCheckInTime("13:00");
		}


		$scope.allValidFields = function(){
			var valid = false;
			if($scope.reservation.getCheckInDate() != null
				 && $scope.reservation.getCheckInTime() != null && $scope.reservation.getNumOfPlayers() != null
				&& $scope.reservation.getRoomPreference() !=null){
					valid = true;
				}

				return valid;
		}

		$scope.calculatePrice = function (){
			$scope.reservation.setTotalPrice($scope.reservation.getNumOfPlayers() * pricePlayer);
		}

		$scope.submitForm = function(){
			console.log($scope.reservation);
			// $scope.reservation = new Reservation();
			$scope.reservationRoomManagement.$setPristine();
			$scope.showData = 1;
			console.log($scope.showData);
		}

		$scope.goBack = function(){
			// $scope.$parent.action=0;

			$scope.showData = 0;
			console.log($scope.showData);
		}

		$scope.goToHome = function(){
			// $scope.$parent.action=0;
			$scope.$parent.action=0;
			console.log($scope.showData);
		}

		$scope.init();
		$scope.createTimeArray();
		$scope.allValidFields();
		$scope.calculatePrice();



	}]);



	angular.module('escapeRoomApp').directive("roomReservationData", function (){
		return {
			restrict: 'E',
			templateUrl:"view/templates/room-reservation-data.html",
			controller:function(){

			},
			controllerAs: 'roomReservationData'
		};
	});
})();


//Own code
/*
	Datepicker functions
*/
// Disable weekend selection
function disabled(data) {
	var date = data.date,
	mode = data.mode;
	return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
}
