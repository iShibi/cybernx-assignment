import { type FastifyPluginAsync } from 'fastify';
import {
	User,
	NewUser,
	LoginUserParams,
	type NewUserType,
	type UserType,
	type LoginUserParamsType,
} from '../schemas/user.js';

const accountRoutes: FastifyPluginAsync = async fastify => {
	fastify.route<{ Body: NewUserType; Reply: UserType }>({
		method: 'POST',
		url: '/register',
		schema: {
			body: NewUser,
			response: {
				201: User,
			},
		},
		handler: async (request, reply) => {
			const { body } = request;
			const createdUser = await fastify.prisma.user.create({
				data: body,
			});
			return reply.status(201).send(createdUser);
		},
	});

	fastify.route<{ Body: LoginUserParamsType; Reply: UserType }>({
		method: 'POST',
		url: '/login',
		schema: {
			body: LoginUserParams,
			response: {
				200: User,
			},
		},
		handler: async (request, reply) => {
			const { phone, password } = request.body;
			const user = await fastify.prisma.user.findUnique({
				where: {
					phone_password: {
						phone,
						password,
					},
				},
			});
			if (!user) return reply.callNotFound();
			return reply.status(200).send(user);
		},
	});
};

export default accountRoutes;
