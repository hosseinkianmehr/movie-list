import { Navigate, Outlet } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import { useSelector } from 'react-redux';



export default function PrivateRoute() {
  const islogin = useSelector((state) => state.auth.islogin)
    if (!islogin) {
      // not logged in so redirect to login page with the return url
      return <Navigate to="/login" />
    }

  // authorized so return outlet for child routes
  return <Outlet />;
}