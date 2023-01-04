import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseRoute from "./routes/BaseRoute";
import AuthProvider from './context/AuthProvider';
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CookiesProvider>
          <Routes>
            <Route path="/*" element={<BaseRoute/>} />
          </Routes>
        </CookiesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)