const User = require("../db/model/User");
const rawData = require("./raw-data");
const parser = require("./parser-data");

module.exports = () => {
	const users = parser(rawData);
	users.map(async (user) => {
		await new User(user).save();
	});
};
