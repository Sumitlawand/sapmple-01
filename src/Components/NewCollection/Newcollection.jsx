import React from 'react'
import new_collections from '../Assets/images/new_collections'
import Item from '../Item/Item'
import './Newcollection.css'
const Newcollection = () => {
  return (
    <div className='new_collection'>
   <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className="collection">
        {new_collections.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>

  )
}

export default Newcollection
