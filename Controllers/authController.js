// const { response } = require("../Utils/utils");
const authService = require("../Services/authService");
const authDb = require("../Repository/authDb");
const { errorResponse } = require("../Utils/errorHandler");
const e = require("express");
// create
const registerUser = async (req, res) => {
	try {
		const user = await authService.createUser(req.body.data);
		res.status(201).json(user);
	} catch (error) {
		errorResponse(res, error);
	}
};

// login
const loginUser = async (req, res) => {
	const { email, password } = req.params;
	try {
		const user = await authService.login(email, password);
		res.status(200).json(user);
	} catch (error) {
		errorResponse(res, error);
	}
};
module.exports = { registerUser, loginUser };
