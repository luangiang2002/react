import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Regiter from './component/Register';
import Login from './component/Login';

function LoginOut() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
      <Route path='login' element={<Login />}></Route>
      <Route path='register' element={<Regiter />}></Route>
      </Routes> 
    </BrowserRouter>
    </div>
  )
}

export default LoginOut