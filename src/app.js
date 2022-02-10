const express = require("express");
const cors = require("cors");

require("./db/mongo");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 4000;
app.listen(PORT, () => {
	console.log(`Listening on ${PORT}`);
});
