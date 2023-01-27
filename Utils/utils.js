const response = (res, error, success = {}) => {
	if (Object.keys(error).length) {
		res.status(error.status).json(error);
	} else {
		res.status(200).json(success);
	}
};
module.exports = { response };
