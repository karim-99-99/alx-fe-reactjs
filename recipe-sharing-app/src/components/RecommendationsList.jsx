import recipeStore from "./recipeStore";
import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  return (
    <div>
      <h2> Recommendations for you</h2>
      <button onClick={generateRecommendations}>Get recommendations</button>

      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3> {recipe.title}</h3>
            <p> {recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations yet. Add favorites to get suggestions!</p>
      )}
    </div>
  );
};

export default RecommendationsList;
