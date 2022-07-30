import Fastify from 'fastify';
import { decorate } from './decorators.js';
import { register } from './registers.js';

const fastify = Fastify();

fastify.get('/', (req, reply) => {
	return reply.status(200).send({ ping: 'pong!' });
});

await decorate(fastify);
await register(fastify);

const startServer = async () => {
	try {
		const PORT = process.env['PORT'] ?? 3080;
		const address = await fastify.listen({
			host: '::',
			port: typeof PORT === 'string' ? parseInt(PORT) : PORT,
		});
		console.log(`Server started on: ${address}`);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

startServer();
