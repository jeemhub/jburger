import Image from "next/image"
import purger from '../public/front-view-burger-stand.jpg'
import Link from "next/link"

export default function Home() {
return (
    <div className='h-screen bg-black flex  flex-col-reverse md:flex-row-reverse md:items-start text-yellow-500 justify-around md:p-28 p-10 '>
      <div className='flex flex-col md:mt-16 md:items-start items-center'>
        <h1 className='font-bold text-5xl md:text-6xl mb-5  p-2 m-1'>Jeem Burger</h1>
        <p className="md:text-xl text-lg m-2 mb-1">Contrary to popular belief, Lorem Ipsum is not simp
          ly random text. It has rooords</p>
          <dev className="flex md:flex-row flex-col mt-3">
          <button className="bg-yellow-500 text-gray-900 font-bold rounded-md text-2xl  p-4 m-2 ">
            <Link href='/Products'> Our Product</Link>
           </button>
          <button className=" text-yellow-500 font-bold text-2xl m-1"> <Link href='/About'>About</Link></button>
          </dev>
       
      </div>
      <div className="md:mr-28 md:mt-16 border-4 mt-36  border-amber-600 rounded-b-full  border-dashed">
       <Image src={purger} width="500" height='620' className="rounded-b-full   "></Image>
      
      </div>
    </div>
  )
}
