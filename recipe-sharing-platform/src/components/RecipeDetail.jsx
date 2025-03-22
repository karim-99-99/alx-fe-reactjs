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
    <div className=" flex justify-cente  ">
      <div>
      <img src={recipe.image} alt={recipe.title} className="rounded-xl h-2/5   " />
      </div>
      <div className="flex-row">
      <div className="shadow pb-6 mb-40">
      <h2>Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      </div>
      <div className="pb-6 pt-6 shadow ">
      <h2>Instructions:</h2>
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
