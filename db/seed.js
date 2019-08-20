const sqlite3 = require('sqlite3').verbose();

function User(username, firstName, lastName, email, birthDate){
	this.username = username;
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.birthDate = birthDate;
	this.joinedDate = Data.now();
	this.accountStatus = stdUser;
	this.adminStatus = false;
}


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