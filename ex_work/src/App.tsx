

import { QueryClient, QueryClientProvider } from 'react-query';
import Movie from './component/movie';
import Router from './page/router';
import './App.css';
import Header from './component/header';



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
