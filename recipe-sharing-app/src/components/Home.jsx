// import RecipeList from "./RecipeList";
import AddRecipeForm from "./AddRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";
import SearchBar from "./SearchBar ";
const Home = () => {
  return (
    <div>
      <h1>Welcome to Recipe Manager</h1>
      <AddRecipeForm />
      {/* <RecipeList /> */}
      <SearchBar />
    </div>
  );
};

export default Home;
