import React from 'react'
import Product from '../components/Product'
import purger from '../public/front-view-burger-stand.jpg'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Removeall } from '../redux/itemSlice'
function Basket() {
  const [toggle, settoggle] = useState(false);
  const product = useSelector((state) => state.item.productSlice);
  const dispatch=useDispatch();
 const SendReq=() => {
  settoggle(!toggle);
  dispatch(Removeall())
  }
  return (
    <div className='flex flex-col items-center p-2 h-auto bg-black'>
      {toggle ? 
      <div className=' h-auto  w-11/12 bg-amber-600 rounded-md z-40 absolute p-3 text-center mt-24'>
        <input className='p-2 m-2 w-11/12 rounded-md' placeholder='ادخل اسمك'></input>
        <input className='p-2 m-2 w-11/12 rounded-md' placeholder='ادخل  رقم هاتفك'></input>
        <input className='p-2 m-2 w-11/12 rounded-md' placeholder='ادخل  عنوانك'></input>
        <button onClick={()=>SendReq()} className='bg-green-700 mt-4 text-white font-bold text-xl w-11/12 p-2 h-3/12 rounded-md'>طلب</button>
      </div>
      :<>
      <button onClick={()=>settoggle(!toggle)} className='bg-green-700 p-2 text-white font-bold text-xl w-11/12 h-1/4 rounded-md mt-24'>طلب</button>
      <div className='grid gap-3 bg-black md:grid-cols-2 xl:grid-cols-4 grid-cols-1'>
        {product.map(info => {
          return (
            <Product count={info.count} AR={false} price={info.price} title={info.title} p={info.p} img={info.img} />
            )
          })}

      </div>
          </>}


    </div>
  )
}

export default Basket