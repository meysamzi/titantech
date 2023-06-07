import React from 'react'
import ReactStars from "react-rating-stars-component"
import { NavLink, Link } from 'react-router-dom'

import labtopRog from '../assets/images/product/banner/labtopROG4.jpg'

function Discounted_products() {
  return (
    <div className='col-12 col-lg-4 my-3 '>
      <div className="discounted-products-card">
        <div className="d-flex flex-wrap justify-content-between p-2 p-lg-0">
          <div className='col-12 col-lg-6'>
            <img src={labtopRog} className='img-fluid rounded-3' alt="" />
          </div>
          <div className="col-12 col-lg-5 pt-3 pt-lg-0 discounted-products-content">
            <h5 className="brand">ایسوس</h5>
            <h6 className="title">مادربرد ایسوس</h6>
            <ReactStars
              count={5}
              size={24}
              value={3}
              activeColor="#ffd700" />
            <p className="price"><strike> 500ت  </strike> <span className="red-p ps-2"> 200ت </span></p>
            <div className="discount-till d-flex flex-wrap align-items-center gap-10">
              <p className='mb-0'>
                <b>5 </b>روز  
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">1</span> :
                <span className="badge rounded-circle p-3 bg-danger">1</span> :
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
              <div className="prod-count my-3">
                <p>محصولات : 5 </p>
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar" style={{ width: "25%" }} ></div>
                </div>
              </div>
              <Link className='btn  btn-outline-primary btn-card py-2' >افزودن به سبد خرید </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discounted_products