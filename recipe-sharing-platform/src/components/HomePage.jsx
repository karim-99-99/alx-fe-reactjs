import { useState, useEffect } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("../src/data.json")
      .then((responce) => responce.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.log("Error loading Data", error));
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold mb-7">Recipes List</h1>
      <div className="flex flex-centre justify-center gap-20 sm:max-w-3xl  ">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="shadow-lg bg-slate-100 rounded-sm ">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="max-h-60 rounded-lg mx-auto sm:gap-14"
            />
            <h2 className="font-bold text-violet-500 m-2 text-xl"> {recipe.title} </h2>
            <p> {recipe.summary} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
