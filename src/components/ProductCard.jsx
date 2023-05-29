import React from 'react'
import ReactStars from "react-rating-stars-component"
import { NavLink, Link, useLocation } from 'react-router-dom'




const ProductCard = () => {

  return (
    <>
      <div className='col-12 col-sm-6 col-lg-4 col-xxl-3 p-2'>
        <Link to='' className="product-card position-relative ">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="assets/images/icon/wish.svg" alt="wishlist" /></Link>
          </div>
          <div className="product-image px-4 ">
            <img src="assets/images/product/banner/motherBoardAsus.jpg" className='img-fluid rounded img1' alt="product-img" />
            <img src="assets/images/product/banner/asusM.jpg" className='img-fluid rounded img2' alt="product-img" />
          </div>
          <div className="product-details pt-4">
            <h6 className='brand'>کارت گرافیک </h6>
            <h5 className="product-title">
              کارت گرافیک ایسوس
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              activeColor="#ffd700" />
            <p className="price">4.500 ت </p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-10">
              <Link>
                <img src="assets/images/icon/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="assets/images/icon/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="assets/images/icon/add-cart.svg" alt="addcard" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>

  )
}

export default ProductCard