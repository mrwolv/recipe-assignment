/* eslint-disable react/prop-types */

import { useAuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Component }) => {
  const { isAuthenticated } = useAuthContext();

  return <>{isAuthenticated ? <Component /> : <Navigate to="/login" replace/>}</>;
};

export default ProtectedRoute;
