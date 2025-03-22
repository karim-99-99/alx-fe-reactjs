import { useState } from "react"

const AddRecipeForm = () => {
 const [input ,setInput] = useState({title:"" , ingredients:"" , preparation:""});
const handleChange = (e) => {
const {name , value} =e.target
setInput((prevState) => ({ ...prevState, [name]: value }));
}
const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.title || !input.ingredients || !input.preparation) {
      alert("All fields are required!");
      return;
    }
    if (input.ingredients.split("\n").length < 2) {
      alert("Please enter at least two ingredients.");
      return;
    }
    console.log("Recipe submitted:", input);
    // Here, you can add logic to send data to a backend or store it in local state
  };
return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        name="title"
        value={input.title}
        onChange={handleChange}
/>
<textarea 
name="ingredients"
value={input.ingredients}
onChange={handleChange}
/>
<textarea
name="preparation"
value={input.preparation}
onChange={handleChange}
/>
<button type="submit">submit</button>
    </form>
)
}
export default AddRecipeForm
