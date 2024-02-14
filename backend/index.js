const express = require("express");
const app = express();
const DB = require("./database").connectDB;

const port = process.env.PORT;

DB();

app.use(express.json);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
