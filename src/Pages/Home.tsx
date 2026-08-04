import HomeImage from "../assets/HomePage.jpg"
import {useNavigate} from "react-router-dom"

function Home()
{
    const navigate = useNavigate();
return(
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
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 hover:scale-105 cursor-pointer transition" onClick={()=>navigate("/BookWorkspace")}>
        Book a Workspace
      </button>

      <button className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 hover:scale-105 cursor-pointer transition">
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
    <div className="absolute inset-3 bg-blue-100 rounded-3xl  opacity-40"></div>
    <img
      src={HomeImage}
      alt="Modern Meeting Room"
      className="relative w-full h-[520px] object-cover rounded-3xl shadow-xl"
    />


   

  </div>

</div>
        </div>
    
    </>
)


}
export default Home