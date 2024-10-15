import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
import './styles.css'; 

function App() {
    const [ingredients, setIngredients] = useState("");
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = async () => {
        const baseURL = process.env.NODE_ENV === 'production'
            ? window.location.origin 
            : 'http://localhost:5000'; 
    
        const response = await fetch(
            `${baseURL}/api/recipes?ingredients=${ingredients}`
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
