import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

// Fetch GitHub user data
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user data");
  }
};
