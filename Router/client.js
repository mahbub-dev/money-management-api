const router = require("express").Router();

const {
	createClient,
	updateClient,
	getClient,
	deleteClient,
} = require("../Controller/clientController");

// create client
const multer = require("multer");
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/");
	},
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
	fileFilter: (req, file, callback) => {
		const mimetypes = ["image/jpeg", "image/png", "application/pdf"];
		if (mimetypes.includes(file.mimetype)) {
			callback(null, true);
		} else {
			callback(new Error("Invalid file type"), false);
		}
	},
});
const upload = multer({ storage: storage });
router.post("/", upload.any(), createClient);

// update client
router.put("/", updateClient);

// get clients
router.get("/", getClient);

// delete client
router.delete("/", deleteClient);

module.exports = router;
