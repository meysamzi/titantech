import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'

// icons

import gr4 from '../assets/images/icon/gr4.svg'
import gr3 from '../assets/images/icon/gr3.svg'
import gr2 from '../assets/images/icon/gr2.svg'
import gr from '../assets/images/icon/gr.svg'


const Store = () => {

  return (
    <>
      <Meta title={' فروشگاه تایتان'} />
      <BreadCrumb title="فروشگاه تایتان " />
      <div className="store-wrapper 
      color-wrapper py-5">
        <div className="container-fluid">
          <div className="row ">

            <div className="col-2 d-none d-lg-block">
              <div className='filter-card mb-3'>
                <h3 className="filter-title">
                  دسته بندی محصولات
                </h3>
                <div>
                  <ul className='ps-0 '>
                    <li className='mb-2'>کارت گرافیک </li>
                    <li className='mb-2'>مادربرد</li>
                    <li className='mb-2'>هارد اکسترنال</li>
                    <li className='mb-2'>فن</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">فیلترها</h3>
                <div>
                  <h5 className="sub-title">دسترسی</h5>
                  <div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label className='form-check-label' htmlFor="">استوک (1)</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label className='form-check-label' htmlFor="">دست دوم</label>
                    </div>
                    <h5 className="sub-title">قیمت</h5>

                    <div className='d-flex flex-wrap align-items-center gap-10 col-12'>
                      <div className="col-5">
                        <label for="inputtext2" className="visually-hidden">از</label>
                        <input type="text" className="form-control " id="inputtext2" placeholder="از" />
                      </div>
                      <div className="col-5">
                        <label for="inputtext2" className="visually-hidden">به</label>
                        <input type="text" className="form-control " id="inputtext2" placeholder="به" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            <div className="col-12 col-lg-9 ">
              <div className="filter-sort-grid mb-0 d-none d-md-block">
                <div className="d-flex justify-content-between align-items-center grid">
                  <div className="d-flex align-items-center gap-10">
                    <p className='mb-0 d-block ' style={{ width: '100px' }}> بر اساس :</p>
                    <select className='form-control form-select fs12' name="" id="">
                      <option className='fs12' value="manual">جدیدترین</option>
                      <option className='fs12' value="best-selling">پرفروش ترین </option>
                      <option className='fs12' value="price-ascending">بالاترین قیمت</option>
                      <option className='fs12' value="price-descending">پایین ترین قیمت</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10'>
                    <p className="totalproducts mb-0"> 21 محصول</p>
                    <div className="d-flex gap-10 align-items-center">
                      <img src={gr4} alt="grid" className='d-block img-fluid' />
                      <img src={gr3} alt="grid" className='d-block img-fluid' />
                      <img src={gr2} alt="grid" className='d-block img-fluid' />
                      <img src={gr} alt="grid" className='d-block img-fluid' />
                    </div>
                  </div>
                </div>
              </div>




              <div className="products-list pt-4">
                <div className="d-flex flex-wrap ">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Store