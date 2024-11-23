import React, { useContext } from 'react'
import './CSS/Category.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer';

const Category = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    
    <div className='category'>
      <Navbar/>
      <img className='category-banner' src={props.banner} alt="" />
      <div className="category-indexSort">
        <p>
          <span>Showing 1-4</span> out of 8 products
        </p>
        <div className="category-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="category-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="category-loadmore">
        Explore More
      </div>
    </div>
    
  )
}

export default Category
