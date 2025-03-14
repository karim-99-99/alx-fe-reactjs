import { useState } from "react";

const RegistrationForm = () => {
    const [input,setInput] =useState( { username: '' , email: '' , password: ''})
    
    const handleChange = (e) => {
const {name , value} = e.target;
setInput(prevState=> ({...prevState,[name]: value}));
    };

    const handleSubmit= () => {
        e.preventDefault();
        console.log(input);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
            />
            <input 
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            />
            <input 
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>

    );
};
export default RegistrationForm