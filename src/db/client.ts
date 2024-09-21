import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_AUTH_TOKEN = process.env.DATABASE_AUTH_TOKEN;

if (!DATABASE_URL || !DATABASE_AUTH_TOKEN) {
	const msg = 'You must configurere a database uri in env';
	if (process.env.NODE_ENV === 'development') {
		if (!DATABASE_URL) throw new Error(msg);
	} else {
		throw new Error(msg);
	}
}

const client = createClient({
	url: DATABASE_URL,
	authToken: DATABASE_AUTH_TOKEN
});

const db = drizzle(client);

export default db;
