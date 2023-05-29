import React from 'react'
import {Link} from 'react-router-dom'




function Footer() {
  return (
    <>
      <div className="container-fluid footerM text-white ">
        <footer className=" container p-4  mt-2">
          <div className="row">
            <div className="col-6 col-md-2 mb-4">
              <h5 className='mb-5'>فهرست</h5>
              <ul className="nav flex-column ">
                <li className="nav-item mb-3 "><Link  className="nav-link p-0 text-body-secondary">صفحه اصلی</Link></li>
                <li className="nav-item mb-3 "><Link  className="nav-link p-0 text-body-secondary">فروشگاه</Link></li>
                <li className="nav-item mb-3 "><Link  className="nav-link p-0 text-body-secondary">محصولات</Link></li>
                <li className="nav-item mb-3 "><Link  className="nav-link p-0 text-body-secondary">درباره ما</Link></li>
                <li className="nav-item mb-3 "><Link  className="nav-link p-0 text-body-secondary">تماس با ما</Link></li>
              </ul>
            </div>


            
            <div className="col-6 col-md-2 mb-3">
              <h5 className='mb-5'> محبوب ترین</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-3 "><Link  className="nav-link p-0 text-body-secondary">کارت گرافیک </Link></li>
                <li className="nav-item mb-3 "><Link  className="nav-link p-0 text-body-secondary">سی پی یو </Link></li>
                <li className="nav-item mb-3 "><Link  className="nav-link p-0 text-body-secondary">هارد اکسترنال</Link></li>
                <li className="nav-item mb-3 "><Link  className="nav-link p-0 text-body-secondary"> مادربرد</Link></li>
                <li className="nav-item mb-3 "><Link  className="nav-link p-0 text-body-secondary">فن خنک کننده</Link></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5 className='mb-5'>اطلاعات</h5>
              <ul className="nav flex-column ">
                <li className="nav-item mb-3 "><p className='lh-lg'>آدرس : تهران خیابان ولیعصر .<br/> بالاتر از چهار راه طالقانی . کوچه گیلان</p></li>
                <li className="nav-item mb-3 "><p >تلفن : <a href='tel:+021 58773' className='telE'>58773</a> </p></li>
                <li className="nav-item mb-3 "><p >ایمیل : <a href='mailto:info@titandisti.com' className='telE'>info@titandisti.com</a> </p></li>

              </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h6>مشترک شدن در خبرنامه ما</h6>
                <p>خلاصه ماهانه چیزهای جدید و هیجان انگیز ما. </p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2 mt-5">
                  <label for="newsletter1" className="visually-hidden fs14">ایمیل</label>
                  <input id="newsletter1" type="text" className="form-control fs14" placeholder="ایمیل " />
                  <button className="btn btn-primary fs14" type="button">اشتراک</button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-2 my-2 border-top">
            <p>&copy; { new Date ().getFullYear()}  تمامی حقوق این سایت متعلق به گروه تایتان می باشد.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3 "><a className="link-body-emphasis social " href="#"><i className="bi bi-whatsapp"></i></a></li>
              <li className="ms-3 "><a className="link-body-emphasis social" href="#"><i className="bi bi-telegram"></i></a></li>
              <li className="ms-3 "><a className="link-body-emphasis social" href="#"><i class="bi bi-linkedin"></i></a></li>
            </ul>
          </div>
        </footer>
      </div>

    </>
  )
}

export default Footer