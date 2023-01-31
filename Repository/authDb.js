const User = require("../Models/User.js");

// module scafholding
const authDb = {};
// create user
authDb.createUser = async (data) => {
	try {
		if (await User.findOne({ email: data.email })) {
			throw new Error("user is already exist");
		} else {
			const user = new User(data);
			return await user.save();
		}
	} catch (error) {
		throw new Error(error.message);
	}
};

// login
authDb.login = async (email) => {
	try {
		const user = await User.findOne({ email });
		if (user) {
			return user;
		} else {
			throw new Error("user not found");
		}
	} catch (error) {
		throw new Error(error.message);
	}
};
module.exports = authDb;
