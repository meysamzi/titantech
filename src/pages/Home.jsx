import React from 'react'
import ProductCard from '../components/ProductCard';
import Discounted_products from '../components/Discounted_products';
import banner1 from '../assets/images/product/banner/banner1.jpg'
import banner2 from '../assets/images/product/banner/banner2.jpg'
import banner3 from '../assets/images/product/banner/banner3.jpg'
import banner4 from '../assets/images/product/banner/banner4.jpg'
import Asus from '../assets/images/brand/ASUS.png'
import CoolerMaster from '../assets/images/brand/Cooler_Master.png'
import GSKILL from '../assets/images/brand/G.SKILL_.png'
import Kingston from '../assets/images/brand/Kingston.png'
import PNY from '../assets/images/brand/PNY.png'
import WD from '../assets/images/brand/Western_Digital.png'
import corsair from '../assets/images/brand/corsair.png'
import intel from '../assets/images/brand/intel.png'
import lexar from '../assets/images/brand/lexar.png'
import samsung from '../assets/images/brand/samsung.jpg'



import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";



function Home() {


    return (
        <>
            <main className='py-5'>
                <div className='py-2'>

                    <section className="">
                        <div className="container-fluid ">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                    <Swiper
                                        spaceBetween={30}
                                        // centeredSlides={true}
                                        autoplay={{
                                            delay: 3500,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper banner_swiper bdrs20 col-11 col-lg-10"
                                    >
                                        <SwiperSlide><img src={banner1} className='img-fluid' alt="" /></SwiperSlide>
                                        <SwiperSlide><img src={banner2} className='img-fluid' alt="" /></SwiperSlide>
                                        <SwiperSlide><img src={banner3} className='img-fluid' alt="" /></SwiperSlide>
                                        <SwiperSlide><img src={banner4} className='img-fluid' alt="" /></SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Start section*/}
                    <section className="py-5 my-2">
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
                    {/* End section */}





                    {/* <!-- ======= featured-wrapper Section ======= --> */}

                    <section className="featured-wrapper  py-5 my-2">
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


                    {/* Start section banner 2 */}
                    <section className="py-5 my-2 sec_brand">
                        <div className="container-xxl">
                            <div className="row">
                                <div className="col-12 ">
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={10}
                                        centeredSlides={true}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        breakpoints={{
                                            640: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                            },
                                            768: {
                                                slidesPerView: 4,
                                                spaceBetween: 40,
                                            },
                                            1024: {
                                                slidesPerView: 5,
                                                spaceBetween: 50,
                                            },
                                        }}
                                        modules={[Pagination]}
                                        className="mySwiper "
                                    >

                                        <SwiperSlide><img className='img-fluid brand-swiper' src={Asus} alt="" /></SwiperSlide>
                                        <SwiperSlide><img className='img-fluid brand-swiper' src={CoolerMaster} alt="" /></SwiperSlide>
                                        <SwiperSlide><img className='img-fluid brand-swiper' src={GSKILL} alt="" /></SwiperSlide>
                                        <SwiperSlide><img className='img-fluid brand-swiper' src={Kingston} alt="" /></SwiperSlide>
                                        <SwiperSlide><img className='img-fluid brand-swiper' src={PNY} alt="" /></SwiperSlide>
                                        <SwiperSlide><img className='img-fluid brand-swiper' src={WD} alt="" /></SwiperSlide>
                                        <SwiperSlide><img className='img-fluid brand-swiper' src={corsair} alt="" /></SwiperSlide>
                                        <SwiperSlide><img className='img-fluid brand-swiper' src={intel} alt="" /></SwiperSlide>
                                        <SwiperSlide><img className='img-fluid brand-swiper' src={lexar} alt="" /></SwiperSlide>
                                        <SwiperSlide><img className='img-fluid brand-swiper' src={samsung} alt="" /></SwiperSlide>

                                    </Swiper>
                                </div>
                            </div>
                        </div>

                    </section>
                    {/* End section banner 25 */}

                    {/* <!-- ======= Product Section ======= --> */}
                    <section className="popular-wrapper  py-5 my-2">
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