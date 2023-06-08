import express, { NextFunction, Router } from "express";
import asyncHandler from "express-async-handler";
import UserService from "@services/user.service";
import { generateJWTTokenForUser } from "@utils/jwt";
import { HTTPStatusCode } from "@customTypes/http";

const jwtTokenMaxAge = 336 * 60 * 60; // 14 days

class UserController {
	router: Router;

	constructor() {
		this.router = express.Router();
		this.intializeRoutes();
	}

	// initialize all /user related routes here
	public intializeRoutes() {
		this.router.get("/", asyncHandler(this.login));
		this.router.post("/", asyncHandler(this.register));
	}

	register = async (
		req: express.Request,
		res: express.Response,
		next: NextFunction,
	) => {
		try {
			const { username, firstName, lastName, email, password } = req.body;
			console.log({ req: req.body });
			const newUser = await UserService.createUser(
				username,
				firstName,
				lastName,
				email,
				password,
			);
			const token = generateJWTTokenForUser(newUser.id);
			res.cookie("jwt", token, {
				httpOnly: true,
				maxAge: jwtTokenMaxAge * 1000,
			});
			res.status(HTTPStatusCode.Created).json({
				user: newUser,
			});
		} catch (error) {
			next(error);
		}
	};

	login = async (
		req: express.Request,
		res: express.Response,
		next: NextFunction,
	) => {
		try {
			const { email, password } = req.body;

			// Find the user with the email
			const user = await UserService.loginWithEmailAndPassword(
				email,
				password,
			);

			// Generate JWT
			const token = generateJWTTokenForUser(user.id);
			res.cookie("jwt", token, {
				httpOnly: true,
				maxAge: jwtTokenMaxAge,
			});
			res.status(HTTPStatusCode.Ok).json({ user, token });
		} catch (error) {
			next(error);
		}
	};
}
export default UserController;
