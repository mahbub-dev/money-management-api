// Define a consistent error format
class customError extends Error {
	constructor(message, status) {
		super(message);
		this.status = status;
	}
}

// create error
const createError = (message, status = "undefined") => {
	throw new customError(message, status);
};

// create error response
const errorResponse = (res, error) => {
	if (error instanceof customError) {
		const { message, status } = error;
		res.status(status).json({ message, status });
	} else {
		console.error(error);
		res.status(500).json("internal server error");
	}
};
module.exports = { errorResponse, createError, customError };
