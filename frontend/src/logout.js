export default function logout(navigate) {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  if (navigate) navigate("/login");
  else window.location.href = "/login";
} 