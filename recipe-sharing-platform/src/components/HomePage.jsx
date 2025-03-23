import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.log("Error loading Data", error));
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold mb-7">Recipes List</h1>
      <Link to ={`/AddRecipeForm`} className="shadow bg- rounded-xl p-2 text-m w-auto absolute top-10 right-10"> Add New Item </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  justify-center gap-20 sm:max-w-3xl ">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="shadow-lg bg-slate-100 rounded-sm ">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="max-h-60 rounded-lg mx-auto sm:gap-14 hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <h2 className="font-bold text-violet-500 m-2 text-xl"> {recipe.title} </h2>
            <p> {recipe.summary} </p>
            <Link to={`/recipe/${recipe.id}`} className=" font-bold"> view Recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
