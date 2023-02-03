const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const auth = require("./Router/auth");
const serveUploads = require("./uploads/serveUploads");
const client = require("./Router/client");
dotenv.config();

const app = express();
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: process.env.CROSSORIGIN,
		methods: ["GET", "POST", "PUT", "UPDATE"],
	})
);


// router
app.use("/auth", auth);
app.use("/client", client);
app.use("/uploads", serveUploads);


// error handller setup
app.use((err, req, res, next) => {
	res.status(err.status).json(err.message);
});

// creating a server and connect with database
app.listen(process.env.PORT || 4000, (err, data) => {
	if (err) {
		return err;
	} else {
		console.log(
			"server is running on port" + "  " + (process.env.PORT || 4000)
		);
		// conneting with database
		mongoose.set("strictQuery", true);
		mongoose.connect(process.env.MONGO_URI, (err) => {
			if (err) throw err;
			console.log("Database is connected ");
		});
	}
});
