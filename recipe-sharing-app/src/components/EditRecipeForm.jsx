import { useState } from "react";
import recipeStore from "./recipeStore"

const EditRecipeForm = ({recipe}) => {
    const [updatedRecipe, setUpdatedRecipe] = useState({
        title: recipe.title,
        description: recipe.description, 
        ingredients: recipe.ingredients || "", // Ensure ingredients exist
    });
    const updateRecipe = recipeStore ((state) => state.updateRecipe);

    const handleChange = (e) => {
        setUpdatedRecipe({...updatedRecipe, [e.target.name] : e.target.value });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateRecipe(recipe.id, {
            ...updatedRecipe
        })
    }
    
  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <label>
        Title:
        <input type="text" name="title" value={updatedRecipe.title} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" value={updatedRecipe.description} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Ingredients (comma separated):
        <input type="text" name="ingredients" value={updatedRecipe.ingredients} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;