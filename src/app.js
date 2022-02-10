const express = require("express");
const cors = require("cors");

require("./db/mongo");
const User = require("./db/model/User");

// #insert 50 users to db
// const insertData = require("./data/insert-data");
// insertData();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/users", async function (req, res) {
	res.send(await User.find({}));
});

app.post("/users/delete", async function (req, res) {
	try {
		const { ids } = req.body;
		await User.deleteMany({
			id: { $in: ids },
		});
		res.send({ msg: "users deleted" });
	} catch (e) {
		res.send({ msg: e.message });
	}
});

const PORT = 4000;
app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});
