import mongoose from './index';
mongoose.Promise = global.Promise;


const Schema = mongoose.Schema;

const playlistSchema = new Schema({ name: String, type: String });
const Playlist = mongoose.model('Playlist', playlistSchema);

export default Playlist;
