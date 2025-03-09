import React from "react";
import useRecipeStore from "./recipeStore";

const AdvancedFilters = () => {
  const setFilterOptions = useRecipeStore((state) => state.setFilterOptions);

  return (
    <div className="flex gap-4 my-4">
      <input
        type="number"
        placeholder="Max Cooking Time (min)"
        className="border p-2 rounded-md"
        onChange={(e) =>
          setFilterOptions({ maxCookingTime: Number(e.target.value) })
        }
      />
      <input
        type="text"
        placeholder="Ingredient"
        className="border p-2 rounded-md"
        onChange={(e) => setFilterOptions({ ingredient: e.target.value })}
      />
    </div>
  );
};

export default AdvancedFilters;
