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
			return rest;
		} else {
			throw new Error("invalid input");
		}
	} catch (errorService) {
		throw new Error(errorService);
	}
};

module.exports = authService;
