import { DBConfig } from "@config/db";
import { Model, DataTypes } from "sequelize";

export class User extends Model {
	public id!: number;
	public email!: string;
	public password!: string;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		created_at: {
			type: DataTypes.DATE,
			defaultValue: new Date(),
		},
		last_login: {
			type: DataTypes.DATE,
		},
		profile_picture: {
			type: DataTypes.STRING,
		},
		bio: {
			type: DataTypes.STRING,
		},
	},
	{
		sequelize: DBConfig.sequelize,
		tableName: "Users",
	},
);
