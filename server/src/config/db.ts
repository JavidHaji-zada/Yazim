import { Client, ClientConfig } from "pg";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
	process.env.POSTGRESQL_DB || "",
	process.env.POSTGRESQL_USER || "",
	process.env.POSTGRESQL_PASS,
	{
		host: process.env.POSTGRESQL_HOST,
		dialect: "postgres",
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	},
);

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

export const DBConfig = { setupDBConnection, sequelize };
