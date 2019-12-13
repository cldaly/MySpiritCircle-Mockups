// const sqlite3 = require('sqlite3').verbose();

class User{
	constructor(username, firstName, lastName, email, birthDate){
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.birthDate = birthDate;
		this.joinedDate = new Date();
		this.accountType = 'standard';
		this.adminStatus = false;
	}
}

var ruby = new User('rubydaly', 'Ruby', 'Daly', 'rubymrodriguez@gmail.com', '05/06/1990');
var riley = new User('rdaly18', 'Riley', 'Daly', 'goofballington@gmail.com', '05/08/2018');

console.log(ruby);
console.log(riley);

class Mentor extends User{
	constructor(username, firstName, lastName, email, birthDate){
		super(username, firstName, lastName, email, birthDate);
		this.accountType = 'mentor';
		this.adminStatus = false;
	}
}

var barbie = new Mentor('soarwithbarbie', 'Barbie', 'Perez', 'soarwithbarbie@gmail.com', '10/08/1971');

console.log(barbie);

class Admin extends User{
	constructor(username, firstName, lastName, email, birthDate){
		super(username, firstName, lastName, email, birthDate);
		this.accountType = 'admin';
		this.adminStatus = true;
	}
}

var clayton = new Admin('cdaly91', 'Clayton', 'Daly', 'clayton.daly91@gmail.com', '07/07/1991');
console.log(clayton);



/*
function seedDB(){
	// Create database connection
	var db = new sqlite3.Database("./test.db", function(err){
		if(err) {
			console.log("Error connecting to DB: " + err.message);
		}
		console.log("connected to test database");
	});





	// close the database connection
	db.close((err) => {
	  if (err) {
	    return console.error(err.message);
	  }
	  console.log('Close the database connection.');
	});
}

module.exports = seedDB;
*/