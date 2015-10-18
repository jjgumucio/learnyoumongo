var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';


mongo.connect(url, function(err, db) {
  if ( err ) {
    return console.error(err);
  }

  var parrots = db.collection('parrots');
  parrots.find({
    age: {
      $gt: parseInt(process.argv[2])
    }
  }).toArray(function(err, docs) {
    if ( err ) {
      return console.error(err);
    }
    console.log(docs);
    db.close();
  });
});
