import React, { useContext, useState,useEffect } from 'react'
import { DataContext } from './Context'
import formatCurrency from './Util';
import { Link } from 'react-router-dom';



function Cart() {

    const value = useContext(DataContext);
    const [cart, setCart] = value.cart;
    const increase = value.increase;
    const decrease = value.decrease;
    const removeProduct = value.removeProduct;
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        const getTotal = () =>{
            const res = cart.reduce((prev,item)=>{
                return prev + (item.price * item.count)
            },0)
            setTotal(res)
        }
        getTotal()
    }, [cart]);



    if (cart.length === 0) {
        return (
            <>
                <div className="container py-5 h-100">
                    <div className="row py-5">
                        <h2 style={{ textAlign: 'center', fontSize: '3rem' }}>سبد خرید شما خالی است </h2>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="container py-5 cart-wrapper">
                <div className="row p-0 m-0 justify-content-center ">
                    {
                        cart.map(product => (
                            <div className="row style-sec my-2 cart-detail" key={product._id} >
                                <div className="img-container col-4">
                                    <img src={product.images[0]} className='img-fluid' alt="" />
                                </div>
                                <div className="col-6 box-cart-details">
                                    <div className="">
                                        <h3>{product.title}</h3>
                                        <h5>{product.price}</h5>
                                        <p>{product.desription}</p>
                                        <p>{product.content}</p>
                                    </div>
                                    <div className="amount">
                                        <button className="count bg-info px-2 h4 border-0 rounded" onClick={() => increase(product._id)}>+</button>
                                        <span className='mx-2 h4'>{product.count}</span>
                                        <button className="count bg-info px-2 h4 border-0 rounded" onClick={() => decrease(product._id)}>-</button>
                                    </div>
                                </div>
                                <div className="delete h3 col " onClick={() => removeProduct(product._id)}>X</div>
                            </div>
                        ))
                    }
                </div>
                <div className="total">
                    <Link to='/'>پرداخت</Link>
                    <h5>مجموع قیمت :    {formatCurrency(total)} </h5>
                </div>
            </div>


        </>
    )
}

export default Cart