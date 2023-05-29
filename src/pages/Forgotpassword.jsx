import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { NavLink, Link } from 'react-router-dom'


const Forgotpassword = () => {
    return (
        <>
            <Meta title={'فراموشی رمز عبور'} />
            <BreadCrumb title="فراموشی رمز عبور" />
            <div className="p-5 style-sec">
                <div className="row d-flex justify-content-center py-5">
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4 col-xxl-3  bg-white py-5 p-md-5 rounded auth-card">
                        <h3 className='text-center mb-5'> فراموشی رمز عبور</h3>
                        {/* <p className="text-center mb-3 mt-2">لطفا شماره موبایل یا ایمیل خود را وارد کنید</p> */}
                        <form action="" className='d-flex flex-column gap-15'>
                            <div>
                                <input type="email" className="form-control " placeholder='ایمیل یا شماره تلفن همراه خود را وارد کنید ' />
                            </div>
                            <div>
                                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                    <button type='submit' className='button border-0 '>بازیابی رمز عبور</button>
                                    <Link  to='/login'>لغو </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgotpassword