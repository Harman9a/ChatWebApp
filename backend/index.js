require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// Schema's Start
const Users = require("./Schema/users");
// Schema's End

let app = express();
let port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connected!");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

app.post("/post-login", async (req, res) => {
  try {
    let { email, password } = req.body;

    const users = await Users.find({
      email,
      password,
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/create-user", async (req, res) => {
  try {
    let { email } = req.body;

    const users = await Users.find({
      email,
    });

    if (users.length === 0) {
      const result = await Users.create(req.body);
      res.status(200).json(result);
    } else {
      res.status(200).json(false);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
