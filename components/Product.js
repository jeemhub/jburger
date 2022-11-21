import React from 'react'
import Image from "next/image"
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddProduct, RemoveProduct } from '../redux/itemSlice';
function Product(props) {
  const dispatch = useDispatch();
  const [count, setcount] = useState(1);
  const up = () => {
    if (count != 9) {
      setcount(count + 1);
    }
  }
  const down = () => {
    if (count != 1) {
      setcount(count - 1);
    }
  }
  const addproduct = () => {
    dispatch(AddProduct(
      {
        title: props.title,
        p: props.p,
        img: props.img,
        price: props.price*count,
        count:count
      }
    ));
  }
  const removeproduct = () => {
    dispatch(RemoveProduct(props.title))
  }
  return (
    <div className='bg-white h-auto pb-10 rounded-xl m-2 mt-4'>
      <dev className='relative  '>
          <Image src={props.img} width={200} height={250} className="rounded-b-full self-center "></Image>
        <span className='shadow-lg rounded-full bg-red-600 z-10 text-white p-5 text-2xl font-bold'>{props.price * count}$</span>
      </dev>
      <div className=' flex-col items-start'>
      <h1 className='text-black text-2xl font-bold px-2 '>{props.title}</h1>
      <p className=' text-slate-900 text-xl px-2'>{props.p} </p>
      </div>
      <div className='flex flex-row mt-8 justify-between px-2'>
        {props.AR ? <button onClick={() => addproduct()} className='bg-amber-600 font-bold text-2xl w-36 p-2 rounded-md '>ADD</button> : <button onClick={() => removeproduct()} className='bg-red-500 font-bold text-2xl w-36 p-2 rounded-md '>Remove</button>}
        {props.AR ? <div className='flex flex-row'>
          <button onClick={() => down()}>
            <AiFillCaretLeft className='text-4xl text-amber-600' />
          </button>
          <h1 className='text-4xl font-bold text-black'> {count}</h1>

          <button onClick={() => up()}>
            <AiFillCaretRight className='text-4xl text-amber-600' />
          </button>
        </div>
          : <h1 className='text-4xl font-bold text-black'>{props.count}</h1>}


      </div>
    </div>
  )
}

export default Product