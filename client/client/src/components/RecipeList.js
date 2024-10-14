import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
    return (
        <div className="recipe-list">
            {recipes.length > 0 ? (
                recipes.map((recipeData, index) => (
                    <RecipeCard key={index} recipe={recipeData.recipe} />
                ))
            ) : (
                <p>No recipes found. Please enter ingredients.</p>
            )}
        </div>
    );
}

export default RecipeList;
