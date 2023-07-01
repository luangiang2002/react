import React from 'react'
import '../css/tintuc.css'
function Tintuc() {
  return (
    <div>
     <section className="news ">
        <div className="main">
          <h1>TIN TỨC</h1>
          <div className="product">
            <div className="card">
              <img
                src="Pictures/tin-tuc/TINTUC_01.jpg"
                alt="tintuc"
                className="card-img-top"
              />
              <div className="card-body">
                <p className="cart-text">
                  Văn hóa uống trà của người Việt, câu chuyện xưa và nay
                </p>
                <p className="cart-text2">
                  Trà xanh thái nguyên được phổ biến là một thức uống dân dã, quen
                  thuộc từ bao đời nay. Cây chè xuất hiện chủ yếu ở các tỉnh Thái
                  Nguyên, Phú Thọ, Yên Bái, Lâm Đồng… là nguồn gốc cho ra những sản
                  phẩm chè có chất lượng cao.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src="Pictures/tin-tuc/TINTUC_02-05.jpg"
                alt="tintuc"
                className="card-img-top"
              />
              <div className="card-body">
                <p className="cart-text">Trà xanh Thái Nguyên ướp hoa nhài</p>
                <p className="cart-text2">
                  Ở Việt Nam có rất nhiều nơi trồng hoa nhài, đây là loại hoa nở tới
                  6 tháng/năm nên hoa nhài tự nhiên được sử dụng để ướp trà rất
                  nhiều, và trà ướp với hoa nhài giá thành rẻ hơn nhiều so với trà
                  ướp bông sen Tây Hồ.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src="Pictures/tin-tuc/TINTUC_03.jpg"
                alt="tintuc"
                className="card-img-top"
              />
              <div className="card-body">
                <p className="cart-text">
                  Cách bảo quản trà Shan Tuyết để giữ được hương thơm
                </p>
                <p className="cart-text2">
                  Chè là loại thức uống dễ mất hương và vị nhất, cũng dễ hút những
                  mùi hương khác lạ khiến chè mất dần đi mùi vị ban đầu. Bảo quản
                  chè là việc hết sức quan trọng mà mỗi người uống chè đều phải
                  biết.
                </p>
              </div>
            </div>
           
          </div>
          <nav aria-label="Page navigation example" className="page">
            <ul className="pagination">
              {/* <li class="page-item">
                    <a class="page-link" href="/#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li> */}
              <li className="page-item">
                <a className="page-link" href="/#">
                  1
                </a>
             </li>
              <li className="page-item">
                <a className="page-link" href="/#" aria-label="Next">
                  <span aria-hidden="true">&gt;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  )
}

export default Tintuc