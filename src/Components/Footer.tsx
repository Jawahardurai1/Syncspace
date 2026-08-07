import { Projector,PictureInPicture,CalendarDays,LaptopMinimalCheck } from "lucide-react"
import { Navigate, useNavigate } from "react-router-dom"
function Footer()
{
    const navigate=useNavigate();
    return (
        <footer>
        <div className="bg-slate-800 w-full mt-20 ">
            <div className="flex flex-row gap-2">
            {/* cols-1*/}
          <div className="text-white font-bold  py-16 px-24 m-10 ">
            <h2 className="text-6xl font-bold">Syncspace</h2>
            <p className="text-slate-400 mt-4 italic">Book your perfect workspace!</p>
            <div className="flex flex-row justify-between max-w-[200px] mt-4 gap-2">
                 <CalendarDays />
                <Projector />
                <PictureInPicture />
                <LaptopMinimalCheck />
            </div>
          </div>
            {/*col-2*/}
            <div className="w-2/3">
                <div className="flex gap-20 mt-30 pr-30 justify-end">
                    <div className="">
                    <h3 className="text-xl font-semibold text-white"> Account</h3>
                    <h2 className="text-slate-400 text-sm italic mt-2 cursor-pointer mt-1 "onClick={()=>navigate("/Login")}>Sign in</h2>
                    <h2 className="text-slate-400 text-sm italic cursor-pointer mt-1 " onClick={()=>navigate("/Login")}>Register</h2>
                    </div>

                    <div>
                    <h3 className="text-xl font-semibold text-white">Design's </h3>
                     <h2 className="text-slate-400 text-sm italic mt-2 cursor-pointer">Meeting Rooms</h2>
                    <h2 className="text-slate-400 text-sm italic  mt-1 cursor-pointer">Workspaces</h2>
                     <h2 className="text-slate-400 text-sm italic  mt-1 cursor-pointer">Office Spaces</h2>
                    </div>
                    <div>
                    <h3 className="text-xl font-semibold text-white">Support </h3>
                    <h2 className="text-slate-400 text-sm italic mt-2 cursor-pointer">Contact us</h2>
                   
                    <h2 className="text-slate-400 text-sm italic  mt-1 cursor-pointer">Help Center</h2>
                    <h2 className="text-slate-400 text-sm italic  mt-1 cursor-pointer">FAQs</h2>
                    </div>
                    <div>
                    <h3 className="text-xl font-semibold text-white">Company </h3>
                    <h2 className="text-slate-400 text-sm italic mt-2 cursor-pointer">About us</h2>
                    <h2 className="text-slate-400 text-sm italic  mt-1 cursor-pointer">Careers</h2>
                    <h2 className="text-slate-400 text-sm italic  mt-1 cursor-pointer">Privacy Policy</h2>
                    </div>
                </div>
                 
            </div>
        </div>
   

        </div>
        </footer>
    )
}
export default Footer