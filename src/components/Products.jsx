import React, { useContext } from 'react'
import { DataContext } from './Context'
import { Link } from 'react-router-dom';
import formatCurrency from './Util';

// icons
import prodcompare from '../assets/images/icon/prodcompare.svg'
import view from '../assets/images/icon/view.svg'
import addCartt from '../assets/images/icon/add-cart.svg'
import wish from '../assets/images/icon/wish.svg'
import ReactStars from "react-rating-stars-component"

import po from '../assets/images/product/wishlist/po.jpg'


function Products() {
    const value = useContext(DataContext);
    const [products, setProducts] = value.products;
    const addCart = value.addCart;
    // box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);

    return (

        <>

            <div className="container-fluid bg-sec products-wrapper">
                <div className="row pt-5">
                    <div className="col-12 d-flex justify-content-center py-3 bg-white">
                        <h2>محصولات</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card card-product ">
                                <div className="card-image">
                                    <a href="">
                                        <img className='img' src={po} alt="" />
                                    </a>
                                </div>
                                <div className="table">
                                    <h6 className="category  text-center">کارت گرافیک</h6>
                                    <h5 className='card-caption text-center'>
                                        <a href="">کارت گرافیک ایسوس</a>
                                    </h5>
                                    <div className="card-description text-center">
                                        Lorem ipsum dolor sit amet, consectetur adipis cingelit. Etiam lacinia elit...
                                    </div>
                                    <div className="ftr">
                                        <div className="price">
                                            <h6>12.200.000 تومان</h6>
                                        </div>
                                        <div className="stats">
                                            <button type="button" rel="tooltip" title="" class="btn btn-just-icon btn-simple btn-warning p-0 border-0" data-original-title="Saved to Wishlist">
                                                <span class="bi bi-cart"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>




            <div className="container-fluid">
                <div className="row rounded style-sec">
                    {
                        products.map(product => (

                            <div className='col-12 col-sm-6 col-md-4 col-xxl-3  p-2 '>
                                <Link to='' className="product-card position-relative shadow" key={product._id}>
                                    <div className="wishlist-icon position-absolute">
                                        <Link><img src={wish} alt="wishlist" /></Link>
                                    </div>
                                    <Link to={`/products/${product._id}`} className="product-image pt-3 d-flex justify-content-center ">
                                        <img src={product.images[0]} className='img-fluid rounded img1 pimg' alt="product-img" />
                                        <img src={product.images[1]} className='img-fluid rounded img2 pimg' alt="product-img" />
                                    </Link>
                                    <div className="row product-details pt-4">
                                        <h6 className='brand'> <Link to={`/products/${product._id}`}>{product.title}</Link> </h6>
                                        <h5 className="product-title">
                                            {product.description}
                                        </h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            activeColor="#ffd700" />
                                        {/* <p className="price">{product.price} </p> */}
                                        <p className="price">{formatCurrency(product.price)} </p>

                                        <button className="btn btn-primary" onClick={() => addCart(product._id)}>افزودن به سبد خرید</button>
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
                                                <img src={addCartt} alt="addcard" />
                                            </Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>


    )
}

export default Products