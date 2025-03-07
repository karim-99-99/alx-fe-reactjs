import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import Home from "./components/Home";
const App = () => (
  <div>
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
    </Routes>
  </Router>
{/*     
    <RecipeList />
    <AddRecipeForm /> */}
  </div>
);

export default App;
