// import {create } from 'zustand';

// const useRecipeStore = create(set => ({
//   recipes: [],
  
// searchTerm: '',
// setSearchTerm: (term) => set ({ searchTerm: term}),

// filteredRecipes: [],
// filterRecipes: () => set(state => ({ filteredRecipes: state.recipes.filter(recipe => recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())})),
//   addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  
//   deleteRecipe: (id) => set(state => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id),

//   })),

//   updateRecipe: (id ,updateRecipe) => set(state => ({recipes: state.recipes.map((recipe) => recipe.id === id ? {...recipe, ...updateRecipe } : recipe
//   ),
// })),
  
//   setRecipes: (recipes) => set({ recipes })

// }));

// export default useRecipeStore;


import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favourites:[],
  recommendations:[],

  addFavourite : (recipeId) => 
    set((state) => ({
      favourites: [...state.favourites,recipeId]
    })
    ) ,

    removeFavourite: (recipeId) => 
      set((state) => ({
      favourites: state.favourites.filter(id => id!==recipeId)
      }) 
      ),

    generateRecommendations: () => 
      set((state) => {
        const recommended = state.recipes.filter(recipe =>
          state.favourites.includes(recipeId) && math.random() > 0.5
        );
        return { recommendations: recommended};
      }
      ),


  setSearchTerm: (term) => 
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: state.searchTerm
        ? [...state.recipes, newRecipe].filter((recipe) =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
        : [...state.recipes, newRecipe],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== id),
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
      filteredRecipes: state.filteredRecipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  setRecipes: (recipes) =>
    set({
      recipes,
      filteredRecipes: recipes, // Ensure filtered list is updated when setting new recipes
    }),
}));

export default useRecipeStore;
