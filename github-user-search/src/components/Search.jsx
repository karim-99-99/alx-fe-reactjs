import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  // State for form input and errors
  const [input, setInput] = useState({username:"" ,location:"" ,minRepos:"" });
  const [userData, setUserData] = useState(null);
  const [error, setErrors] = useState({});
  const [loading, setLoading] = useState(false);


  // Handle input change
  const handleChange = (e) => {
    const {name , value} = e.target
    setInput((prevState) => ({...prevState , [name] : value}));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state
    setUserData(null); // Reset previous user data

    const newErrors = {};
    if (!input.username.trim()) {
      newErrors.name = "Enter UserName";
      setErrors(newErrors); // ✅ Fix error state update
      setLoading(false);
      return;
    }

    try {
      const data = await fetchUserData(input.username);
      if ( input .location && data.location ?.tolowerCase() !== input.location?.toLowerCase()) {
        setErrors({api :"not matching" }); // ✅ Clear previous errors if successful
      } else {
      setUserData(data);
    }
    } catch (error) {
      console.error("Looks like we cant find the user :", error);
      setErrors({ api: "Looks like we cant find the user" }); // ✅ Fix error handling
    } finally {
        setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter GitHub Username"
          value={input.username}
          onChange={handleChange}
        />
              {error.name && <p style={{ color: "red" }}>{error.name}</p>}

         <input
          type="text"
          name="location"
          placeholder="Enter Location"
          value={input.location}
          onChange={handleChange}
        />
        
        <input
          type="text"
          name="minRepos"
          placeholder="Enter minRepos"
          value={input.minRepos}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Display Form Validation Error */}
      {loading && <p>Loading...</p>}

      {/* Display API Error */}
      {error.api && <p style={{ color: "red" }}>{error.api}</p>}

      {/* Display User Data */}
      {userData && (
        <div>
          <h2>{userData.name || userData.login}</h2>
          <img src={userData.avatar_url} alt="Profile" width="100" />
          <p className="text-gray-600">Location: {userData.location || "Not Available"}</p>
          <p>Followers: {userData.followers}</p>
          <p>Repositories: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
