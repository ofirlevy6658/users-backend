const express = require("express");
const cors = require("cors");

require("./db/mongo");
const User = require("./db/model/User");
const userValidator = require("./validate-user");

// #insert 50 users to db
// const insertData = require("./data/insert-data");
// insertData();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/users", async function (req, res) {
	try {
		if (Object.keys(req.query).length === 0) res.send(await User.find({}));
		const { category, term } = req.query;
		const filter = {};
		filter[category] = { $regex: term, $options: "i" };
		return res.send(await User.find(filter));
	} catch (e) {
		return res.status(500).send();
	}
});

app.post("/users", async function (req, res) {
	try {
		const { user } = req.body;
		if (!userValidator(user)) return res.send({ msg: "bad credentials" });
		await new User(user).save();
		res.send({ msg: "user added" });
	} catch (e) {
		res.status(500).send();
	}
});
app.post("/users/delete", async function (req, res) {
	try {
		const { ids } = req.body;
		await User.deleteMany({
			id: { $in: ids },
		});
		res.send({ msg: "users deleted" });
	} catch (e) {
		res.status(500).send();
	}
});

const PORT = 4000;
app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});
