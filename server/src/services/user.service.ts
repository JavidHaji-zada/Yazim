import { HTTPStatusCode } from "@customTypes/http";
import { BaseError } from "@entities/errors";
import { User } from "@models/user.model";
import Crypto from "@utils/crypto";
import { PasswordUtils } from "@utils/password";
import { UniqueConstraintError } from "sequelize";

class UserService {
	getUserWithEmail = async (email: string): Promise<User | null> => {
		try {
			const user = await User.findOne({ where: { email } });
			return user;
		} catch (error) {
			// TODO handle if user not found with error
			throw error;
		}
	};

	createUser = async (
		username: string,
		first_name: string,
		last_name: string,
		email: string,
		password: string,
	): Promise<User> => {
		const passwordValidity = PasswordUtils.checkPasswordValidity(password);
		if (passwordValidity.length > 0) {
			throw new BaseError(
				passwordValidity,
				HTTPStatusCode.BadRequest,
				false,
				"Invalid password!",
			);
		}
		try {
			const hashedPassword = await Crypto.hashPassword(password);
			return await User.create({
				username,
				first_name,
				last_name,
				email,
				password: hashedPassword,
			});
		} catch (error) {
			if (error instanceof UniqueConstraintError) {
				const uniqueConstraintError = error as UniqueConstraintError;
				const fields = Object.keys(uniqueConstraintError.fields);
				let errorMessage = "";
				if (fields.includes("username")) {
					errorMessage = "duplicate_username";
				} else if (fields.includes("email")) {
					errorMessage = "duplicate_email";
				}
				if (errorMessage) {
					throw new BaseError(
						errorMessage,
						HTTPStatusCode.DuplicateField,
						false,
						"Duplicate field during registration!",
					);
				}
			}
			throw error;
		}
	};

	loginWithEmailAndPassword = async (
		email: string,
		password: string,
	): Promise<User> => {
		// TODO login
		try {
			const user = await this.getUserWithEmail(email);
			if (!user) {
				throw new BaseError(
					"could_not_find_user_with_email",
					HTTPStatusCode.NotFound,
					false,
					"Could not find user with given email!",
				);
			}

			// Check if the password matches
			const isMatch = await Crypto.isPasswordCorrect(
				password,
				user.password,
			);
			if (!isMatch) {
				throw new BaseError(
					"incorrect_password",
					HTTPStatusCode.NotFound,
					false,
					"Incorrect password entered!",
				);
			}
			return user;
		} catch (error) {
			throw error;
		}
	};
}

export default new UserService();
