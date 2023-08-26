import React from 'react'
import { useJwt } from 'react-jwt';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


const AuthenticationRoute = () => {
    const islogin = useSelector((state) => state.auth.islogin)

            if(islogin){
                return <Navigate to="/"  />
            }
        
  
  
      // authorized so return outlet for child routes
      return <Outlet />;
}

export default AuthenticationRoute