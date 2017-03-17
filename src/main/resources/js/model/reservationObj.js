function Reservation ()
{
	//Attributes declaration
	this.id;
	this.numOfPlayers;
	this.roomPreference;
	this.checkInDate;
	this.checkInTime;
	this.totalPrice;



	//Methods declaration
	 this.construct = function (id, numOfPlayers, roomPreference, checkInDate, checkInTime,totalPrice)
	{
		this.setId(id);
		this.setNumOfPlayers(numOfPlayers);
		this.setRoomPreference(roomPreference);
		this.setCheckInDate(checkInDate);
		this.setCheckInTime(checkInTime);
		this.setTotalPrice(totalPrice);

	}

	this.setId = function (id){this.id=id;}
	this.setNumOfPlayers = function (numOfPlayers){this.numOfPlayers=numOfPlayers;}
	this.setRoomPreference = function (roomPreference){this.roomPreference=roomPreference;}
	this.setCheckInDate = function (checkInDate){this.checkInDate=checkInDate;}
	this.setCheckInTime = function (checkInTime){this.checkInTime=checkInTime;}
	this.setTotalPrice = function (totalPrice){this.totalPrice=totalPrice;}



	this.getId = function () {return this.id;}
	this.getNumOfPlayers = function () {return this.numOfPlayers;}
	this.getRoomPreference = function () {return this.roomPreference;}
	this.getCheckInDate = function () {return this.checkInDate;}
	this.getCheckInTime = function () {return this.checkInTime;}
	this.getTotalPrice = function () {return this.totalPrice;}


}
