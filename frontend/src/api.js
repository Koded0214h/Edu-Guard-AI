import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api/",
});

// Add a request interceptor to include the token
api.interceptors.request.use(
  (config) => {
    // Do not add token for login or signup
    if (
      config.url.endsWith("/login/") ||
      config.url.endsWith("/signup/")
    ) {
      return config;
    }
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api; 