import React from 'react'
import recipeStore from "./recipeStore"
import useRecipeStore from "./recipeStore";


const FavouriteList = () => {
    const favourites = useRecipeStore(state => state.favourites.map(id => 
    state.recipes.find(recipe => recipe.id === id)

    ));
    return (
        <div>
<h2> My Favourites</h2>
{ favourites.map(recipe => (
<div key={recipe.id}>
    <h3> {recipe.title}</h3>
    <p> {recipe.describtion}</p>


</div>
))}
        </div>

)

};
export default FavoritesList
