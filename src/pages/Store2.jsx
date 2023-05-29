import React from 'react'
import { useState, useEffect } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

import { FaShoppingCart } from 'react-icons/fa';
const arr = []
let i = 0


export default function SampleApi() {
  const [data, setData] = useState([])
  useEffect(function () {
    fetch('https://fakestoreapi.com/products?limit=20')
      .then(res => res.json())
      .then(para => {
        setData(para)
      })
  }, [])

  return (
    <>
      <Meta title={' فروشگاه تایتان'} />
      <BreadCrumb title="فروشگاه تایتان " />
      <div className="container-fluid p-0 m-0">
        <div className="row p-0 m-0">
          <Card />
          {data.map((val) => {
            return (
              <div className="row col-12 col-md-4 col-lg-3  p-0 m-0 px-4">
                <div className="row border rounded-4 my-3 ">
                  <Figure img={val.image} price={val.price} />
                  <Text title={val.title} description={val.description} category={val.category} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </>

  )
}




function Figure({ img, price }) {
  return (
    <figure className="col-12 d-flex flex-wrap justify-content-center ">
      <img src={img} className="img-fluid imgCard " alt="" />
      <div className="col-12 d-flex justify-content-center">
        <figcaption className="mt-3 col-8 text-center text-success h6 price">{price} تومان </figcaption>

      </div>
    </figure>
  )
}



function Text({ title, description, category }) {

  const [card, setCard] = useState([])

  function _add(e) {
    document.getElementById('btn').classList.remove('d-none')
    let temp = e.target.getAttribute('data-data')
    let count = e.target.getAttribute('data-count')

    if (count == 1) {
      arr.push(temp)
      setCard(arr)

      let _li = document.createElement('li')
      _li.innerHTML = `<b class='col-9'>${temp}</b> <input class='col-3' type='number' value='1' id='num'/>`
      document.getElementById('list').appendChild(_li)
      count++
      e.target.setAttribute('data-count', count)
    }
  }

  return (
    <div className="col-12">
      <h6>{category}</h6>
      <h6>{title}</h6>
      <p>{description}</p>
      <button onClick={_add} className="btn btn-icon p-3" data-data={title} data-count='1'>
        <i className="bi bi-cart3 "></i></button>
    </div>
  )
}

function Card({ cardData }) {
  return (
    <div id="pos" className="row bg-warning">
      <ul id="list" className="card">
        {cardData}
      </ul>
      <button id="btn" className="d-none bg-success">finish</button>
    </div>
  )
}









