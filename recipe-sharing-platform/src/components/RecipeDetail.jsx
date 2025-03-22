import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.log("Error Loading Data", error));
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="">
    
      <img src={recipe.image} alt={recipe.title} className=" rounded-lg w-full sm:w-72 md:w-96 lg:w-auto justify-center mx-auto " />
   
    <div className=" justify-stretch mx-auto grid grid-rows-2 ">
    <div className="flex  shadow-xl rounded-xl mb-8 mt-6">
      <h2 className="text-bold text-xl pr-12">Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      </div>
     <div className="flex shadow-xl rounded-xl mb-8 ">
      <h2 className="text-bold text-xl">Instructions:</h2>
      <ul>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
