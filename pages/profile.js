import Header from "../components/Header"
import CardProfile from "../components/CardProfile"
const Profile = () => {
    return (
        <div className="text-black min-h-screen container">
      
            <div className="">
                <Header/>
            </div>
            <div className="lg:mt-10 lg:px-52 px-5 ">
               <CardProfile/>
            </div>
            
        </div>
    )
}

export default Profile
