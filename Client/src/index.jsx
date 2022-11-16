import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from './Contexts/ConfigContext';

import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API || "https://prettygirl-api-production.up.railway.app/"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
)
