

import { QueryClient, QueryClientProvider } from 'react-query';
import Movie from './component/movie';
import Router from './page/router';
import './App.css';
import Header from './component/header';
import { useDispatch, useSelector } from 'react-redux';
import { authSlice } from './store/user';

import { useJwt } from "react-jwt";
import { useNavigate } from 'react-router-dom';

function App() {

  const queryClient = new QueryClient()
  const token = localStorage.getItem("token");
  const {decodedToken, isExpired}=useJwt(token)
  console.log(decodedToken, isExpired,'decodedToken, isExpired')
  const navigate = useNavigate()
  if (token==null || isExpired) {
   navigate('/login')
  }
  
  
  return (
    <QueryClientProvider client={queryClient}>
      <Header/>  
      <Router />

    </QueryClientProvider>
  )
}

export default App
