const mongoose = require("mongoose");
const transacationSchema = new mongoose.Schema(
	{
		clientId: { type: string },
		type: { type: String, required: true },
		amount: { type: Number, required: true },
		desc: { type: String, required: true },
	},
	{ timestamps: true }
);
module.exports = mongoose.Model("Transacation", transacationSchema);
