const axios = require("axios");

const getRecipes = async (req, res) => {
    const ingredients = req.query.ingredients;
    try {
        const response = await axios.get(`https://api.edamam.com/search`, {
            params: {
                q: ingredients,
                app_id: process.env.EDAMAM_APP_ID,
                app_key: process.env.EDAMAM_APP_KEY,
                to: 10,
            },
        });
        res.json(response.data.hits);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching recipes." });
    }
};

module.exports = { getRecipes };
