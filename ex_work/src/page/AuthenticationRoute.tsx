import React from 'react'
import { useJwt } from 'react-jwt';
import { Navigate, Outlet } from 'react-router-dom';


const AuthenticationRoute = () => {
    const token = localStorage.getItem("token");
    
        if (token ) {
            const { isExpired}=useJwt(token)
            if(!isExpired){
                return <Navigate to="/"  />
            }
        }
  
  
      // authorized so return outlet for child routes
      return <Outlet />;
}

export default AuthenticationRoute