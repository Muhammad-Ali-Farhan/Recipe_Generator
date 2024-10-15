const express = require("express");
const cors = require("cors");
const path = require("path"); // Make sure to require 'path'
const { getRecipes } = require("./controllers/recipeController");
require("dotenv").config();

const app = express();
app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? 'https://recipe-generator-12.onrender.com/' : 'http://localhost:3000' 
}));


app.use(express.static(path.join(__dirname, '../client/client/build'))); 

app.get("/api/recipes", getRecipes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/client/build/index.html')); 
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
