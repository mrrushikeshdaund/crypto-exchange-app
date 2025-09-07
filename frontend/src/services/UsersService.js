import axios from "axios";

const baseUrl = "http://127.0.0.1:8000";

export const signup = async (body) => {
  try {
    const url = await `${baseUrl}/users/signup`;
    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

export const login = async (body) => {
  try {
    const url = await `${baseUrl}/users/login`;
    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
