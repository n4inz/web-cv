import Image from "next/image";
import Whatsapp from "../public/img/whatsapp.png";
import Instagram from "../public/img/instagram.png";
import Facebook from "../public/img/facebook.png";
import Linkedin from "../public/img/linkedin.png";
import Profile from "../public/img/profile4.jpg";
function CardResume() {
    return (
        <>

            <div className="bg-white rounded-md lg:flex shadow-2xl  md:w-auto relative z-30 mx-auto">

                <div className="lg:hidden  p-5 bg-gray-900 rounded ">
                    <div className="relative w-[60%] mx-auto">
                    <Image src={Profile} objectFit="contain" loading="lazy" className="rounded hover:scale-110 transition transform duration-500 ease-out" />
                    </div>
                    {/* <img src="/img/2.jpg" alt="" width="150" className="mx-auto rounded overflow-hidden	"/> */}
                    
                </div>
                <div className="hidden relative lg:inline-block bg-gray-900 w-72">
                    <Image src={Profile} objectFit="contain" layout="fill" loading="lazy" className="hover:scale-110 transition transform duration-500 ease-out" />
                    {/* <img src="/img/pf4.jpg" alt="" width="350" className="mx-auto rounded overflow-hidden my-16"/> */}
                    <div className="text-white  my-52 xl:my-72 p-5 absolute  grid ">
                            <span className="lg:text-lg font-bold">Zulkarnain</span>
                            <span className="lg:text-sm">Web Development</span>
                    </div>    
                </div>




             
                <div className="text-center mx-auto">
                    <label className="font-bold text-sm text-gray-900 ">SKILLS</label>
                    <div className="border-t-2 w-28 mx-auto border-gray-900 mb-2"/>
                    {/* Versi Desktop */}
                    <div className="hidden xl:flex">
                        <div className="w-2/6 grid grid-cols-2 gap-4 gap-x-0 px-5 mx-auto">
                            <div className="text-center text-xs"><img src="img/icon/JS.png" width="35" className="rounded mx-auto drop-shadow-2xl mb-1" alt=""/>JavaScript</div>
                            <div className="text-center text-xs"><img src="img/icon/php.png" width="35" className=" rounded-full mx-auto drop-shadow-2xl mb-1" alt=""/>PHP</div>
                            <div className="text-center text-xs"><img src="img/icon/Html.png" width="35" className=" rounded mx-auto drop-shadow-2xl mb-1" alt=""/>HTML</div>
                            <div className="text-center text-xs"><img src="img/icon/css.jpeg" width="35" className=" rounded mx-auto drop-shadow-2xl mb-1" alt=""/>CSS</div>
                            <div className="text-center text-xs"><img src="img/icon/mysql.png" width="25" className=" rounded mx-auto drop-shadow-2xl mb-1" alt=""/>Mysql</div>
                            
                
                        </div>
                        <div className="w-2/6 grid grid-cols-3 gap-x-0 px-2 mx-auto">
                            <div className="text-center text-xs"><img src="img/icon/react.png" width="35" className="rounded mx-auto drop-shadow-2xl mb-1" alt=""/>React</div>
                            <div className="text-center text-xs"><img src="img/icon/next.png" width="50" className=" rounded-full mx-auto drop-shadow-2xl mb-1" alt=""/>Next js</div>
                            <div className="text-center text-xs"><img src="img/icon/bootstrap.png" width="45" className=" rounded-lg mx-auto drop-shadow-2xl mb-1" alt=""/>Bootstrap</div>
                            <div className="text-center text-xs"><img src="img/icon/laravel.png" width="35" className=" rounded-lg mx-auto drop-shadow-2xl mb-1" alt=""/>Laravel</div>
                            <div className="text-center text-xs"><img src="img/icon/ionic.png" width="35" className=" rounded-lg mx-auto drop-shadow-2xl mb-1" alt=""/>Ionic</div>
                            <div className="text-center text-xs"><img src="img/icon/firebase.png" width="35" className=" rounded-lg mx-auto drop-shadow-2xl mb-1" alt=""/>Firebase</div>
                            <div className="text-center text-xs"><img src="img/icon/jquery.png" width="35" className=" rounded-lg mx-auto drop-shadow-2xl mb-1" alt=""/>Jquery</div>
                            <div className="text-center text-xs"><img src="img/icon/tailwind.jpg" width="35" className=" rounded-full mx-auto drop-shadow-2xl mb-1" alt=""/>Tailwind</div>
                            <div className="text-center text-xs"><img src="img/icon/google console.jpg" width="35" className=" rounded-full mx-auto drop-shadow-2xl mb-1" alt=""/>Google console</div>
                        </div>
                        <div className="w-2/6 grid grid-cols-1 gap-x-0 mx-auto">
                            <div className="text-center text-xs"><img src="img/icon/postman.png" width="30" className="rounded mx-auto drop-shadow-2xl mb-1" alt=""/>Postman</div>
                            <div className="text-center text-xs"><img src="img/icon/vsStudio.png" width="30" className="rounded mx-auto drop-shadow-2xl mb-1" alt=""/>Vs Code</div>
                            <div className="text-center text-xs"><img src="img/icon/github.png" width="30" className="rounded mx-auto drop-shadow-2xl mb-1" alt=""/>Github</div>
                            <div className="text-center text-xs"><img src="img/icon/figma.png" width="30" className="rounded mx-auto drop-shadow-2xl mb-1" alt=""/>Figma</div>
                        </div>
                    </div>

                    {/* Version Mobile */}

                    <div className="xl:hidden flex">
                        <div className="w-2/6 grid grid-cols-2  gap-x-0 px-5 mx-auto">
                            <img src="img/icon/JS.png" width="35" className="rounded mx-auto drop-shadow-2xl mb-1" alt=""/>
                            <img src="img/icon/php.png" width="35" className=" rounded-full mx-auto drop-shadow-2xl mb-1" alt=""/>
                            <img src="img/icon/Html.png" width="35" className=" rounded mx-auto drop-shadow-2xl mb-1" alt=""/>
                            <img src="img/icon/css.jpeg" width="35" className=" rounded mx-auto drop-shadow-2xl mb-1" alt=""/>
                            <img src="img/icon/mysql.png" width="25" className=" rounded mx-auto drop-shadow-2xl mb-1" alt=""/>
                            
                
                        </div>
                        <div className="w-2/6 grid grid-cols-3 gap-x-0 px-2 mx-auto">
                            <img src="img/icon/react.png" width="35" className="rounded mx-auto drop-shadow-2xl mb-1" alt=""/>
                            <img src="img/icon/next.png" width="50" className=" rounded-full mx-auto drop-shadow-2xl mb-1" alt=""/>
                            <img src="img/icon/bootstrap.png" width="45" className=" rounded-lg mx-auto drop-shadow-2xl mb-1" alt=""/>
                            <img src="img/icon/laravel.png" width="35" className=" rounded-lg mx-auto drop-shadow-2xl mb-1" alt=""/>
                            <img src="img/icon/ionic.png" width="35" className=" rounded-lg mx-auto drop-shadow-2xl mb-1" alt=""/>
                            <img src="img/icon/firebase.png" width="35" className=" rounded-lg mx-auto drop-shadow-2xl mb-1" alt=""/>
                            <img src="img/icon/jquery.png" width="35" className=" rounded-lg mx-auto drop-shadow-2xl mb-1" alt=""/>
                            <img src="img/icon/tailwind.jpg" width="35" className=" rounded-full mx-auto drop-shadow-2xl mb-1" alt=""/>
                            <img src="img/icon/google console.jpg" width="35" className=" rounded-full mx-auto drop-shadow-2xl mb-1" alt=""/>
                        </div>
                        <div className="w-2/6 grid grid-cols-1 gap-x-0 mx-auto">
                            <img src="img/icon/postman.png" width="30" className="rounded mx-auto drop-shadow-2xl mb-1" alt=""/>
                            <img src="img/icon/vsStudio.png" width="30" className="rounded mx-auto drop-shadow-2xl mb-1" alt=""/>
                            <img src="img/icon/github.png" width="30" className="rounded mx-auto drop-shadow-2xl mb-1" alt=""/>
                            <img src="img/icon/figma.png" width="30" className="rounded mx-auto drop-shadow-2xl mb-1" alt=""/>
                        </div>
                    </div>
                    <div className="flex text-center mt-4">
                        <div className="w-2/6">
                            <label className="p-1 text-xs font-bold font-mono bg-gray-900 text-white rounded drop-shadow-2xl">Core</label>
                        </div>
                        <div className="w-2/6">
                            <label className="p-1 text-xs font-bold font-mono bg-gray-900 text-white rounded drop-shadow-2xl">Library<label className="hidden xl:inline">/Framwork</label></label> 
                        </div>
                        <div className="w-2/6">
                            <label className="p-1 text-xs font-bold font-mono bg-gray-900 text-white rounded drop-shadow-2xl">Tools</label> 
                        </div>
                    </div>
                    <div className="font-bold text-sm text-gray-900 mt-4">SOFT SKILLS</div>
                    <div className="border-t-2 w-28 mx-auto border-gray-900 "/>
                    
                    <div className=" px-5">

                        <p className="text-left xl:text-lg font-Lato ">English</p>
                        <div className="h-3 bg-gray-500 text-xs text-white ">
                            {/* <div className="h-3 bg-gray-900   w-36 lg:w-36  xl:w-60 shadow-2xl witd text-center"> <label className="hidden xl:inline">50%</label> </div> */}
                            <div className="h-3 bg-gray-900  w-[50%] shadow-2xl witd text-center"> <label className="hidden xl:inline">50%</label> </div>

                        </div>
                        <p className="text-left xl:text-lg font-Lato ">Indonesia</p>
                        <div className="h-3 bg-gray-500 text-xs text-white">
                            <div className="h-3 bg-gray-900 w-[60%] shadow-2xl text-center"> <label className="hidden xl:inline">60%</label> </div>
                           
                        </div>

                       
                    </div>

                    <div className=" h-5"/>
                
                    
                    
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

export default CardResume
