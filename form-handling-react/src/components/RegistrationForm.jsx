import { useState } from "react";

const RegistrationForm = () => {
    const [input,setInput] =useState( { username: '' , email: '' , password: ''})
    const[error,setErrors] = useState({});
    const handleChange = (e) => {
const {name , value} = e.target;
setInput(prevState=> ({...prevState,[name]: value}));
    };

    const handleSubmit= () => {
        e.preventDefault();
        let newErrors = {}

        if (!username) {
            newErrors.username = "Username is required";
        }
        if (!email) {
            newErrors.email = "email is required";
        }
        if (!password) {
            newErrors.password= "password is required"
        }
        setErrors(newErrors);
        console.log(input);
    };
  

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="name"
            value={username}
            onChange={handleChange}
            />
            {error.username && <p>{error.username}</p>}
            <input 
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            />
             {error.email && <p>{error.email}</p>}
            <input 
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            />
             {error.password && <p>{error.password}</p>}
            <button type="submit">Submit</button>
        </form>

    );
};
export default RegistrationForm