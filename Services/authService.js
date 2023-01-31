const authDb = require("../Repository/authDb");
const bcrypt = require("bcrypt");

// module scafholding
const authService = {};

// create user
authService.createUser = async (data) => {
	try {
		const { password, ...rest } = data;
		const { name, phone, email, profilePicture } = rest;
		if (name && phone && email && profilePicture && password) {
			const hashPassword = await bcrypt.hash(password, 10);
			rest.password = hashPassword;
			let success = await authDb.createUser(rest);
			return success;
		} else {
			throw new Error("invalid input");
		}
	} catch (errorService) {
		throw new Error(errorService);
	}
};

// login
authService.login = async (email, password) => {
	try {
		const user = await authDb.login(email);
		const isMatch = await bcrypt.compare(password, user.password);
		if (isMatch) return user;
	} catch (error) {
		throw new Error(error.message);
	}
};
module.exports = authService;
