const clientService = require("../Services/clientService");
const { errorResponse } = require("../Utils/errorHandler");

// create
const createClient = async (req, res, next) => {
	try {
		const file = req.files[0];
		const { email, phone, name } = req.body;
		const fileLink = `${process.env.BASE_URL}/uploads/${file.filename}`;
		const data = await clientService.createClient(
			name,
			email,
			phone,
			fileLink
		);
		res.status(201).json(data);
	} catch (error) {
		errorResponse(res, error);
	}
};
// update
const updateClient = async (req, res) => {
	try {
		const data = await clientService.updateClient(req.params.id, req.body);
		res.status(201).json(data);
	} catch (error) {
		errorResponse(res, error);
	}
};
// get
const getClient = async (req, res) => {
	try {
		const name = req.query.name;
		const client = await clientService.getClient(name);
		res.status(200).json(client);
	} catch (error) {
		errorResponse(res, error);
	}
};
// delete
const deleteClient = async (req, res) => {
	try {
		const data = await clientService.deleteClient(req.params.id);
	} catch (error) {
		errorResponse(res, error);
	}
};

module.exports = {
	createClient,
	updateClient,
	getClient,
	deleteClient,
};
