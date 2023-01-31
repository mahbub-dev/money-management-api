const Client = require("../Models/Client");

// module scafholding
const clientDb = {};

clientDb.creatClient = async (data) => {
	const { name, email, phone, profilePicture } = data;
	try {
		const client = await Client.create({
			name,
			email,
			phone,
			profilePicture,
		});
		const savedClient = client.save();
		return savedClient;
	} catch (error) {
		return error;
	}
};

clientDb.getClient = async (id) => {
	try {
		const client = await Client.findOne({ _id: id });
		return client;
	} catch (error) {
		cb(error);
	}
};
module.exports = clientDb;
