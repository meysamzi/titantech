import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from './Context'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";

function Details() {
    const { id } = useParams();
    const value = useContext(DataContext);
    const [products, setProducts] = value.products;
    const [index, setIndex] = useState(0);

    const details = products.filter((product, index) => {
        return product._id === id;
    })

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>

            <div className="conatiner-xxl py-5">
                <div className="row p-0 m-0 justify-content-center  ">
                    {
                        details.map(product => (

                            <div className="row col-8 style-sec " key={product._id}>


                                <div className="col-5">
                                    {
                                        details.map(product => (
                                            <div className="row">
                                                <Swiper
                                                    style={{
                                                        "--swiper-navigation-color": "#fff",
                                                        "--swiper-pagination-color": "#fff",
                                                    }}
                                                    spaceBetween={10}
                                                    navigation={true}
                                                    thumbs={{ swiper: thumbsSwiper }}
                                                    modules={[FreeMode, Navigation, Thumbs]}
                                                    className="mySwiper2 col-12 wImg"
                                                >
                                                    <SwiperSlide>
                                                        <img src={product.images[index]} className='img-fluid' />
                                                    </SwiperSlide>

                                                </Swiper>
                                                <Swiper
                                                    onSwiper={setThumbsSwiper}
                                                    spaceBetween={10}
                                                    slidesPerView={4}
                                                    freeMode={true}
                                                    watchSlidesProgress={true}
                                                    modules={[FreeMode, Navigation, Thumbs]}
                                                    className="mySwiper pt-2"
                                                >
                                                    {
                                                        product.images.map((img, index) => (
                                                            <SwiperSlide className='border'>
                                                                <img src={img} key={index} className='thumImg' onClick={() => setIndex(index)} alt="" />
                                                            </SwiperSlide>

                                                        ))
                                                    }

                                                </Swiper>
                                            </div>

                                        ))
                                    }
                                </div>
                                <div className="col-4">
                                    <div className="box-details">
                                        <h2>{product.title}</h2>
                                        <h3>{product.price}</h3>
                                        <p>{product.desription}</p>
                                        <p>{product.content}</p>
                                        <button className="btn btn-primary ">افزودن به سبد خرید</button>
                                    </div>
                                </div>
                            </div>


                        ))

                    }
                </div>

                <div className="row col-3 ">
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2 col-12 wImg"
                    >
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper pt-2"
                    >
                        <SwiperSlide className='border '>
                            <img className='thumImg' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className='border '>
                            <img className='thumImg' src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className='border '>
                            <img className='thumImg' src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className='border '>
                            <img className='thumImg' src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        </SwiperSlide>

                    </Swiper>
                </div>
                </div>

        </>
    )
}

export default Details