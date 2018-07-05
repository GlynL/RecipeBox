const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const recipes = require("./routes/recipes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/recipes");
mongoose.Promise = Promise;

app.use("/api/recipes", recipes);

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
