import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/sanpham.css'
import MultiRangeSlider from "multi-range-slider-react"

function Sanpham({ renderProduct, onData }) {

  const [value, setValue] = useState({
    minValue: 25,
    maxValue: 505
  })

  const [filterTraxanh, setFilterTraxanh] = useState(false);
  const [filterOlong, setFilterOlong] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const filterByPrice = (product) => {
    const gia = parseFloat(product.gia);
    return gia >= value.minValue && gia <= value.maxValue;
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  const checkProduct = () => {
    let filteredProducts = renderProduct;
    // Áp dụng bộ lọc sản phẩm
    if (filterTraxanh || filterOlong) {
      filteredProducts = filteredProducts.filter((item) => {
        if ((filterTraxanh && item.loai === "Trà") || (filterOlong && item.loai === "Tinh dầu")) {
          return true;
        }
        return false;
      }) 
    }
    filteredProducts= filteredProducts.filter(filterByPrice);
    // Áp dụng sắp xếp
    if (sortBy === "gia-asc") {
      filteredProducts = filteredProducts.sort((a, b) => parseFloat(a.gia) - parseFloat(b.gia));
    } else if (sortBy === "gia-desc") {
      filteredProducts = filteredProducts.sort((a, b) => parseFloat(b.gia) - parseFloat(a.gia));
    }
    return filteredProducts;
  };
  const handleInput = (values) => {
    setValue({
      minValue: values.minValue,
      maxValue: values.maxValue
    });
  };
  const HandleShow = (item, index) => {
    onData(item, index)
    window.scrollTo(0, 0)
  }
  const product = checkProduct().map((item, index) => (
    <Link to={'/ctsp1'} key={item.id} onClick={() => HandleShow(item, index)} >
      <div className="card">
        <p className="icon">
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          (17)
        </p>
        <h4>New</h4>
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{item.tensp}</p>
          <p className="card-text2">
            {item.gia}
            <sub>VND</sub>
            <select>
              <option value="">200g</option>
              <option value="">300g</option>
              <option value="">400g</option>
              <option value="">700g</option>
            </select>
          </p>
        </div>
      </div>
    </Link>
  ));
  return (
    <>
      <div className='product-intro'>
        <div className="banner">
          <img src="Pictures/san-pham/banner.png" alt="" />
          <h1>SẢN PHẨM</h1>
        </div>
        <div className="main">
          <div className="main-title">
            <p>
              <Link to={'/'}>Trang chủ &gt; </Link>
              <Link to={'/sanpham'}>Sản phẩm</Link>
            </p>
            <h3>SẢN PHẨM</h3>
          </div>
          <hr />
          <div className="sort">
            <select value={sortBy} onChange={handleSortChange}>
              <option value="">Thứ tự mặc định</option>
              <option value="gia-asc">Giá thấp đến cao</option>
              <option value="gia-desc">Giá cao đến thấp</option>
            </select>
          </div>

          <div className="product">
            <div className="categore">
              <h6>bộ lọc sản phẩm</h6>
              <h4>Loại sản phẩm</h4>
              <div>
                <input
                  type="checkbox"
                  id="traxanh"
                  checked={filterTraxanh}
                  onChange={() => setFilterTraxanh(!filterTraxanh)}
                />
                <label htmlFor="traxanh">Trà</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="olong"
                  checked={filterOlong}
                  onChange={() => setFilterOlong(!filterOlong)}
                />
                <label htmlFor="olong">Tinh dầu</label>
              </div>
              <h4>Giá thành</h4>
              <div className="input">
                <MultiRangeSlider
                  min={0}
                  max={1000}
                  step={5}
                  minValue={value.minValue}
                  maxValue={value.maxValue}
                  onInput={handleInput}

                />
                <p>giá {value.minValue} - {value.maxValue}</p>
              </div>
            </div>
            <div className="product-list">
              {product}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sanpham;
