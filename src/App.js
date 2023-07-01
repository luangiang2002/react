
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './component/Index';
import Gioithieu from './component/Gioithieu';
import Sanpham from './component/Sanpham';
import Tintuc from './component/Tintuc';
import Lienhe from './component/Lienhe';
import CtSanpham1 from './component/CtSanpham1';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import axioProduct from './api/mockapi/user'
import Login from './component/Login';
import Register from './component/Register';

function App() {
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    getAllUser()
  }, [])
  const getAllUser = async () => {
    const resp = await axioProduct.get('product');
    setListUser(resp.data)
  }

  let hadleData = listUser.map((item) => {
    return item
  })
  const [list, setList] = useState([])

  const handleShow = (item) => {
    setList(item)

  };
  const [toggle, setToggle] = useState(true)
  const handleBuy = (toggle) => {
    setToggle(toggle)
  }

  return (
    <div className="App">
      <>
        <BrowserRouter >
          {toggle ? <>
            <Navbar ontoggle={handleBuy} />
            <Routes >
              <Route path='/' element={<Index />}></Route>
              <Route path="gioithieu" element={<Gioithieu />} ></Route>
              <Route path="sanpham" element={<Sanpham renderProduct={hadleData} onData={handleShow} />} ></Route>
              <Route path="tintuc" element={<Tintuc />} ></Route>
              <Route path="lienhe" element={<Lienhe />} ></Route>
              <Route path="ctsp1" element={<CtSanpham1 renderData={list} ontoggle={handleBuy} renderProduct={hadleData} />} ></Route>
              {/* <Route path='login' element={<Login ontoggle={handleBuy} />}></Route>
              <Route path='register' element={<Register />}></Route> */}
            </Routes>
            <Footer />
          </> : <>
            <Navbar ontoggle={handleBuy} />
            <Routes>
              <Route path='login' element={<Login ontoggle={handleBuy} />}></Route>
              <Route path='register' element={<Register />}></Route>
              <Route path='/' element={<Index />}></Route>
              <Route path="gioithieu" element={<Gioithieu />} ></Route>
              <Route path="sanpham" element={<Sanpham renderProduct={hadleData} onData={handleShow} />} ></Route>
              <Route path="tintuc" element={<Tintuc />} ></Route>
              <Route path="lienhe" element={<Lienhe />} ></Route>
              <Route path="ctsp1" element={<CtSanpham1 renderData={list} ontoggle={handleBuy} renderProduct={hadleData} />} ></Route>
            </Routes>
            <Footer />
          </>
          }
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;

