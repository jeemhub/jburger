import React from 'react';
import Image from 'next/image';
const Contact = () => {
    return (
        <div className='text-center '>
     
            <Image alt=''  className='rounded-full mt-24 mb-5 mx-auto' width={200} height={200} src='/download.jfif'></Image>
 
            <input className='p-2 m-2 w-11/12 rounded-md   ' type="text" placeholder='ادخل اسمك'/>
            <input className='p-2 m-2 w-11/12 rounded-md ' type="text" placeholder='ادخل رسالتك'/>
            <button className='bg-amber-600 mt-4 text-white font-bold text-xl w-11/12 p-2 h-3/12 rounded-md'>ارسال</button>
  
        </div>
    );
}

export default Contact;
