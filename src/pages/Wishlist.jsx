import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'



const Wishlist = () => {
    return (
        <>
            <Meta title={'  محصولات مورده علاقه'} />
            <BreadCrumb title=" محصولات مورده علاقه " />

            <div className="wishlist-wrapper  py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3  p-3 p-lg-2 ">
                            <div className="wishlist-card position-relative style-sec">
                                <img src="assets/images/icon/cross.svg" alt="cross" className="position-absolute img-fluid cross " />
                                <div className="wishlist-card-image">
                                    <img className='img-fluid my-2  rounded ' src="assets/images/product/vga.jpg" alt="" />
                                    <div className="p-3">
                                        <h5 className="title pt-3">کارت گرافیک ایسوس</h5>
                                        <h6 className="price">1.2000 تومان</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3  p-3 p-lg-2 ">
                            <div className="wishlist-card position-relative style-sec">
                                <img src="assets/images/icon/cross.svg" alt="cross" className="position-absolute img-fluid cross " />
                                <div className="wishlist-card-image">
                                    <img className='img-fluid my-2  rounded ' src="assets/images/product/vga.jpg" alt="" />
                                    <div className="p-3">
                                        <h5 className="title pt-3">کارت گرافیک ایسوس</h5>
                                        <h6 className="price">1.2000 تومان</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3  p-3 p-lg-2 ">
                            <div className="wishlist-card position-relative style-sec ">
                                <img src="assets/images/icon/cross.svg" alt="cross" className="position-absolute img-fluid cross " />
                                <div className="wishlist-card-image">
                                    <img className='img-fluid my-2  rounded ' src="assets/images/product/vga.jpg" alt="" />
                                    <div className="p-3">
                                        <h5 className="title pt-3">کارت گرافیک ایسوس</h5>
                                        <h6 className="price">1.2000 تومان</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist