import { defineConfig } from 'drizzle-kit';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL)
	throw new Error(
		'You cannot run migration with a valid: DATABASE_URL env variable'
	);

export default defineConfig({
	dialect: 'sqlite',
	schema: './src/db/schema.ts',
	out: './drizzle',
	dbCredentials: {
		url: DATABASE_URL
	}
});
