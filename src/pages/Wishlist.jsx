import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

// images
import cross from '../assets/images/icon/cross.svg'
import vga1 from '../assets/images/product/wishlist/vga.jpg'
import mdAsus1 from '../assets/images/product/wishlist/motherboardAsus1.jpg'
import pwAsus1 from '../assets/images/product/wishlist/powerAsus1.jpg'
import cpuInteli7 from '../assets/images/product/wishlist/cpui7.png'
import cpuInteli5 from '../assets/images/product/wishlist/cpuCoreI5.png'
import ramCorsair from '../assets/images/product/wishlist/ramCorsair.jpg'
import motherBoardTuf from '../assets/images/product/wishlist/motherboardTuf.jpg'
import vgaa from '../assets/images/product/wishlist/vgaa.jpg'






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
                                <img src={cross} alt="cross" className="position-absolute img-fluid cross" />
                                <div className="wishlist-card-image">
                                    <img className='img-fluid my-2  rounded ' src={vga1} alt="GraphicCrad Asus" />
                                    <div>
                                        <h5 className="title pt-3">کارت گرافیک ایسوس</h5>
                                        <h6 className="price">1.2000 تومان</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3  p-3 p-lg-2 ">
                            <div className="wishlist-card position-relative style-sec">
                                <img src={cross} alt="cross" className="position-absolute img-fluid cross" />
                                <div className="wishlist-card-image">
                                    <img className='img-fluid my-2  rounded ' src={mdAsus1} alt="motherboard Asus" />
                                    <div>
                                        <h5 className="title pt-3"> مادربرد ایسوس</h5>
                                        <h6 className="price">1.2000 تومان</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3  p-3 p-lg-2 ">
                            <div className="wishlist-card position-relative style-sec ">
                                <img src={cross} alt="cross" className="position-absolute img-fluid cross" />
                                <div className="wishlist-card-image">
                                    <img className='img-fluid my-2  rounded ' src={pwAsus1} alt="powerSupply Asus" />
                                    <div>
                                        <h5 className="title pt-3"> منبع تغذیه ایسوس</h5>
                                        <h6 className="price">1.2000 تومان</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3  p-3 p-lg-2 ">
                            <div className="wishlist-card position-relative style-sec ">
                                <img src={cross} alt="cross" className="position-absolute img-fluid cross" />
                                <div className="wishlist-card-image">
                                    <img className='img-fluid my-2  rounded ' src={cpuInteli7} alt="powerSupply Asus" />
                                    <div>
                                        <h5 className="title pt-3">سی پی یو اینتل i7</h5>
                                        <h6 className="price">1.2000 تومان</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3  p-3 p-lg-2 ">
                            <div className="wishlist-card position-relative style-sec ">
                                <img src={cross} alt="cross" className="position-absolute img-fluid cross" />
                                <div className="wishlist-card-image">
                                    <img className='img-fluid my-2  rounded ' src={cpuInteli5} alt="cpu intel i5" />
                                    <div>
                                        <h5 className="title pt-3">سی پی یو اینتل i5</h5>
                                        <h6 className="price">1.2000 تومان</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3  p-3 p-lg-2 ">
                            <div className="wishlist-card position-relative style-sec ">
                                <img src={cross} alt="cross" className="position-absolute img-fluid cross" />
                                <div className="wishlist-card-image">
                                    <img className='img-fluid my-2  rounded ' src={ramCorsair} alt="ram Corsair" />
                                    <div>
                                        <h5 className="title pt-3">رم  </h5>
                                        <h6 className="price">1.2000 تومان</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3  p-3 p-lg-2 ">
                            <div className="wishlist-card position-relative style-sec ">
                                <img src={cross} alt="cross" className="position-absolute img-fluid cross" />
                                <div className="wishlist-card-image">
                                    <img className='img-fluid my-2  rounded ' src={motherBoardTuf} alt="motherboard Tuf" />
                                    <div>
                                        <h5 className="title pt-3"> مادربرد </h5>
                                        <h6 className="price">1.2000 تومان</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3  p-3 p-lg-2 ">
                            <div className="wishlist-card position-relative style-sec ">
                                <img src={cross} alt="cross" className="position-absolute img-fluid cross" />
                                <div className="wishlist-card-image">
                                    <img className='img-fluid my-2  rounded ' src={vgaa} alt="Graphic card" />
                                    <div>
                                        <h5 className="title pt-3">کارت گرافیک</h5>
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