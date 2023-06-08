const checkPasswordValidity = (password: string): string => {
	if (password.length < 6) {
		throw Error("password_length_should_be_longer_than_6");
	}
	return "";
};

export const PasswordUtils = { checkPasswordValidity };
