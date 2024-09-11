import Joi from 'joi';

export const userCreate = Joi.object({
	username: Joi.string().min(6).max(30),
	password: Joi.string().min(8).max(30).regex(/[a-zA-Z0-9]{3,30}/),
	email: Joi.string().email(),
	type_acess: Joi.string().default('user'),
}).options({ stripUnknown: true });