const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var clientSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		phone: { type: String, required: true },
		profilePicture: { type: String },
	},
	{ timestamps: true }
);

//Export the model
module.exports = mongoose.model("Client", clientSchema);
