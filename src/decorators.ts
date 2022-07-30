import Prisma from '@prisma/client';
import { type FastifyInstance } from 'fastify';

const { PrismaClient } = Prisma;
const prisma = new PrismaClient();

export async function decorate(fastify: FastifyInstance) {
	fastify.decorate('prisma', prisma);
}

declare module 'fastify' {
	interface FastifyInstance {
		prisma: Prisma.PrismaClient;
	}
}
