import HomeImage from "../assets/HomePage.jpg"
import { useNavigate } from "react-router-dom"
import Card from "../Components/Card";
import Card1 from '../assets/card1.jpg'
import Card2 from '../assets/card2.jpg'
import Card3 from '../assets/card3.jpg'
function Home() {
  const navigate = useNavigate();
 const loggedValue=localStorage.getItem("Loggedin")!;
 
  return (

    <>
      <div className=" min-h-screen bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] items-center gap-10 px-8 lg:px-20">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight text-slate-900">
              Book. Manage.
              <span className="text-blue-600"> Collaborate</span>
              <br />
              Seamlessly.
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              SyncSpace helps teams find, reserve, and manage meeting spaces
              effortlessly. Experience smarter workspace scheduling with real-time
              availability and seamless collaboration.
            </p>
          
            <div className="flex gap-4 pt-3">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 hover:scale-105 cursor-pointer transition" onClick={()=>{loggedValue==="true"? navigate("/BookWorkspace"):navigate("/Login") }}>
                Book a Workspace
              </button>

              <button className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 hover:scale-105 cursor-pointer transition" onClick={()=>console.log("clicked!")}>
                Explore Rooms
              </button>

            </div>

            <div className="flex gap-8 pt-8">

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  50+
                </h3>
                <p className="text-sm text-slate-500">
                  Meeting Rooms
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  500+
                </h3>
                <p className="text-sm text-slate-500">
                  Daily Bookings
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  99%
                </h3>
                <p className="text-sm text-slate-500">
                  Availability
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
       
            <img
              src={HomeImage}
              alt="Modern Meeting Room"
              className="relative w-full h-[520px] object-cover rounded-3xl shadow-xl hover:scale-105 transition duration 300"
            />
          </div>
        </div>
        <div className="flex flex-col mt-10 px-14 ">
          <h3 className="text-5xl font-bold">Discover the Perfect Workspace!</h3>
          <p className="text-slate-600 max-w-4xl py-3">Our diverse range of meeting spaces is designed to suit every need. From intimate brainstorming sessions to large-scale presentations, find your ideal environment for productivity and collaboration.</p>
        </div>
        <div className="grid grid-cols-3 space-y-1 text-sm ">
          <Card description="Perfect for presentations, team meetings, and important discussions with a professional setup" image={Card1}/>
          <Card description="Designed for brainstorming sessions and teamwork with a flexible, inspiring workspace." image={Card2}/>
          <Card description="A peaceful space for interviews, online meetings, and focused one-on-one discussions." image={Card3}/>
        </div>

      </div>

    </>
  )


}
export default Home