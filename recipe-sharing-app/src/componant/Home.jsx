import RecipeList from "./RecipeList";
import AddRecipeForm from "./AddRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Recipe Manager</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>

  );
};

export default Home;
