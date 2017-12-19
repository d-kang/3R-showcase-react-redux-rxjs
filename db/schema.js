import mongoose from './index';
mongoose.Promise = global.Promise;


var Schema = mongoose.Schema;

var catSchema = new Schema({ name: String, type: String });
var Cat = mongoose.model('Cat', catSchema);

export default Cat;
