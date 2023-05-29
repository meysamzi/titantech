import React from 'react'
// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import Slider from "react-slick";

import ProductCard from '../components/ProductCard';
import Discounted_products from '../components/Discounted_products';
import pic1 from '../assets/images/product/banner/1.jpg'
import pic2 from '../assets/images/product/banner/2.jpg'
import pic3 from '../assets/images/product/banner/3.jpg'
import pic4 from '../assets/images/product/banner/4.jpg'





function Home() {


  return (
    <>
      <main className='py-5'>
        <div className='py-5 mt-5'>


          {/* Start section banner 1 - No Custom Css - */}
          <section className="home-wrapper-1 py-5 my-2">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-12 ">
                  <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">
                    <SwiperSlide><img src={pic1} className='img-fluid rounded-3' alt="banner-titan" /></SwiperSlide>
                    <SwiperSlide><img src={pic2} className='img-fluid rounded-3' alt="banner-titan" /></SwiperSlide>
                    <SwiperSlide><img src={pic3} className='img-fluid rounded-3' alt="banner-titan" /></SwiperSlide>
                    <SwiperSlide><img src={pic4} className='img-fluid rounded-3' alt="banner-titan" /></SwiperSlide>
                  </Swiper>
                </div>
                {/* <div className="col-12 col-lg-4">
                  <div className="row ">
                    <div className="col-12  mb-3"><img src="assets/images/product/banner/asusM.jpg" className='img-fluid rounded-3' alt="banner-titan" /></div>
                  </div>
                  <div className="row">
                    <div className="col-12  mb-3"><img src="assets/images/product/banner/asusM.jpg" className='img-fluid rounded-3' alt="banner-titan" /></div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
          {/* End section banner 1 */}



          {/* Start section banner 1 - No Custom Css - */}
          <section className="home-wrapper-1 py-5 my-2">
            <div className="container-xl ">
              <div className="row p-3 p-lg-0">
                <div className="col-12 col-lg-8 ">

                </div>
                <div className="col-12 col-lg-4">

                </div>
              </div>
            </div>
          </section>
          {/* End section banner 1 */}




          {/* Start section banner 2 */}
          <section className="color-wrapper  py-5 my-2">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12 ">
                  <div className="servies d-flex flex-wrap align-items-center justify-content-between">
                    <div className='col-12 col-sm-6 p-3 p-lg-0 col-md-4 col-lg-2 mb-2 mb-lg-0  d-flex align-items-center gap-10'>
                      <img src="assets/images/icon/service.png" alt="service" />
                      <div>
                        <h6>حمل و نقل رایگان</h6>
                        <p>تمام سفارشات بالای 5 ملیون تومان</p>
                      </div>
                    </div>
                    <div className='col-12 col-sm-6 p-3 p-lg-0 col-md-4 col-lg-2 mb-2 mb-lg-0   d-flex align-items-center gap-10'>
                      <img src="assets/images/icon/service-02.png" alt="service" />
                      <div>
                        <h6>پیشنهادات سورپرایز روزانه</h6>
                        <p className='mb-0'>تا 25% تخفیف </p>
                      </div>
                    </div>
                    <div className='col-12 col-sm-6 p-3 p-lg-0 col-md-4 col-lg-2 mb-2 mb-lg-0   d-flex align-items-center gap-10'>
                      <img src="assets/images/icon/service-03.png" alt="service" />
                      <div>
                        <h6>مشاوره مطمئن </h6>
                        <p className='mb-0'>با کارشناسان فروش</p>
                      </div>
                    </div>
                    <div className='col-12 col-sm-6 p-3 p-lg-0 col-md-4 col-lg-2 mb-2 mb-lg-0   d-flex align-items-center gap-10'>
                      <img src="assets/images/icon/service-04.png" alt="service" />
                      <div>
                        <h6>بهترین قیمت </h6>
                        <p className='mb-0'>کمترین قیمت بازار</p>
                      </div>
                    </div>
                    <div className='col-12 col-sm-6 p-3 p-lg-0 col-md-4 col-lg-2 mb-2 mb-lg-0   d-flex align-items-center gap-10'>
                      <img src="assets/images/icon/service-05.png" alt="service" />
                      <div >
                        <h6>پرداخت های امن</h6>
                        <p className='mb-0'>پرداخت 100٪ محافظت شده</p>
                      </div>
                    </div>
                    <div className='d-block d-lg-none col-12 col-sm-6 p-3 p-lg-0 col-md-4 col-lg-2 mb-2 mb-lg-0   d-flex align-items-center gap-10'>
                      <img src="assets/images/icon/service-05.png" alt="service" />
                      <div >
                        <h6>پرداخت های امن</h6>
                        <p className='mb-0'>پرداخت 100٪ محافظت شده</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
          {/* End section banner 25 */}





          {/* <!-- ======= featured-wrapper Section ======= --> */}

          <section className="featured-wrapper color-wrapper py-5 my-2">
            <div className="container-xxl rounded style-sec">
              <div className="row">
                <div className="col-12">
                  <h4 className=''>محصولات پر فروش</h4>
                </div>
                <div className="row py-5">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>

              </div>
            </div>
          </section>
          {/* <!-- End featured-wrapper --> */}






          {/* <!-- ======= Product Section ======= --> */}
          <section className="popular-wrapper color-wrapper py-5 my-2">
            <div className="container-xxl rounded style-sec">
              <div className="row">
                <div className="col-12">
                  <h4>محصولات محبوب </h4>
                </div>
                <div className="row py-5">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End Product Section --> */}




          {/* <!-- ======= Product2 Section ======= --> */}
          <section className="special-wrapper py-5 color-wrapper">
            <div className="container-xxl rounded style-sec">
              <div className="row">
                <div className="col-12">
                  <h4 className="section-heading">
                    محصولات اخیر
                  </h4>
                </div>
              </div>
              <div className="row">
                <Discounted_products />
                <Discounted_products />
                <Discounted_products />

              </div>
            </div>
          </section>
          {/* <!-- End Product2 Section --> */}



        </div>
      </main>

    </>
  )
}

export default Home


// https://react-slick.neostack.com/docs/example/responsive