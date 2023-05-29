import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const CompareProduct = () => {
    return (
        <>
            <Meta title={' مقایسه محصولات'} />
            <BreadCrumb title="مقایسه محصولات " />
            <div className="compare-product-wrapper  py-5">
                <div className="container-xxl">
                    <div className="row" >
                        <div className="col-12 col-sm-6 col-lg-3 p-3 p-lg-2 ">
                            <div className="compare-product-card position-relative style-sec">
                                <img src="assets/images/icon/cross.svg" alt="cross" className="position-absolute img-fluid cross" />
                                <div className="product-card-image">
                                    <img className='img-fluid rounded' src="assets/images/product/banner/motherBoardAsus.jpg" alt="" />
                                </div>
                                <div className="compare-product-details pt-3">
                                    <h5 className="title">مادربرد ایسوس</h5>
                                    <h6 className="price mb-3">1.200.00تومان</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>برند : </h5>
                                            <p>ایسوس</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>نوع کالا : </h5>
                                            <p>ایسوس</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>مدل کالا : </h5>
                                            <p>ایسوس</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 p-3 p-lg-2  ">
                            <div className="compare-product-card position-relative style-sec">
                                <img src="assets/images/icon/cross.svg" alt="cross" className="position-absolute img-fluid cross" />
                                <div className="product-card-image">
                                    <img className='img-fluid rounded' src="assets/images/product/banner/motherBoardAsus.jpg" alt="" />
                                </div>
                                <div className="compare-product-details pt-3">
                                    <h5 className="title">مادربرد ایسوس</h5>
                                    <h6 className="price mb-3">1.200.00تومان</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>برند : </h5>
                                            <p>ایسوس</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>نوع کالا : </h5>
                                            <p>ایسوس</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>مدل کالا : </h5>
                                            <p>ایسوس</p>
                                        </div>
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

export default CompareProduct