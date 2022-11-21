import React from 'react'
import { BsList } from 'react-icons/bs';
import { BsXLg } from 'react-icons/bs';
import { BiCart } from "react-icons/bi";
import { useState } from 'react';
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { useSelector } from 'react-redux';
import Link from 'next/link';
function Nav() {
    const [togol, settogol] = useState(true);
    const count=useSelector((state)=>state.item.count);
   
    return (
        <div className='flex md:flex-row flex-col top-0 p-6 font-bold text-yellow-500 bg-black md:justify-between  fixed z-50 w-screen'>
            <div className='flex flex-row justify-between '>
                <div className='flex flex-row'>
                    {count!=0?<div className='text-red-500'>{count}</div>:<div></div>}
                    <button >
                        <Link href="/Basket" >
                            <BiCart className='text-4xl m-1 mr-2' />
                        </Link>
                    </button>
                    <div className='flex flex-row items-center'>
                        <Link href="/" >
                            <GiAmericanFootballHelmet className='text-4xl m-1 mr-2'/>
                        </Link>
                        <Link href="/" >
                            <h1 className='font-bold text-2xl cursor-pointer'>Jeem Burger</h1>
                        </Link>
                    </div>
                </div>
                <button className='md:hidden text-4xl' onClick={() => settogol(!togol)}>
                    {togol ? <BsList /> : <BsXLg />}
                </button>
            </div>
            <ul className={`flex pt-2 md:flex-row flex-col md:ml-6 md:hidden text-2xl font-mono ${togol ? 'hidden' : ''}`}>
                <li onClick={()=>settogol(!togol)} className='md:mx-4'><Link href="/" >
                    Home
                </Link></li>
                <li onClick={()=>settogol(!togol)} className='md:mx-4'><Link href="/About" >
                    About
                </Link></li>
                <li onClick={()=>settogol(!togol)} className='md:mx-4'><Link href="/Products" >
                    Products
                </Link></li>
            </ul>
            <ul className={`md:flex pt-2 md:flex-row hidden  flex-col md:ml-6  text-2xl font-mono`}>
                <li className='md:mx-4'><Link href="/" >
                    Home
                </Link></li>
                <li className='md:mx-4'><Link href="/About" >
                    About
                </Link></li>
                <li className='md:mx-4'><Link href="/Products" >
                    Products
                </Link></li>
            </ul>

        </div>
    )
}

export default Nav