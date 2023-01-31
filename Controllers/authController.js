// const { response } = require("../Utils/utils");
const authService = require("../Services/authService");
const authDb = require("../Repository/authDb");

// create user
const registerUser = async (req, res) => {
	try {
		const user = await authService.createUser(req.body.data);
		
		res.status(201).json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
};

const loginUser = async (req, res) => {
	const { email, password } = req.params;
	try {
		const user = await authService.login(email, password);
		res.status(200).json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json(error.message);
	}
};
module.exports = { registerUser, loginUser };
