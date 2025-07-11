import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "api",  // ✅ No extra slash
});

api.interceptors.request.use(
  (config) => {
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
