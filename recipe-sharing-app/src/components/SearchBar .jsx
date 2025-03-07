import React from "react";
import useRecipeStore from "./useRecipeStore ";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const setFilterCriteria = useRecipeStore((state) => state.setFilterCriteria);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes(); // Trigger filtering when search term changes
  };

  const handleFilterChange = (e) => {
    setFilterCriteria({ [e.target.name]: e.target.value });
    filterRecipes();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes by name..."
        onChange={handleSearch}
      />
      <input
        type="text"
        name="ingredients"
        placeholder="Filter by ingredients..."
        onChange={handleFilterChange}
      />
      <input
        type="number"
        name="time"
        placeholder="Max Preparation Time (mins)"
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default SearchBar;
