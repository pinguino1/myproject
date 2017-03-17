/*User Object*/
function User()
{
	//Attributes declaration
	this.id;
	this.name;
	this.surname;
	this.address;
	this.city;
	this.gender;
	this.phone;
	this.email;
	this.birthDate;

	//Methods declaration
	this.construct = function (id,name,surname,address, city, gender ,phone, email,birthDate){
		this.setId(id);
		this.setName(name);
		this.setSurname(surname);
		this.setAddress(address);
		this.setCity(city);
		this.setGender(gender);
		this.setPhone(phone);
		this.setEmail(email);
		this.setbirthDate(birthDate);
	}
	//Getters
	this.getId = function () {return this.id;}
	this.getName = function () {return this.name;}
	this.getSurname = function () {return this.surname;}
	this.getAddress = function () {return this.address;}
	this.getCity = function () {return this.city;}
	this.getGender = function () {return this.gender;}
	this.getPhone = function () {return this.phone;}
	this.getEmail = function () {return this.email;}
	this.getbirthDate = function() {return this.birthDate;}

	//Setters
	this.setId = function (id){this.id=id;}
	this.setName = function (name){this.name=name;}
	this.setSurname = function (surname){this.surname=surname;}
	this.setAddress = function (address){this.address=address;}
	this.setCity = function (city){this.city=city;}
	this.setGender = function(gender){this.gender=gender;}
	this.setPhone = function (phone){this.phone=phone;}
	this.setEmail = function (email){this.email=email;}
	this.setbirthDate = function(birthDate){this.birthDate=birthDate;}

	this.toString = function (){
		var reservationString ="RESERVATION - ID="+this.getId()+" FIRST NAME="+this.getName()+" LAST NAME="+this.getSurname();
		reservationString +=" FIRST ADDRESS="+this.getAddress()+" CITY="+this.getCity();
		reservationString +=" PHONE="+this.getPhone()+" EMAIL="+this.getEmail();
		return reservationString;
	}
}
