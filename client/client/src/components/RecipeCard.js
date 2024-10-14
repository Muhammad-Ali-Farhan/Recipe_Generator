import React from "react";

function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <h2>{recipe.label}</h2>
            <img src={recipe.image} alt={recipe.label} />
            <p>Calories: {Math.round(recipe.calories)}</p>
            <ul>
                {recipe.ingredientLines.map((line, index) => (
                    <li key={index}>{line}</li>
                ))}
            </ul>
            <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                View Recipe
            </a>
        </div>
    );
}

export default RecipeCard;
