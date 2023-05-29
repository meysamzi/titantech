import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid mx-2">
          <img className="navbar-brand logo-titan" src='assets/images/logo/titan-logo.png' />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-1">
              <li className='nav-item dropdown '>
                <p className=" dropdown-toggle  d-flex align-items-center p-0 m-0 py-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span>دسته بندی</span>
                </p>
                <ul className="dropdown-menu  gap-30 ">
                  <li><Link className="dropdown-item " to=''>فهرست</Link></li>
                  <li><Link className="dropdown-item " to=''>فهرست </Link></li>
                  <li><Link className="dropdown-item " to=''>فهرست</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs13 active " aria-current="page" to='/'>صفحه اصلی</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs13" to='/Product'>فروشگاه</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs13" to='/'>وبلاگ</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs13" to='/Contact'>تماس با ما</NavLink>
              </li>
            </ul>

            <div className=" d-flex justify-content-center">
              <ul className="navbar-nav  ms-lg-5 d-inline text-center">
                <Link to='/Compare-Product' className='align-items-center ms-3'>
                  <i class="bi bi-arrow-repeat  h4"></i>
                </Link>
                <Link to='/wishlist' className='align-items-center ms-3'>
                  <i className="bi bi-heart  h4"></i>
                </Link>

                <Link to='/login' className='align-items-center ms-3'>
                  <i class="bi bi-person  h4"></i>
                </Link>
                <Link to='/cart' className='align-items-center ms-3'>
                  <i class="bi bi-cart4  h4 me-5"></i>
                </Link>
              </ul>
            </div>


            <form className="d-flex mt-2" role="search">
              <div className="input-group mb-3">
                <input type="text" className="form-control py-2 fs13" placeholder="جستجو ..." aria-label="جستجو ..." aria-describedby="basic-addon2" />
                <span className="input-group-text " id="basic-addon2">
                  <BsSearch className='fs-6' />
                </span>
              </div>
            </form>
          </div>
        </div>
      </nav>


      {/* <Navbar  bg="light" expand="lg" >
        <Container fluid className='px-5'>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

    </>
  )
}

export default Header


