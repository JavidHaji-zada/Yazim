import bcrypt from "bcryptjs";
const hashPassword = async (password: string): Promise<string> => {
	return await bcrypt.hash(password, 12);
};

const isPasswordCorrect = async (password: string, hashedPassword: string) => {
	return await bcrypt.compare(password, hashedPassword);
};

const Crypto = { hashPassword, isPasswordCorrect };
export default Crypto;
