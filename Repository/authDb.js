const User = require("../Models/User.js");
const { createError } = require("../Utils/errorHandler");

// module scafholding
const authDb = {};
// create user
authDb.createUser = async (data) => {
	try {
		if (
			await User.findOne({
				$or: [{ email: data.email }, { phone: data.phone }],
			})
		) {
			createError("user is already exist", 400);
		} else {
			const user = new User(data);
			return await user.save();
		}
	} catch (error) {
		throw error;
	}
};

// login
authDb.login = async (email) => {
	try {
		const user = await User.findOne({ email });
		if (user) {
			return user;
		} else {
			createError("user not found", 404);
		}
	} catch (error) {
		throw error;
	}
};
module.exports = authDb;
