const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const bannerData = require("./data/bannerData.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/bannerData",(req,res) => {
    res.send(bannerData)
})

app.listen(port, () => {
  console.log(`chef recipe is running port ${port}`);
});
