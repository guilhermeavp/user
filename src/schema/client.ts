import mongoose from 'mongoose';

// Define a schema
const Schema = mongoose.Schema;

const userModel = new Schema({
	id_client: Number,
	name: String,
	address: {
		cep: String,
		country: String,
		state: String,
		city: String,
		street: String,
		number: Number,
		additional_address: String,
		obs: String
	},
	id_user: Number,
});

export const SomeModel = mongoose.model('client', userModel);