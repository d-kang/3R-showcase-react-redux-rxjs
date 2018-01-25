const mongoose = require('mongoose');

const options = {
  useMongoClient: true,
  autoIndex: false,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  poolSize: 10,
  bufferMaxEntries: 0
};

mongoose.connect('mongodb://localhost/test', options);


export default mongoose;
