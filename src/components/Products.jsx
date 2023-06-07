import React, { useContext } from 'react'
import { DataContext } from './Context'
import { Link } from 'react-router-dom';
// import formatCurrency from './Util';

// icons
import prodcompare from '../assets/images/icon/prodcompare.svg'
import view from '../assets/images/icon/view.svg'
import addCartt from '../assets/images/icon/add-cart.svg'
import wish from '../assets/images/icon/wish.svg'
import ReactStars from "react-rating-stars-component"

function Products() {
    const value = useContext(DataContext);
    const [products, setProducts] = value.products;
    const addCart = value.addCart;


    return (


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
                                    <p className="price">{product.price}  </p>
                                    <button className="btn btn-primary" onClick={()=>addCart(product._id)}>افزودن به سبد خرید</button>
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
        // </Container>
        //     </div>
        // </div>

    )
}

export default Products