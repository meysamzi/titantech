import React from 'react'
import ProductCard from '../components/ProductCard';
import Discounted_products from '../components/Discounted_products';
import Container from '../components/Container'

// images
import banner1 from '../assets/images/product/banner/banner1.jpg'
import banner2 from '../assets/images/product/banner/banner2.jpg'
import banner3 from '../assets/images/product/banner/banner3.jpg'
import banner4 from '../assets/images/product/banner/banner4.jpg'

import bannerf1 from '../assets/images/product/banner/bannerf1.webp'
import bannerf2 from '../assets/images/product/banner/bannerf2.webp'
import bannerf3 from '../assets/images/product/banner/bannerf3.webp'
import bannerf4 from '../assets/images/product/banner/bannerf4.webp'
import bannerf5 from '../assets/images/product/banner/bannerf5.webp'
import bannerf6 from '../assets/images/product/banner/bannerf6.webp'
import bannerf7 from '../assets/images/product/banner/bannerf7.webp'
import bannerf8 from '../assets/images/product/banner/bannerf8.webp'

import bannerl1 from '../assets/images/product/banner/bannerl1.webp'
import bannerl2 from '../assets/images/product/banner/bannerl2.webp'


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



                    {/* <!-- ======= Start Banner Slider  ======= --> */}
                    <Container class1=''>
                        <div className="row">
                            <div className="row col-12 hm1 p-0 m-0">
                                <div className="col-12 col-lg-9 ">
                                    <Swiper
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper bdrs20 mb-5 mb-lg-0"
                                    >
                                        <SwiperSlide> <img src={bannerf1} className='img-fluid rounded' alt="" /></SwiperSlide>
                                        <SwiperSlide> <img src={bannerf2} className='img-fluid rounded' alt="" /></SwiperSlide>
                                        <SwiperSlide> <img src={bannerf3} className='img-fluid rounded' alt="" /></SwiperSlide>
                                        <SwiperSlide> <img src={bannerf4} className='img-fluid rounded' alt="" /></SwiperSlide>
                                        <SwiperSlide> <img src={bannerf5} className='img-fluid rounded' alt="" /></SwiperSlide>
                                        <SwiperSlide> <img src={bannerf6} className='img-fluid rounded' alt="" /></SwiperSlide>
                                        <SwiperSlide> <img src={bannerf7} className='img-fluid rounded' alt="" /></SwiperSlide>
                                        <SwiperSlide> <img src={bannerf8} className='img-fluid rounded' alt="" /></SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="col-12 col-lg-3 bdrs20 h-100 d-flex flex-wrap justify-content-center">
                                    <img src={bannerl1} className='col-lg-12 img-fluid bdrs20 h-50 mb-4 p-2 p-md-0' alt="" />
                                    <img src={bannerl2} className='col-lg-12 img-fluid bdrs20 h-50 p-2 p-md-0' alt="" />
                                </div>
                            </div>
                        </div>
                    </Container>
                    {/* <!-- ======= End Banner Slider  ======= --> */}



                    {/* <!-- ======= Start Service  ======= --> */}
                    <Container class1='pt-5 mt-5 mt-md-0'>
                        <section className="py-5 py-lg-0 my-5 my-lg-0 pb-0">
                            <div className="row">
                                <div className="col-12 py-5 my-sm-5 my-lg-0 ">
                                    <div className="servies d-flex flex-wrap align-items-center justify-content-between py-sm-5 py-lg-0">
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

                        </section>
                    </Container>
                    {/* <!-- ======= End Service  ======= --> */}



                    {/* <!-- ======= Start Section Best-selling products  ======= --> */}
                    <Container class1=''>
                        <div className="row rounded style-sec">
                            <div className="col-12">
                                <h4 className=''>محصولات پر فروش</h4>
                            </div>
                            <div className="row m-0 p-0">
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                            </div>

                        </div>
                    </Container>
                    {/* <!-- ======= Start Section Best-selling products  ======= --> */}



                    {/* <!-- ======= Start Section Slider Logo Brand ======= --> */}
                    <Container class1=''>
                                <div className="row sec_brand">
                                    <div className="col-12 ">
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={10}
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
                                            className="mySwiper"
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
                    </Container>
                    {/* <!-- ======= Start Section Slider Logo Brand ======= --> */}


                    {/* <!-- ======= Start Section Popular products  ======= --> */}
                    <Container class1=''>
                        <div className="row rounded style-sec">
                            <div className="col-12">
                                <h4>محصولات محبوب </h4>
                            </div>
                            <div className="row py-5 m-0 p-0">
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                            </div>
                        </div>
                    </Container>
                    {/* <!-- ======= End Section Popular products  ======= --> */}



                    {/* <!-- ======= Start Banner Slider  ======= --> */}
                    <Container class1=''>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center">
                                <Swiper
                                    spaceBetween={30}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper banner_swiper bdrs20 col-12 "
                                >
                                    <SwiperSlide><img src={banner1} className='img-fluid' alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={banner2} className='img-fluid' alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={banner3} className='img-fluid' alt="" /></SwiperSlide>
                                    <SwiperSlide><img src={banner4} className='img-fluid' alt="" /></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </Container>
                    {/* <!-- ======= End Banner Slider  ======= --> */}


                    {/* <!-- ======= Product2 Section ======= --> */}
                    <Container class1=''>
                        <div className="row rounded style-sec">
                            <div className="col-12">
                                <h4 className="section-heading">
                                    محصولات فروش ویژه
                                </h4>
                            </div>
                            <Discounted_products />
                            <Discounted_products />
                            <Discounted_products />
                        </div>
                    </Container>
                    {/* <!-- End Product2 Section --> */}

                </div>
            </main>
        </>
    )
}

export default Home


// https://react-slick.neostack.com/docs/example/responsive