﻿const express = require("express");
const { PORT, connection } = require("./db/mongo");

const app = express();

app.use(express.json());

app.listen(PORT, async () => {
	console.log("Server is running on PORT: " + PORT);
	try {
		await connection;
	} catch {
		console.log(" But Unable to Connect With Database");
	}
});