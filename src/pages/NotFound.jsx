import NotSvg from '../assets/not-found.svg'

import { NavLink, Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="container">
                <div class="d-flex justifu-content-center notFound p-0 m-0">
                    <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center ">
                        <h3>404</h3>
                        <h2>صفحه ای که به دنبال آن هستید وجود ندارد.</h2>
                        <Link to='/' class="btn" >بازگشت به صفحه اصلی</Link>
                        <img src={NotSvg} class="img-fluid pt-2" alt="Page Not Found" />
                    </section>
                </div>
        </div>


    )
}


export default NotFound