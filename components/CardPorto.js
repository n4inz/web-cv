import Image from "next/image";
import Whatsapp from "../public/img/whatsapp.png";
import Instagram from "../public/img/instagram.png";
import Facebook from "../public/img/facebook.png";
import Linkedin from "../public/img/linkedin.png";
import { Scrollbars } from 'react-custom-scrollbars';

import Profile from "../public/img/pf3.jpg";

function CardPorto() {
    return (
        <>

            <div className="bg-white rounded-md lg:flex shadow-2xl  md:w-auto relative z-30 mx-auto">

                {/* <div className="lg:hidden p-5 bg-gray-900 rounded">
                    <img src="/img/pf3.jpg" alt="" width="200" className="mx-auto rounded overflow-hidden	"/>
                    
                </div>
                <div className="hidden lg:inline-block bg-gray-800 ">
                    <img src="/img/pf3.jpg" alt="" width="300" className="mx-auto rounded overflow-hidden my-16"/>
                    <div className="text-white absolute -mt-32  pl-5 grid ">
                            <span className="lg:text-lg font-bold">Zulkarnain</span>
                            <span className="lg:text-sm">Web Development</span>
                    </div>    
                </div> */}

                <div className="lg:hidden  p-5 bg-gray-900 rounded ">
                    <div className="relative w-[60%] mx-auto">
                    <Image src={Profile} objectFit="contain" loading="lazy" className="rounded hover:scale-110 transition transform duration-500 ease-out" />
                    </div>
                    {/* <img src="/img/2.jpg" alt="" width="150" className="mx-auto rounded overflow-hidden	"/> */}
                    
                </div>

                <div className="hidden relative lg:inline-block bg-gray-900  w-80">
                    <Image src={Profile} objectFit="contain" layout="fill" loading="lazy" className="hover:scale-110 transition transform duration-500 ease-out" />
                    {/* <img src="/img/pf4.jpg" alt="" width="350" className="mx-auto rounded overflow-hidden my-16"/> */}
                    <div className="text-white  my-52 xl:my-72 p-5 absolute  grid ">
                            <span className="lg:text-lg font-bold">Zulkarnain</span>
                            <span className="lg:text-sm">Web Development</span>
                    </div>    
                </div>

                
            
                <div className="text-center w-4/6 mx-auto">
                    <label className="font-bold text-sm text-gray-900 ">PORTOFOLIO</label>
                    <div className="border-t-2 w-28 mx-auto border-gray-900 mb-2"/>
                 
                        <Scrollbars
                            autoHide
                            style={{  height: 381 }}
                        >
                            <div className="grid xl:grid-cols-2 gap-5 xl:gap-1 xl:px-2">
                                {/* <div className="lg:p-5 h-[85%]  bg-black">
                                    <div className="absolute hover:bg-opacity-60 transition duration-500  ease-in-out h-[40%]   xl:w-[45%] bg-gray-900 text-white bg-opacity-5 hover:text-white text-opacity-0  font-extrabold p-3"><a className="underline">E-Pay TV Kabel</a> <p className="text-xs font-Lato">Web app pembayaran TV Kabel menggunakan Layanan TRIPAY. Di bangun dengan menggunan PHP dengan DB mysql dan firebase </p></div>
                                    <img src="/img/portofolio/SistemPembayaTvKabel.png" className="my-5"  alt=""/>
                                </div> */}

                                <div className="  bg-black relative ">
                                    <div className="absolute z-10 top-0 left-0 right-0 bottom-0 hover:bg-opacity-60 transition duration-500  ease-in-out    bg-gray-900 text-white bg-opacity-5 hover:text-white text-opacity-0  font-extrabold p-3"><a className="underline">E-Pay TV Kabel</a> <p className="text-xs font-Lato">Web app pembayaran TV Kabel menggunakan Layanan TRIPAY. Di bangun dengan menggunan PHP dengan DB mysql dan firebase </p></div>
                                    <img src="/img/portofolio/SistemPembayaTvKabel.png" className="relative z-[0] object-contain"  alt=""/>
                                </div>

                                <div className="  bg-black relative ">
                                    <div className="absolute z-10 top-0 left-0 right-0 bottom-0 hover:bg-opacity-60 transition duration-500  ease-in-out    bg-gray-900 text-white bg-opacity-5 hover:text-white text-opacity-0  font-extrabold p-3"><a className="underline">Panggilan Darurat</a> <p className="text-xs font-Lato">Aplikasi SOS. dibangun dengan menggunakan PHP dengan DB Myql kemudian di build ke android menggunan IONIC</p></div>
                                    <img src="/img/portofolio/panggilanDarurat.png" width="65"  className="relative z-[0] mx-auto my-3"  alt=""/>
                                </div>

                                <div className=" bg-black relative">
                                <div className="absolute z-10 top-0 left-0 right-0 bottom-0 hover:bg-opacity-60 transition duration-500  ease-in-out    bg-gray-900 text-white bg-opacity-5 hover:text-white text-opacity-0  font-extrabold p-3"><a className="underline">Eccomerce</a> <p className="text-xs font-Lato">Web penjualan Bumbu masakan khas enrekanng, dibangun dengan menggunan PHP dengan DB Mysql</p></div>
                                    <img src="/img/portofolio/penjualanBumbu.png" className="relative z-[0]"  alt=""/>
                                </div>

                                <div className=" bg-black relative">
                                <div className="absolute z-10 top-0 left-0 right-0 bottom-0 hover:bg-opacity-60 transition duration-500  ease-in-out    bg-gray-900 text-white bg-opacity-5 hover:text-white text-opacity-0  font-extrabold p-3"><a className="underline">Pemata'an Jalanan</a> <p className="text-xs font-Lato">Web Pemeta'an jalanan menggunakan API google console</p></div>
                                    <img src="/img/portofolio/PU.png" className="relative z-[0]" alt=""/>
                                </div>

                                <div className=" bg-black relative">
                                <div className="absolute z-10 top-0 left-0 right-0 bottom-0 hover:bg-opacity-60 transition duration-500  ease-in-out    bg-gray-900 text-white bg-opacity-5 hover:text-white text-opacity-0  font-extrabold p-3"><a className="underline">Eccomerce</a> <p className="text-xs font-Lato">Web penjualan pakan ayam sidenreng rappang, dibangun menggunakan PHP dengan database Mysql</p></div>
                                    <img src="/img/portofolio/penjualanPakan.png" className="relative z-[0]" alt=""/>
                                </div>

                                <div className=" bg-black relative">
                                <div className="absolute z-10 top-0 left-0 right-0 bottom-0 hover:bg-opacity-60 transition duration-500  ease-in-out    bg-gray-900 text-white bg-opacity-5 hover:text-white text-opacity-0  font-extrabold p-3"><a className="underline">RSUD</a> <p className="text-xs font-Lato">Website RSUD, Sistem rujukan puskesmas dan peminda'an pasien. Dibangun menggunakan dengan php dengan DB Mysql</p></div>
                                    <img src="/img/portofolio/rsud.png" className="relative z-[0]" alt=""/>
                                </div>

                                <div className=" bg-black relative">
                                <div className="absolute z-10 top-0 left-0 right-0 bottom-0 hover:bg-opacity-60 transition duration-500  ease-in-out    bg-gray-900 text-white bg-opacity-5 hover:text-white text-opacity-0  font-extrabold p-3"><a className="underline">Sispo Parepare</a> <p className="text-xs font-Lato">Sistem informasi kegiatan parepare, dibangun dengan PHP dengan DB Mysql</p></div>
                                    <img src="/img/portofolio/sispoParepare.png" className="relative z-[0]" alt=""/>
                                </div>

                                

                            </div>
                        </Scrollbars>
                        

                
                    
   

                    <div className="lg:hidden h-3"/>
                
                    
                    
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

export default CardPorto
