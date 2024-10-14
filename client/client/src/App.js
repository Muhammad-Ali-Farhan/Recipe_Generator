import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
import './styles.css'; // Ensure this path is correct

function App() {
    const [ingredients, setIngredients] = useState("");
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async () => {
        if (!ingredients) return; // Avoid fetching if no ingredients are provided

        const response = await fetch(
            `http://localhost:5000/api/recipes?ingredients=${ingredients}`
        );
        const data = await response.json();
        setRecipes(data);
    };

    const clearInputs = () => {
        setIngredients("");
        setRecipes([]);
    };

    return (
        <div className="App">
            <h1>Personalized Recipe Generator</h1>
            <input
                type="text"
                placeholder="Enter ingredients (comma-separated)"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
            />
            <button onClick={fetchRecipes}>Find Recipes</button>
            <button onClick={clearInputs}>Clear</button>
            <RecipeList recipes={recipes} />
        </div>
    );
}

export default App;
