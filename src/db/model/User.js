const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	ip: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("user", userSchema);
