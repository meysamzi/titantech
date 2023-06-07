import React, { useContext } from 'react'
import { DataContext } from './Context'



function Cart() {

    const value = useContext(DataContext);
    const [cart, setCart] = value.cart;

    return (
        <>
            <div className="conatiner-xxl py-5">
                <div className="row p-0 m-0 justify-content-center  ">
                    {
                        cart.map(product => (
                            <div className="details border border-danger col-5" key={product._id} >
                                <div className="img-container">
                                    <img src={product.images[0]} className='img-fluid' alt="" />
                                </div>
                                <div className="box-details">
                                    <h2>{product.title}</h2>
                                    <h3>{product.price}</h3>
                                    <p>{product.desription}</p>
                                    <p>{product.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Cart