import recipeStore from "./recipeStore"
import {useNavigate} from "react-router-dom";

const DeleteRecipeButton = ({recipeId}) => {
const deleteRecipe = recipeStore((state) =>
     state.deletRecipe);
const navigate= useNavigate();

const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId);
      navigate("/"); // Redirects to home page after deletion
    }
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton