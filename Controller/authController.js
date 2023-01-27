const User = require("../Models/User.js");
const { response } = require("../Utils/utils");
const router = require("express").Router();
const express = require("mongoose");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
	const { name, phone, email, profilePicture, password } = req.body.data;
	let error = {};
	let success = {};
	try {
		const user = new User({ name, phone, email, profilePicture, password });
		success.user = await user.save();
		response(res, error, success);
	} catch (err) {
		console.log(err);
		error.server = err;
		error.status = 500;
		response(res, error);
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
