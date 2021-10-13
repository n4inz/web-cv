import Image from "next/image"

import Whatsapp from "../public/img/whatsapp.png"
import Instagram from "../public/img/instagram.png"
import Facebook from "../public/img/facebook.png"
import Linkedin from "../public/img/linkedin.png"
import Profile from "../public/img/pf4.jpg"
function Card() {
    return (
       <>

            <div className="bg-white rounded-md lg:flex shadow-2xl  md:w-auto relative z-30 mx-auto">

                <div className="lg:hidden p-5 bg-gray-900 rounded">
                    <img src="/img/pf4.jpg" alt="" width="200" className="mx-auto rounded overflow-hidden	"/>
                    
                </div>
                <div className="hidden lg:inline-block bg-gray-900">
                
                    <img src="/img/pf4.jpg" alt="" width="350" className="mx-auto rounded overflow-hidden my-16"/>
                    <div className="text-white absolute -mt-32  pl-5 grid ">
                            <span className="lg:text-lg font-bold">Zulkarnain</span>
                            <span className="lg:text-sm">Web Development</span>
                    </div>    
                </div>
             
                <div className="text-center ">
                    <label className="font-bold text-sm text-gray-900 ">TENTANG</label>
                    <div className="border-t-2 w-28 mx-auto border-gray-900 mb-2"/>
                    <div className="flex justify-center text-sm font-Lato mx-6">
                        <div className="w-1/2 text-justify ">
                            <p>Nama:</p>
                            <p>Tanggal Lahir :</p>
                            <p>Almat         :</p>
                            <p>No. HP        :</p>
                            <p>Email         :</p>
                            <p>Web           :</p>
                        </div>
                        <div className="w-2/2 text-left  ">
                            <p>Zulkarnain</p>
                            <p>04 Desember 1997</p>
                            <p>Jl. Bukit indah No. 183</p>
                            <p>+6285340910179</p>
                            <p>zulkar.n4inz@gmail.com</p>
                            <p>n4inz.com</p>
                        </div>
                    </div>
                    <div className="font-bold text-sm text-gray-900 mt-1">PENDIDIKAN</div>
                    <div className="border-t-2 w-28 mx-auto border-gray-900 mb-2"/>
                    
                    <div className="mx-aut p-5 mx-auto px-16">
                        <img src="/img/biografiPendidikan2.png" alt="" width="530" className="rounded mx-auto"/>
                    </div>
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
