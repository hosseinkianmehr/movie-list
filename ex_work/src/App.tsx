

import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './page/router';
import './App.css';
import Header from './component/header';
import { useJwt } from 'react-jwt';
import { useDispatch } from 'react-redux';
import { authActions } from './store/user';

function App() {

  const queryClient = new QueryClient()
  const token = localStorage.getItem("token");
  const dispatch = useDispatch()

  if (token !== null) {
    const { isExpired , decodedToken } = useJwt(token)
    if (!isExpired) {
      dispatch(authActions.login(decodedToken))
    }else{
      dispatch(authActions.logout())
    }
  }else{
    dispatch(authActions.logout())
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Router />

    </QueryClientProvider>
  )
}

export default App
