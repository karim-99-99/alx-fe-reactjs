import { useState } from "react";

const AddRecipeForm = () => {
  const [input, setInput] = useState({ title: "", ingredients: "", steps: "" });
  const [errors, setErrors] = useState({});

  //validation Form

  const validate = () => {
    let newError = {};
    if (!input.title || !input.ingredients || !input.steps) {
      newError.input = "All fields are required!";
    }
    if (input.ingredients.split("\n").length < 2) {
      newError.input = "Please enter at least two ingredients.";
    }
    setErrors(newError);
    console.log(input);
    return Object.keys(newError).length === 0;
  };
  const handleChange = (event) => {
    const target = event.target; // Extract target from event
    const value = target.value; // Extract value from target
    const name = target.name; // Extract name attribute
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Recipe submitted:", input);
      alert("Recipe successfully Added");
      setInput({ title: "", ingredients: "", steps: "" }); //Reset Form
    }
    // Here, you can add logic to send data to a backend or store it in local state
  };
  return (
    <form onSubmit={handleSubmit} className="">
      <label className="block font-bold pb-2 pt-2 text-lg ">Title</label>
      <input
        type="text"
        name="title"
        value={input.title}
        onChange={handleChange}
        className="border-2 border-gray-400 p-2 w-full rounded-md "
      />
      {errors.title && <p>{errors.title}</p>}
      <label className="block font-bold pb-2 pt-2 text-lg">Ingredients</label>

      <textarea
        name="ingredients"
        value={input.ingredients}
        onChange={handleChange}
        className="border-2 border-gray-400 p-2 w-full rounded-md "
      />
      {errors.ingredients && <p>{errors.ingredients}</p>}
      <label className="block font-bold pb-2 pt-2 text-lg ">steps</label>
      <textarea
        name="steps"
        value={input.steps}
        onChange={handleChange}
        className="border-2 border-gray-400 p-2 w-full rounded-md "
      />
      {errors.steps && <p>{errors.steps}</p>}
      <button type="submit" className=" shadow-md rounded-xl bg-blue-300 p-2 font-bold mt-3 w-full text-xl">submit</button>
    </form>
  );
};
export default AddRecipeForm;
