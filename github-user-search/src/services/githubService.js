import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

// Fetch GitHub user data
export const fetchUserData = async (username ,location , minRepos) => {
  try {
    let query = username ? `${username} in:login` : "";
    if (location) query += `location:${location}`;
    if (minRepos) query += `repos:>= ${minRepos}`

    const response = await axios.get(`${BASE_URL}${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Error fetching user data");  }
};
