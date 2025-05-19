import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
