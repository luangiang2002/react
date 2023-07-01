import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/CtSanpham1.css'
function CtSanpham1({ renderData, ontoggle, renderProduct }) {
    const navigater = useNavigate()
    const handleBuy = () => {
        ontoggle(false)
        return navigater('/login')
    }
    const handleClick = () => {
        window.scrollTo(0, 0)
    }
    // console.log(renderProduct);
    // console.log('ad',renderData);
    const fiter = renderProduct.filter((item) => {
        if (renderData.loai === item.loai)
            return item
    })
    const Product= fiter.map((item)=>{
        return (
            <div className="card" >
            <p className="icon">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                (27)
            </p>
            <h4>New</h4>
            <img
                src={item.image}
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <p className="card-text">{item.tensp}</p>
                <p className="card-text2">
                    {item.gia} <sub>VND</sub>
                    <select>
                        <option value="">200g</option>
                        <option value="">300g</option>
                        <option value="">400g</option>
                        <option value="">700g</option>
                    </select>
                </p>
            </div>
        </div>
        )
    })
    return (
        <div className='product-details'>
            <div>
                <div className='product'>
                    <Link to={'/'} onClick={handleClick}>Trang chủ &gt;</Link>
                    <Link to={'/sanpham'} onClick={handleClick}>Sản phẩm &gt;</Link>
                    <Link to={'/ctsp1'} onClick={handleClick}>Chi tiết sản phẩm</Link>
                </div>
                <div className='item'>
                    <div>
                        <img src={renderData.image} alt="" />
                    </div>
                    <div className='title'>
                        <h1>{renderData.tensp}</h1>
                        <p className="icon">
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <i className="fa fa-star" aria-hidden="true" />
                            <span>0 đánh giá</span>
                        </p>
                        <p className='dola'>
                            <span>{renderData.gia}<sub>VND</sub></span>
                            <select>
                                <option>10ml</option>
                            </select>
                        </p>
                        <div><input type='submit' value='Mua Ngay' onClick={handleBuy} /></div>
                    </div>
                </div>
            </div>

            <h1>Sản phẩm liên quan</h1>

            <div className='product-list'>
              {Product}
            </div>
        </div>

    )
}

export default CtSanpham1;