import mongoose, {Schema} from 'mongoose';

const UserSchema = new Schema({
	userName:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	}
});

export default mongoose.model('User', UserSchema);