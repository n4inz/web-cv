import Header from "../components/Header";
import CardPorto from "../components/CardPorto";

function Resume() {
    return (
        <div className="text-black min-h-screen container">
      
            <div className="">
                <Header/>
            </div>
            <div className="lg:mt-10 lg:px-52 px-5 ">
                <CardPorto/>
            </div>
        
        </div>
    )
}

export default Resume
