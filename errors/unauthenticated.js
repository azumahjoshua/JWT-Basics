const CustomAPIEerror = require("./custom-error");
const { StatusCodes } = require("http-status-codes");
class Unauthticated extends CustomAPIEerror {
	constructor(message) {
		super(message);
		this.statusCode = StatusCodes.UNAUTHORIZED;
	}
}

module.exports = Unauthticated;
