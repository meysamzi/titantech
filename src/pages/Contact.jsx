import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'


function Contact() {
  return (
    <>
      <Meta title={'تماس باما'} />
      <BreadCrumb title=" تماس باما " />


      {/* <!-- ======= Contact Section ======= --> */}

      <section id="contact" className="contact py-5">
        <div className="container-xxl rounded style-sec p-5" data-aos="fade-up">

          <div className="section-title">
            <h2>ارتباط با ما </h2>
            <p>شرکت ارقام صنعت و تجارت پاسارگاد</p>
          </div>

          <div>
            <iframe style={{ border: '0', width: '100%', height: '270px' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.7653012241253!2d51.407822484464646!3d35.707392736143525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e011237847dcd%3A0xcfed7552490962f5!2z2YXYrNiq2YXYuSDYqtis2KfYsduMINin2K_Yp9ix24wg2YbZiNixINiq2YfYsdin2YY!5e0!3m2!1sfa!2s!4v1668860184515!5m2!1sfa!2s"
              allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="row mt-5 color-wrapper">
            <div className="col-lg-4 ">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>آدرس فروشگاه :</h4>
                  <p>تهران خیابان ولیعصر . بالاتر از چهار راه طالقانی . کوچه گیلان . شرکت ارقام صنعت و تجارت پاسارگاد </p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>ایمیل:</h4>
                  <p><a href="mailto:info@titandisti.com"> info@titandisti.com</a></p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>تلفن :</h4>
                  <p><a href="tel: 02158773" className="tell-us-footer py-0">021-58773
                  </a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form action="#" method="post" role="form" className="email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="نام" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="ایمیل" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="موضوع" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="پیام" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">بارگذاری</div>
                  <div className="error-message"></div>
                  <div className="sent-message">پیام شما ارسال شد متشکرم!</div>
                </div>
                <div className="text-center"><button type="submit">ارسال پیام</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Section --> */}

    </>
  )
}

export default Contact