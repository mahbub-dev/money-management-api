const Client = require("../Models/Client");
const response = require("../Utils/utils");
const fs = require("fs");
const path = require("path");

// create
const createClient = async (req, res, next) => {
	const file = req.files[0];
	console.log(file);
	const fileLink = `http://localhost:5000/uploads/${file.filename}`;
	res.json(fileLink);
};
// update
const updateClient = async (req, res) => {};
// get
const getClient = async (req, res) => {
	const filePath = path.join(
		__dirname,
		"uploads",
		"1674898000425-Screenshot_15.png"
	);
	res.sendFile(filePath);
};
// delete
const deleteClient = async (req, res) => {};

module.exports = {
	createClient,
	updateClient,
	getClient,
	deleteClient,
};
