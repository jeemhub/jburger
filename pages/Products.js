import React from 'react'
import Product from '../components/Product'
// import purger from '../public/front-view-burger-stand.jpg'
import { useState } from 'react';
import Productss from '../components/Productss'
import { useEffect } from 'react';
function Products() {
  const [search, setsearch] = useState('');
 
  return (
    <div className='flex flex-col items-center p-2 h-auto bg-black'>
        <div className='mt-24'><input onChange={(e)=>setsearch(e.target.value)} className='m-2 mb-4 p-3 md:w-96 w-80 rounded-md' type="text" placeholder='Search about any thing you want' /></div>
        <div className='grid gap-3 bg-black md:grid-cols-2 xl:grid-cols-4 grid-cols-1 md:px-20'>
        {
                            Productss.filter(product=>product.title.toLowerCase().includes(search)).map(product=>(
                                <Product key={product.id} title={product.title} p={product.P} price={product.price} img={product.img} AR={true}></Product>
                            ))
          }
        </div>

    
    </div>
  )
}

export default Products