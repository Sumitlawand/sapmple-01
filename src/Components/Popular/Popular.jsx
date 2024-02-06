import React from 'react'
import './Popular.css'
import  data_product from '../Assets/images/data'
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div className='Popular'>
        <h1>POPULAR IN WOMAN</h1>
      <hr/>
      <div className="items-row">
      <div className="populer_item">
        {data_product.map((item,i)=>{
          return  <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
      </div>
    </div>
  )
}

export default Popular
