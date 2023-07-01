import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../asset/Pictures/trang-chu/logophongtra.png"
import backround from '../asset/Pictures/trang-chu/fotter.png'
import '../css/footer.css'

function Footer() {
  const handleClick=()=>{
    window.scrollTo(0, 0)
  }
 
    return (

        <div className="footer">
          <div className="footer-address">
            <img alt='' src={backround} className="footer-img" />
            <div className="footer-ft">
              <div className="card">
                <img
                  src={logo} 
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">8472.803.489</p>
                  <p className="card-text">trasenbachdiep@gmail.com</p>
                  <p className="card-text">Quảng An, Tây Hồ,Hà Nội</p>
                </div>
              </div>
              
              <div className="card">
                <h3>Về Trang chủ</h3>
                <div className="card-body">
                  <p className="card-text">
                  <Link to={'/Sanpham'} onClick={handleClick}>Sản phẩm</Link>
                  </p>
                  <p className="card-text">
                  <Link to={'/Gioithieu'} onClick={handleClick}>Giới thiệu</Link>
                  </p>
                  <p className="card-text">
                    <Link to={'/Tintuc'} onClick={handleClick}>Tin Tức</Link>
                  </p>
                </div>
              </div>
              
              <div className="card">
                <h3>Liên Hệ</h3>
                <div className="card-body">
                  <p className="card-text">
                    <i className="fa fa-youtube-play" aria-hidden="true" />
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </p>
                  <p className="card-text">Copyright © 2010-2020</p>
                  <p className="card-text">
                    Tra Sen Bach Diep. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

    )
}

export default Footer

