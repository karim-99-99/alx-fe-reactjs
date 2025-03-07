import {create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  
searchTerm: '',
setSearchTerm: (term) => set ({ searchTerm: term}),


// filteredRecipes: [],
// filterrecipes: () => set(state => ({
// filteredRecipes: state.recipes.filter(recipe => 
//   recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
// )
// });


  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  
  deleteRecipe: (id) => set(state => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id),

  })),

  updateRecipe: (id ,updateRecipe) => set(state => ({recipes: state.recipes.map((recipe) => recipe.id === id ? {...recipe, ...updateRecipe } : recipe
  ),
})),
  
  setRecipes: (recipes) => set({ recipes })

}));

export default useRecipeStore;
