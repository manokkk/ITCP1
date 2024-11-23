import React from 'react'
import './ShowShop.css'
import all_product from '../Assets/all_product'
import Item from '../Item/Item'

const ShowShop = () => {
  return (
    <div className='showshop'>
      <h1>Shop</h1>
      <hr />
      <div className="showshop-item">
        {all_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default ShowShop