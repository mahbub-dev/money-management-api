const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		phone: { type: String, required: true },
		profilePicture: { type: String },
	},
	{ timestamps: true }
);
module.exports = mongoose.Model("Clients", clientSchema);
