import React from 'react'
import ReactStars from "react-rating-stars-component"
import { NavLink, Link, useLocation } from 'react-router-dom'

// icons
import prodcompare from '../assets/images/icon/prodcompare.svg'
import view from '../assets/images/icon/view.svg'
import addCart from '../assets/images/icon/add-cart.svg'
import wish from '../assets/images/icon/wish.svg'


// images

import MDAsus from '../assets/images/product/banner/motherBoardAsus.jpg'
import asus1 from '../assets/images/product/banner/asusM.jpg'



const ProductCard = () => {

  return (
    <>
      <div className='col-12 col-sm-6 col-lg-3  p-2'>  
        <Link to='' className="product-card position-relative ">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wishlist" /></Link>
          </div>
          <div className="product-image px-4 ">
            <img src={MDAsus} className='img-fluid rounded img1' alt="product-img" />
            <img src={asus1} className='img-fluid rounded img2' alt="product-img" />
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
                <img src={prodcompare} alt="compare" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={addCart} alt="addcard" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>

  )
}

export default ProductCard