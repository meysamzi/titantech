import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { NavLink, Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component"
import asus from '../assets/images/product/banner/vga.png'


const Singleproduct = () => {
    return (
        <>
            <Meta title={' مشخصات محصول'} />
            <BreadCrumb title="مشخصات محصول " />


            <div className="main-product-wrapper py-5 color-wrapper">
                <div className="container-xxl ">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <div><img src={asus} className='img-fluid' alt="" /></div>

                                </div>
                            </div>

                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div><img src={asus} className='img-fluid' alt="" /></div>
                                <div><img src={asus} className='img-fluid' alt="" /></div>
                                <div><img src={asus} className='img-fluid' alt="" /></div>
                                <div><img src={asus} className='img-fluid' alt="" /></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3 className='title'>کارت گرافیک ایسوس</h3>
                                </div>
                                <div className="border-bottom mt-3">
                                    <p className="price">15.400.000 تومان</p>
                                    <div className="d-flex align-items-center gap-10 ">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            activeColor="#ffd700" />
                                    </div>
                                    <a href=""></a>
                                </div>

                                <div className="border-bottom ">
                                    <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                                        <h6 className="product-heading  ">تعداد:</h6>
                                        <div className="">
                                            <input className='form-control' type="number" name='' min={1} max={10} style={{ 'width': '70px' }} />
                                        </div>
                                        <div className='d-flex align-items-center gap-30 ms-5'>
                                            <button className='button border-0 ' type='submit'>افزودن به سبد خرید</button>
                                            <button className='button text-white signup ms-3 border-0'> خرید </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="description-wrapper py-5 color-wrapper">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className='bg-white p-3'>
                                <h4>description</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quam corrupti a omnis, obcaecati deserunt consequuntur, molestiae aliquid nisi porro unde quasi eligendi. Laudantium, eos. Eaque enim deserunt fugiat voluptates!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="popular-wrapper color-wrapper py-5 my-2">
                <div className="container-xxl rounded style-sec">
                    <div className="row">
                        <div className="col-12">
                            <h4>محصولات محبوب </h4>
                        </div>
                        <div className="row">
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Singleproduct