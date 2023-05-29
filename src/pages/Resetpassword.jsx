import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { NavLink, Link } from 'react-router-dom'

const Resetpassword = () => {
    return (
        <>
            <Meta title={' بازنشانی رمز عبور'} />
            <BreadCrumb title="بازنشانی رمز عبور " />


            <div className="p-5 style-sec">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4 col-xxl-3  bg-white py-5 p-md-5 rounded auth-card">
                        <h3 className='text-center mb-3'> بازنشانی رمز عبور</h3>
                        <form action="" className='d-flex flex-column gap-15'>
                            <div>
                                <input type="password" name='password' className="form-control" placeholder='رمز' />
                            </div>
                            <div className='mt-1'>
                                <input type="password" name='confpassword' className="form-control" placeholder='تایید رمز' />
                            </div>

                            <div>
                                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                    <Link className='button text-white signup ms-3'> تایید</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resetpassword