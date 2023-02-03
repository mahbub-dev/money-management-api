const Client = require("../Models/Client");
const { createError } = require("../Utils/errorHandler");
// module scafholding
const clientDb = {};

clientDb.createClient = async (data) => {
	try {
		const isExist = await Client.findOne({
			$or: [{ email: data.email }, { phone: data.phone }],
		});
		if (isExist) {
			createError("client is alread exist in our system", 400);
		} else {
			const client = await Client(data);
			return client.save();
		}
	} catch (error) {
		return error;
	}
};

// upadat client
clientDb.updateClient = async (id, data) => {
	try {
		return await Client.findByIdAndUpdate(id, {
			$set: data,
		});
	} catch (error) {
		throw error;
	}
};

// get client
clientDb.getClient = async (name) => {
	try {
		if (name) {
			return await Client.find({ name });
		} else {
			return await Client.find();
		}
	} catch (error) {
		cb(error);
	}
};

// delete client
clientDb.deleteClient = async (_id) => {
	try {
		return await Client.deleteOne({ _id });
	} catch (error) {
		throw error;
	}
};
module.exports = clientDb;
