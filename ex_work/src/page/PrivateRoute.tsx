import { Navigate, Outlet } from 'react-router-dom';
import { useJwt } from 'react-jwt';



export default function PrivateRoute() {
  const token = localStorage.getItem("token");
  const ex = true
  if (token) {
    const { isExpired } = useJwt(token)
    const ex = isExpired
  }
    if (!token && ex) {
      // not logged in so redirect to login page with the return url
      return <Navigate to="/login" />
    }

  // authorized so return outlet for child routes
  return <Outlet />;
}