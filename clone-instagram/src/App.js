import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="mainPage" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;