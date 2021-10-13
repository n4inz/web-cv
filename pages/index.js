import Image from 'next/image';
import Card from '../components/Card';
import Header from '../components/Header';
import Bg from "../public/img/Bg2.jpg"

export default function Home() {
  return (
    // <div className=" bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
    <div className="text-black min-h-screen container">
      
      <div className="">
        <Header/>
      </div>
      <div className="lg:mt-10 lg:px-52 px-5 ">
        <Card/>
      </div>
        
    </div>

    // <div className="container mx-auto">
          

   
    //   <Card/>
   
      
    // </div>



  )
}
