import mongoose from './index';
mongoose.Promise = global.Promise;


const Schema = mongoose.Schema;

const catSchema = new Schema({ name: String, type: String });
const Cat = mongoose.model('Cat', catSchema);

export default Cat;
