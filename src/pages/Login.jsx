import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { NavLink, Link } from 'react-router-dom'


function Login() {
    return (
        <>
            <Meta title={"ورود"} />
            <BreadCrumb title="ورود" />


            <div className="p-5 style-sec">
                <div className="row d-flex justify-content-center py-3">
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4 col-xxl-3  bg-white py-5 p-md-5 rounded auth-card">
                        <h3 className='text-center mb-3'>ورود</h3>
                        <form action="" className='d-flex flex-column gap-15'>
                            <div>
                                <input type="email" className="form-control " placeholder='نام کاربری' />
                            </div>
                            
                            <div className='mt-1'>
                                <input type="password" className="form-control" placeholder='رمزعبور' />
                            </div>
                            <div>
                                <Link to='/Forgotpassword'  className='forgot'>رمز عبور را فراموش کرده اید؟</Link>
                                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                    <button className='button border-0 ' type='submit'>ورود</button>
                                    <Link to='/Signup'  className='button text-white signup ms-3'>ثبت نام</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login