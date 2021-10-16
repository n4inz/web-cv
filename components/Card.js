import Image from "next/image";

import Whatsapp from "../public/img/whatsapp.png";
import Instagram from "../public/img/instagram.png";
import Facebook from "../public/img/facebook.png";
import Linkedin from "../public/img/linkedin.png";

import Profile from "../public/img/2.jpg";

function Card() {
    return (
       <>

            <div className="bg-white rounded-md lg:flex shadow-2xl  md:w-auto relative z-30 mx-auto">

                <div className="lg:hidden  p-5 bg-gray-900 rounded ">
                    <div className="relative w-[50%] mx-auto">
                    <Image src={Profile} objectFit="contain"  />
                    </div>
                    {/* <img src="/img/2.jpg" alt="" width="150" className="mx-auto rounded overflow-hidden	"/> */}
                    
                </div>
                {/* <div className="hidden lg:inline-block p-5 rounded w-[80%] xl:w-[57%]">
                    
                    <Image src={Profile} objectFit="contain"  />
                    <img src="/img/2.jpg" alt="" width="450" className="mx-auto rounded overflow-hidden	"/>
                    <div className="text-white absolute -mt-14  pl-5 grid">
                            <span className="text-xs lg:text-base font-bold">Zulkarnain</span>
                            <span className="text-xs lg:text-xs">Web Development</span>
                    </div>    
                </div> */}

                <div className="hidden relative lg:inline-block  rounded w-96 ">
                    
                    <Image src={Profile} objectFit="contain" layout="fill" className="hover:scale-110 transition transform duration-500 ease-out" />
                    {/* <img src="/img/2.jpg" alt="" width="450" className="mx-auto rounded overflow-hidden	"/> */}
                    <div className="text-white absolute  my-48 xl:my-52 p-5 grid">
                            <span className="text-xs lg:text-base font-bold">Zulkarnain</span>
                            <span className="text-xs lg:text-xs">Web Development</span>
                    </div>    
                </div>
             
                <div className="text-center mt-10">
                    <div className="font-bold text-lg text-gray-900">Hello, I'am</div>
                    <div className="font-bold text-2xl text-gray-900">Zulkarnain</div>
                    <div className="font-bold text-lg text-gray-900 mt-1">Web Development & Frond-End</div>
                
                    <div className="font-Lato mt-6 mx-auto text-gray-800 text-sm">
                        Pengembang Web Development & front-end profesional dari Parepare, Indonesia. Selalu memberikan usaha yang terbaik untuk setiap proyek yang saya kerjakan. Memberikan solusi dalam satu aplikasi
                    </div>
                    <button onClick={() => window.location.href ="download/CV.pdf" } className="bg-black rounded text-white text-xs p-2 mt-8 hover:bg-gray-900 mb-10">Download CV</button>
                </div>
                
            </div>
            <div className="flex h-10  rounded-b-md  shadow-sm bg-gray-900 space-x-8 p-2 justify-around mb-6">

                <Image src={Facebook} objectFit="contain" className="cursor-pointer" onClick={() => window.open("https://facebook.com/nainmo")} />

                <Image src={Whatsapp} objectFit="contain" className="cursor-pointer" onClick={() => window.open("https://api.whatsapp.com/send?phone=6285340910179")} />
                <Image src={Instagram} objectFit="contain" className="cursor-pointer" onClick={() => window.open("https://instagram.com/nainz_")} />
                <Image src={Linkedin} objectFit="contain" />

            </div>
        </>

        // <div className=" mt-10 justify-between">
            
        //     <div className="">
        //         <img src="/img/profile1.jpg" alt="" width="250" className="mx-auto block rounded"/>
        //     </div>
        //     <div className="text-center w-4/6">
        //         fail
        //     </div>
        // </div>

    )
}

export default Card
