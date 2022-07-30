import cors from '@fastify/cors';
import autoload from '@fastify/autoload';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { type FastifyInstance } from 'fastify';

const directoryName = dirname(fileURLToPath(import.meta.url));

export async function register(fastify: FastifyInstance) {
	fastify.register(cors, {
		origin: '*',
	});

	fastify.register(autoload, {
		dir: join(directoryName, 'routes'),
	});
}
