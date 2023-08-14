

import { QueryClient, QueryClientProvider } from 'react-query';
import Movie from './component/movie';
import Router from './page/router';
import './App.css';
import Header from './component/header';
import { useDispatch, useSelector } from 'react-redux';
import { authSlice } from './store/user';



function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Header/>  
      <Router />

    </QueryClientProvider>
  )
}

export default App
