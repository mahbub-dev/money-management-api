const Client = require("../Models/Client");
const clientSerice = require("../Services/clientService");
const response = require("../Utils/utils");

// create
const createClient = async (req, res, next) => {
	const file = req.files[0];
	const { email, phone, name } = req.body;
	const fileLink = `${process.env.BASE_URL}/uploads/${file.filename}`;
	const response = await clientSerice.clientData(
		name,
		email,
		phone,
		fileLink
	);
	console.log(response);
};
// update
const updateClient = async (req, res) => {};
// get
const getClient = async (req, res) => {
	const id = "63d5049206a07874c45ec6c4";
	const client = await clientSerice.getClient(id);
	res.json(client);
};
// delete
const deleteClient = async (req, res) => {};

module.exports = {
	createClient,
	updateClient,
	getClient,
	deleteClient,
};
