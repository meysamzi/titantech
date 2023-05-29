// import React from 'react'
// import { useState, useEffect } from 'react'
// import BreadCrumb from '../components/BreadCrumb'
// import Meta from '../components/Meta'


// export default function SampleApi() {
//   const [data, setData] = useState([])
//   useEffect(function () {
//     fetch('http://192.168.20.5:8080/accapp/allgoods',{ mode: 'no-cors'})
//       .then(res => res.json())
//       .then(para => {
//         // setData(para.allgoods)
//         console.log(para);
//       })
//       .catch(err => console.error(err))
//   }, [])


//   return (
//     <>
//       <Meta title={' فروشگاه تایتان'} />
//       <BreadCrumb title="فروشگاه تایتان " />
//       <div className="container-fluid p-0 m-0">
//         <div className="row p-0 m-0">
//           {data.map((val) => {
//             return (
//                 <div className="row">
//                   {val.Title}
//                 </div>
//             )
//           })}
//         </div>
//       </div>safdlskdfjkl
//     </>
//   )
// }



