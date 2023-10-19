const express = require("express");
const fs = require("fs");
const app = express();

const namesData = fs.readFileSync(
  "martial-law-resolution-18-2018.json",
  "utf-8"
);
const victims = JSON.parse(namesData).victims;

app.get("/martial-law/victims", (req, res) => {
  res.json({ victims });
});

const port = process.env.PORT || 1972;
app.listen(port, () => {
  console.log(`Martial Law Victims API is running on port ${port}`);
});
