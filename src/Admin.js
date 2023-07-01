import React from 'react'
import Menu from './api/component/Menu';
import List from './api/component/List';
import Create from './api/component/Create';
import Update from './api/component/Update';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function Admin() {
  return (
    <div>
    <BrowserRouter >
    <Menu/>
    <Routes >
      <Route path="list-product" element={<List/>} ></Route>
      <Route path="create-product" element={<Create />} ></Route>
      <Route path="update-product" element={<Update />} ></Route>
    </Routes>
  </BrowserRouter> </div>
  )
}

export default Admin