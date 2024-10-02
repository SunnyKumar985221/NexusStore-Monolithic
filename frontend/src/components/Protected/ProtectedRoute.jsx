import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  if (loading === false) {
    return true ? <Outlet/> : <Navigate to="/login" replace />;
  }

  return null;
};

export default ProtectedRoute;

