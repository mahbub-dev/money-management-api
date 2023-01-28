const router = require("express").Router();
const path = require("path");
router.get(`/:filename`, (req, res) => {
	const { filename } = req.params;
	console.log(filename);
	const filePath = path.join(__dirname, "", filename);
	res.sendFile(filePath);
});
module.exports = router;
