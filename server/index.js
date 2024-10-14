const express = require("express");
const cors = require("cors");
const { getRecipes } = require("./controllers/recipeController");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/api/recipes", getRecipes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
