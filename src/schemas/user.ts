import { FromSchema } from 'json-schema-to-ts';

export const NewUser = {
	type: 'object',
	properties: {
		firstName: { type: 'string' },
		lastName: { type: 'string' },
		phone: { type: 'string' },
		password: { type: 'string' },
	},
	required: ['firstName', 'lastName', 'phone', 'password'],
	additionalProperties: false,
} as const;
export type NewUserType = FromSchema<typeof NewUser>;

export const User = {
	type: 'object',
	properties: {
		id: { type: 'number' },
		firstName: { type: 'string' },
		lastName: { type: 'string' },
		phone: { type: 'string' },
		password: { type: 'string' },
	},
	required: ['id', 'firstName', 'lastName', 'phone', 'password'],
	additionalProperties: false,
} as const;
export type UserType = FromSchema<typeof User>;

export const LoginUserParams = {
	type: 'object',
	properties: {
		phone: { type: 'string' },
		password: { type: 'string' },
	},
	required: ['phone', 'password'],
	additionalProperties: false,
} as const;
export type LoginUserParamsType = FromSchema<typeof LoginUserParams>;
