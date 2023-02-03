const clientDb = require("../Repository/clientDb");
const { createError } = require("../Utils/errorHandler");

// module scafholding
const clientService = {};

// create new client
clientService.createClient = async (name, email, phone, fileLink) => {
	try {
		const clientData = { name, email, phone, profilePicture: fileLink };
		const objToArr = Object.values(clientData);
		if (objToArr.length === 4 && objToArr.some((i) => i === undefined)) {
			createError("invalid input", 400);
		} else {
			return await clientDb.createClient(clientData);
		}
	} catch (error) {
		throw error;
	}
};

// update client
clientService.updateClient = async (data) => {
	try {
		return await clientDb.updateClient(data);
	} catch (error) {
		throw error;
	}
};

// get client
clientService.getClient = async (name) => {
	try {
		return await clientDb.getClient(name);
	} catch (error) {
		throw error;
	}
};

// delete client
clientService.deleteClient = async (id) => {
	try {
		return await clientDb.deleteClient(id);
	} catch (error) {
		throw error;
	}
};

module.exports = clientService;
