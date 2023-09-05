import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from "react-redux"

import { BrowserRouter } from 'react-router-dom'
import { store } from './store/index.ts'
import CssBaseline from "@mui/material/CssBaseline";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
      <CssBaseline/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,

)
