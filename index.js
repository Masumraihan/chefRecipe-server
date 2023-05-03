const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const bannerData = require("./data/bannerData.json");
const chefData = require("./data/chefData.json");
const feedback = require("./data/feedBackData.json");
const recipeData = require("./data/recipeData.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/bannerData", (req, res) => {
  res.send(bannerData);
});

app.get("/chefs", (req, res) => {
  res.send(chefData);
});

app.get("/chefs/:id", (req, res) => {
  const { id } = req.params;
  const currentChef = chefData.find((chef) => {
    return chef.id == id;
  });
  res.send(currentChef);
});

app.get("/feedback", (req, res) => {
  res.send(feedback);
});

app.get("/recipes/:id", (req, res) => {
  const { id } = req.params;
  const currentRecipe = recipeData.find((recipe) =>  recipe.chef_id == id);
  return res.send(currentRecipe);
});

app.listen(port, () => {
  console.log(`chef recipe is running port ${port}`);
});
