const express = require("express");
const cors = require("cors");
const path = require("path"); // Make sure to require 'path'
const { getRecipes } = require("./controllers/recipeController");
require("dotenv").config();

const app = express();
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/client/build'))); // Adjusted path

app.get("/api/recipes", getRecipes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/client/build/index.html')); // Adjusted path
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
