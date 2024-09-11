import mongoose from 'mongoose';

// Define a schema
const Schema = mongoose.Schema;

const userModel = new Schema({
	company: String,
	store: String,
	name: String,
	id_company: Number,
	key_shipping: String,
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
	created: { type: Date, default: Date.now },
	changeAt: Date,
	changeUser: Date,
});

export const SomeModel = mongoose.model('company', userModel);