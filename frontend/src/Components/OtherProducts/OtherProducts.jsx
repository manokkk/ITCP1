import React from 'react'
import './OtherProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const OtherProducts = () => {
  return (
    <div className='otherproducts'>
      <h1>Other products</h1>
      <hr />
      <div className="otherproducts-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default OtherProducts
