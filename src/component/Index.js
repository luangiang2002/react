import React from 'react'
import baner from '../asset/Pictures/trang-chu/banner.png'
import '../css/index.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

var settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
  autoplay: true,
  autoplaySpeed: 2000,
};
var settings1 = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  lazyLoad: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
function Index() {

  return (
    <>
      <div className='index'>
        <Slider {...settings}>
          <div className="banner-img">
            <img src={baner} alt="" />
            <div className="banner-title">
              <h1 >Trà ướp sen tầy hồ</h1>
              <p >
                Sự hòa quyện tuyệt vời giữa hương thơm ngan ngát của <br />
                sen Bách diệp Hồ Tây và vị đậm đà của trà Tân Cương.
              </p>
              <Link to={'/'}><input type="submit" defaultValue="THỬ NGAY" className='wow animate__bounceInLeft'/></Link>
            </div>
          </div>
          <div className="banner-img">
            <img src={baner} alt="" />
            <div className="banner-title">

              <p>
                Sự hòa quyện tuyệt vời giữa hương thơm ngan ngát của <br />
                sen Bách diệp Hồ Tây và vị đậm đà của trà Tân Cương.
              </p>
              <input type="submit" defaultValue="THỬ NGAY" />
            </div>
          </div>
          <div className="banner-img">
            <img src={baner} alt="" />
            <div className="banner-title">
              <h1>Trà ướp sen tầy hồ</h1>
              <p>
                Sự hòa quyện tuyệt vời giữa hương thơm ngan ngát của <br />
                sen Bách diệp Hồ Tây và vị đậm đà của trà Tân Cương.
              </p>
              <input type="submit" defaultValue="THỬ NGAY" />
            </div>
          </div>
        </Slider>
      </div>
      <div className='Idproduct'>
        <div className="product ">
          <h3>Sản phẩm nổi bật</h3>
          <div className="product-list">
            <div className="slide-wrapper">
              <section className="regular slider">
                <Slider {...settings1}>
                  <div className="card">
                    <img
                      src="Pictures/trang-chu/product-1.png"
                      className="card-img-top" alt=''
                    />
                    <span>Trà ướp bông sen</span>
                  </div>
                  <div className="card">
                    <img
                      src="Pictures/trang-chu/product-2.png"
                      className=" card-img-top" alt=''
                    />
                    <span>Trà ướp nhị sen</span>
                  </div>
                  <div className="card">
                    <img
                      src="Pictures/trang-chu/product-3.png"
                      className=" card-img-top" alt=''
                    />
                    <span>Trà san tuyết</span>
                  </div>
                  <div className="card">
                    <img
                      src="Pictures/trang-chu/product-4.png"
                      className=" card-img-top" alt=''
                    />
                    <span>Trà ô long</span>
                  </div>
                  <div className="card">
                    <img
                      src="Pictures/trang-chu/product-4.png"
                      className=" card-img-top" alt=''
                    />
                    <span>Trà long tĩnh</span>
                  </div>
                </Slider>
              </section>
            </div>
          </div>
        </div>
      </div>
 
        <div className="background2">
          <img
            src="Pictures/trang-chu/background2.png"
            alt=""
            className="background2-img"
          />
          <div className="background2-content">
            <img
              src="Pictures/trang-chu/product-sen.png"
              alt="hoasen"
              className="hoasen"
            />
            <h1 >GIỚI THIỆU</h1>
            <span >
              Trà ướp Sen Bách Diệp - tinh hoa văn hóa Hà Thành là sự hòa quyện
              tuyệt vời giữa hương thơm ngan ngát của bông sen Bách diệp Hồ Tây và
              vị đậm đà của trà <br />
              Tân Cương Thái Nguyên. Qua đôi bàn tay tài hoa và bí quyết nghề mật
              truyền nhiều đời của người thợ trà Thăng Long, tạo ra thức quà tinh
              túy, kết tinh văn hóa ngàn năm Thăng Long – Hà Nội.
            </span>
            <input type="submit" defaultValue="ĐỌC THÊM" />
            <h3>0999.999.999</h3>
          </div>
        </div>
        <div className="item">
          <img
            src="Pictures/trang-chu/bannernghenhan.png"
            alt=""
            className="item-img"
          />
          <div className="item-professional">
    
            <h3>MUA NGAY</h3>
            <img
              src="Pictures/trang-chu/product-la.png"
              alt=""
              className="item-la"
            />
            <div className="item-iput">
              <input type="text" placeholder="Số điện thoại/Email" />
              <input type="button" defaultValue="Gửi" />
            </div>
          </div>
        </div>

    </>

  )
}

export default Index