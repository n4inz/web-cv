import Header from "../components/Header";
import CardContact from "../components/CardContact";

function contact() {
    return (
        <div className="text-black min-h-screen container">
      
            <div className="">
                <Header/>
            </div>
            <div className="lg:mt-10 lg:px-52 px-5 ">
                <CardContact/>
            </div>
        
        </div>
    )
}

export default contact
