// import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'
import AddRecipeForm from './components/AddRecipeForm'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
  <Router>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/recipe/:id' element={<RecipeDetail />} /> 
      <Route path= '/addRecipeForm' element={<AddRecipeForm />} />
    </Routes>
  </Router>
      </div>
  )
}

export default App
