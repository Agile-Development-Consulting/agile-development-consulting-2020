require("dotenv").config();
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

const MailController = require("./controllers/mailController");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.use(MailController);

app.use(express.static(__dirname + "/client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`App is running on http://localhost:${PORT}`);
});
