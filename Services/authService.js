const authDb = require("../Repository/authDb");
const { createError } = require("../Utils/errorHandler");
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
			createError("invalid input", 400);
		}
	} catch (errorService) {
		throw errorService;
	}
};

// login
authService.login = async (email, password) => {
	try {
		const user = await authDb.login(email);
		const isMatch = await bcrypt.compare(password, user.password);
		if (isMatch) return user;
	} catch (error) {
		throw error
	}
};
module.exports = authService;
