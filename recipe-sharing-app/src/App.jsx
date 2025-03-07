import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RecipeList from "./componant/RecipeList";
import AddRecipeForm from "./componant/AddRecipeForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetails from "./componant/RecipeDetails";
import Home from "./componant/Home";
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
    </Routes>
  </Router>
  //   <div>
  //   <RecipeList />
  //   <AddRecipeForm />
  // </div>
);

export default App;
