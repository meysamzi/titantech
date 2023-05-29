import NotSvg from '../assets/not-found.svg'


const NotFound = () => {
    return (

        <div class="container pt-5">
            <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center pt-5">
                <h1>404</h1>
                <h2>صفحه ای که به دنبال آن هستید وجود ندارد.</h2>
                <a class="btn" >بازگشت به صفحه اصلی</a>
                <img src={NotSvg} class="img-fluid py-5" alt="Page Not Found" />
                <div class="credits"> by <a href="#">Titan It Shop Group</a> </div>
            </section>
        </div>

    )
}


export default NotFound