import React from 'react'
import { useState, useEffect } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'


export default function SampleApi() {
    const [data, setData] = useState([])
    useEffect(function () {
        fetch('http://192.168.20.5:8080/accapp/allgoods')
            .then(res => res.json())
            .then(para => {
                console.log(para);
                setData(para.allgoods)
                console.log(para.allgoods);
            })

    }, [])


    return (
        <>
            <Meta title={' فروشگاه تایتان'} />
            <BreadCrumb title="فروشگاه تایتان " />
            <div className="container-fluid p-0 m-0">
                <div className="row p-0 m-0">
                    {data.map((val) => {
                        return (
                            <div className="row">
                                {val.allgoods.Title}
                            </div>
                        )
                    })}
                </div>
            </div>safdlskdfjkl
        </>
    )
}



