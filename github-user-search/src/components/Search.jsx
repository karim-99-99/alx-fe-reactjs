import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  // State for form input and errors
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setErrors] = useState({});
  const [loading, setLoading] = useState(false);


  // Handle input change
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state
    setUserData(null); // Reset previous user data

    const newErrors = {};
    if (!username.trim()) {
      newErrors.name = "Enter UserName";
      setErrors(newErrors); // ✅ Fix error state update
      setLoading(false);
      return;
    }

    try {
      const data = await fetchUserData(username);
      setUserData(data);
      setErrors({}); // ✅ Clear previous errors if successful
    } catch (err) {
      setErrors({ api: "User not found or API error" }); // ✅ Fix error handling
    } finally {
        setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub Username"
          value={username}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Display Form Validation Error */}
      {error.name && <p style={{ color: "red" }}>{error.name}</p>}
      {loading && <p>Loading...</p>}

      {/* Display API Error */}
      {error.api && <p style={{ color: "red" }}>{error.api}</p>}

      {/* Display User Data */}
      {userData && (
        <div>
          <h2>{userData.name || userData.login}</h2>
          <img src={userData.avatar_url} alt="Profile" width="100" />
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
