const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const bannerData = require("./data/bannerData.json");
const chefData = require("./data/chefData.json")
const feedback = require("./data/feedBackData.json")

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/bannerData",(req,res) => {
    res.send(bannerData)
})

app.get("/chefs",(req,res) => {
    res.send(chefData)
})

app.get("/feedback",(req,res) => {
    res.send(feedback)
})

app.listen(port, () => {
  console.log(`chef recipe is running port ${port}`);
});
