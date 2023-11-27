import React from 'react'
import img from "./all.png"
import Card from "./Card"
import CardTop from "./CardTop"


const All= ({data}) => {
  return (
    <>
        <div className='container-fluid'>
            <div className="row">
                <img style={{ width: "100%"}}
                className='responsive-image d-sm-none d-md-block'
                src={img} alt=""
                />
                <CardTop/>
            </div>
            <div className='container'>
                <div className='row'>
                    {
                        data.map((item,index) =>{
                            return <Card key={index} item={item}/>
                        })
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default All