import mongoose from 'mongoose';

// Define a schema
const Schema = mongoose.Schema;

const userModel = new Schema({
	username: String,
	password: {type:String, require: true},
	email: String,
	type_acess: String,
	created: { type: Date, default: Date.now },
});

export const SomeModel = mongoose.model('user', userModel);