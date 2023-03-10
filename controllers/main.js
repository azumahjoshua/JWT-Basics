require("dotenv").config();
const jwt = require("jsonwebtoken");
const { BadRequest } = require("../errors");

const login = async (req, res) => {
	const { username, password } = req.body;
	// console.log(username, password);
	if (!username || !password) {
		throw new BadRequest("Please provide email and password");
	}

	const id = new Date().getDate();
	const token = jwt.sign(
		{
			id,
			username,
		},
		process.env.JWT_SECRET,
		{
			expiresIn: "10d",
		}
	);
	res.send({ msg: "User created", token: token });
};
const dashboard = async (req, res) => {
	// console.log(req.user);
	const luckyNumber = Math.floor(Math.random() * 100);
	res.status(200).json({
		msg: `Hello, ${req.user.username}`,
		secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
	});
};
module.exports = {
	login,
	dashboard,
};
