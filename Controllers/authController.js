// const { response } = require("../Utils/utils");
const authService = require("../Services/authService");
const authDb = require("../Repository/authDb");

// create user
const registerUser = async (req, res) => {
	try {
		const data = await authService.createUser(req.body.data);
		let success = await authDb.createUser(data);
		res.status(201).json(success);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
};

const loginUser = async (req, res) => {
	const { email, password } = req.params;
	let error = {};
	let success = {};
	try {
		const user = await User.findOne({ email });
		if (user) {
			user?.password === password
				? (success.user = user)
				: (error = { msg: "wrong credintials", status: 404 });
		} else {
			error = { msg: "wrong credintials", status: 404 };
		}
		response(res, error, success);
	} catch (err) {
		console.log(err);
		response(res, { server: err, status: 500 });
	}
};
module.exports = { registerUser, loginUser };
