var MangoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/testdatabase'; // change url based on your database

MangoClient.connect(url,{ useNewUrlParser: true },function(err,db){ //add { useNewUrlParser: true } to avoid DeprecationWarning
	
	console.log("Yeah! Database succesfully connceted.");

	db.close();

})
