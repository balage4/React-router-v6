import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthUser = JSON.parse(localStorage.getItem('user'));
  return isAuthUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
