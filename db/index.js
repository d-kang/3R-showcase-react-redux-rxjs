var mongoose = require('mongoose');

var options = {
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};

mongoose.connect('mongodb://localhost/test', options);
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var catSchema = new Schema({ name: String, type: String });
var Cat = mongoose.model('Cat', catSchema);


var kitty = new Cat({ name: 'Zildjian', type: 'fluffykins' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});

export default mongoose;
