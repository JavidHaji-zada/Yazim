import { Client, ClientConfig } from "pg";

const setupDBConnection = async () => {
	const postgresDBConfig: ClientConfig = {
		host: process.env.POSTGRESQL_HOST,
		user: process.env.POSTGRESQL_USER,
		database: process.env.POSTGRESQL_DB,
		password: process.env.POSTGRESQL_PASS,
		port: Number(process.env.POSTGRESQL_PASS) || 5432,
	};
	const client = new Client(postgresDBConfig);
	client.connect(function (err) {
		if (err) throw err;
		console.log("DB Connected!");
	});
};

export const DBConfig = { setupDBConnection };
