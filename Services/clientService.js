const clientDb = require("../Repository/clientDb");
// module scafholding
const clientSerice = {};
clientSerice.clientData = async (name, email, phone, fileLink) => {
	const clientData = { name, email, phone, profilePicture: fileLink };
	return await clientDb.creatClient(clientData);
};

clientSerice.getClient = async (data) => {
	return await clientDb.getClient(data);
};

module.exports = clientSerice;
