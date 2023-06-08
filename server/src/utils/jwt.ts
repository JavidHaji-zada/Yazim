import jwt from "jsonwebtoken";

export const generateJWTTokenForUser = (id: number): string => {
	return jwt.sign({ userId: id }, process.env.JWT_SECRET || "DEMO_KEY", {
		expiresIn: "14 days",
	});
};
