import Image from "next/image"
import Whatsapp from "../public/img/whatsapp.png"
import Instagram from "../public/img/instagram.png"
import Facebook from "../public/img/facebook.png"
import Linkedin from "../public/img/linkedin.png"
import Iframe from 'react-iframe'
function CardContact() {
    return (
        <>

            <div className="bg-white rounded-md lg:flex shadow-2xl  md:w-auto relative z-30 mx-auto">

                <div className="lg:hidden p-5 bg-gray-900 rounded">
                    <img src="/img/pf2.jpg" alt="" width="200" className="mx-auto rounded overflow-hidden	"/>
                    
                </div>
                <div className="hidden lg:inline-block bg-gray-800">
                    <img src="/img/pf2.jpg" alt="" width="300" className="mx-auto rounded overflow-hidden my-16"/>
                    <div className="text-white absolute -mt-32  pl-5 grid ">
                            <span className="lg:text-lg font-bold">Zulkarnain</span>
                            <span className="lg:text-sm">Web Development</span>
                    </div>    
                </div>
             
                <div className="mx-auto text-center">
                    <label className="font-bold text-sm text-gray-900 ">ALAMAT</label>
                    <div className="border-t-2 w-28 mx-auto border-gray-900 mb-2"/>
                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1673.4120060336045!2d119.63765636377862!3d-4.006663622978073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d95bb1d24931223%3A0xbec53b6e112015ba!2sLrg.%202%2C%20Ujung%20Lare%2C%20Kec.%20Soreang%2C%20Kota%20Parepare%2C%20Sulawesi%20Selatan!5e0!3m2!1sid!2sid!4v1633920039641!5m2!1sid!2sid"
                        width="100%"
                        height="300"
                        display="initial"
                        loading="lazy"
                        />
                       
                        <div className="p-5 font-Lato ">
                            <p className="text-md font-extrabold">Parepare - Sulsel - Indonesia</p>
                            <p className="text-md font-extrabold">Jl Bukit Indah Kec. Soreang Parepare No. 183</p>
                            <p className="text-sm">+62 85340910179 | zulkar.n4inz@gmail.com</p>
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
    )
}

export default CardContact
