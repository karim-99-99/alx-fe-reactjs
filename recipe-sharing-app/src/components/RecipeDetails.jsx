import useRecipeStore from "../storage/useRecipeStore";
import { useParams } from "react-router-dom";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(recipeId))
)

  return (
    <div>
      <h1> {recipe.title}</h1>
      <p>{recipe.description}</p>

      <EditRecipeForm recipe={recipe} />

      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};
export default RecipeDetails;
