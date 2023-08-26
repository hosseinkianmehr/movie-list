
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../store/hook';


const AuthenticationRoute = () => {
    const islogin = useAppSelector((state) => state.auth.islogin)

            if(islogin){
                return <Navigate to="/"  />
            }
        
  
  
      // authorized so return outlet for child routes
      return <Outlet />;
}

export default AuthenticationRoute