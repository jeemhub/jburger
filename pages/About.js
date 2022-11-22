import Aboutimg from '../public/About.jpg'
import Link from 'next/link'
import Image from 'next/image'
function About() {
  const show =()=>{
    console.log('jassim x 123')
  }
  return (
    <div className='flex flex-col md:flex-row md:items-start items-center md:justify-center  w-full h-screen p-10   '>
      <div className=' border-4  border-amber-600 rounded-b-full border-dashed  mt-24 '>
      <Image alt=''  src={Aboutimg} width="600" height='610' className="rounded-b-full "></Image>
      </div>


      <div className='flex flex-col md:mr-20 items-center md:items-start md:self-start md:mt-10 md:p-10 text-white'>
        <h1 className='md:text-6xl text-4xl mb-6 font-bold md:my-6 my-3'>حول</h1>
        <p className='md:text-xl text-md mb-1 md:mt-3 md:mb-3'>شركة مختصة بالبركر العراقي <span className='font-bold'>Jeem Burger</span> </p>
        <p className='md:text-xl text-md mb-1  md:mb-6'>  تأسست سنة 1998 وتم اختيار العاصمة بغداد مقرا لنا</p>
        <div className='flex md:flex-row  flex-col justify-center items-center'>
          <button onClick={()=>show()} className=' mt-4 text-xl md:ml-3 bg-orange-500 hover:drop-shadow-md font-bold text-white p-3 w-3/5 md:m-4 m-1 rounded-3xl hover:border-2 transition-all ease-in duration-100 hover:border-solid hover:border-orange-500 hover:bg-white hover:text-orange-500'><Link href="/Contact">تواصل معنا</Link> </button>
          <div className='mt-4 md:mt-2 text-2xl font-bold  text-orange-500 '><Link href="/Products" className=' '>اطلب وجبتك الان</Link></div>
        </div>

      </div>

    </div>
  )
}

export default About