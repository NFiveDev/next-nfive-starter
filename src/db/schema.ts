import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

const users = sqliteTable('users', {
	id: text('id'),
	username: text('username')
});

export { users };
