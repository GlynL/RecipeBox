const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/recipes", (req, res) => {
  // todo: add in database
  const recipes = [
    {
      name: "grilled streak",
      ingredients: ["steak", "snp"],
      method: ["snp steak", "grill steak"]
    }
  ];
  res.json(recipes);
});

// todo: add post route for adding recipe

// todo: delete route - removing recipe

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
