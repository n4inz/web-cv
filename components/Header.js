import Link from "next/link";
import { useRouter } from 'next/router';
function Header() {
    const router = useRouter();
    
    return (
        <div className="flex w-full justify-center pt-10 font-Lato text-xs px-10 cursor-pointer text-black font-bold space-x-5 mb-4 lg:space-x-7 md:text-lg ">
           <Link href="/">
               {router.pathname == "/" ? (
                   <div className="hover:text-gray-6000 border-b-2 border-gray-800">Welcome</div>
               ): ( <div className="hover:text-gray-6000 ">Welcome</div> )}
                
           </Link>
           <Link href="profile">
                {router.pathname == "/profile" ? (
                    <div className="hover:text-gray-600 border-b-2 border-gray-800">Profile</div>
                ) : (<div className="hover:text-gray-600 ">Profile</div>) }
           </Link>
           <Link href="resume">
               {router.pathname == "/resume" ? ( 
                   <div className="hover:text-gray-600 border-b-2 border-gray-800">Resume</div>
               ) : ( <div className="hover:text-gray-600">Resume</div> )}
           </Link>
           <Link href="portofolio">
                {router.pathname == "/portofolio" ? (
                    <div className="hover:text-gray-600 border-b-2 border-gray-800">Portofolio</div>
                ) : (<div className="hover:text-gray-600">Portofolio</div>)}
            </Link>           
           <Link href="contact">
               {router.pathname == "/contact" ? (
                   <div className="hover:text-gray-600 border-b-2 border-gray-800">Contact</div>
               ) : (<div className="hover:text-gray-600">Contact</div>)}
           </Link>
           

           {/* <div className="p-1 rounded  border hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
           </div> */}
        </div>

    )
}

export default Header
