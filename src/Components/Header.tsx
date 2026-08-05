
import {  Bell, CircleUserRound, X } from "lucide-react";
import { useContext, useState } from "react";
import { UserContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

function Header()
{
  const navigate = useNavigate();
 
  const {isLoggedin}=useContext(UserContext)!;
  const [SidebarOpen, setSidebarOpen] = useState<boolean>(false);
  function HandleLoggedinCheck()
  {
    if(isLoggedin)
    {
      navigate("/BookWorkspace");
    }
    else{

      navigate("/login");
    }
  }
return(
    <>
     <div className=" sticky top-0 z-50 flex h-[72px] w-full items-center bg-blue-500">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-white tracking-wide ml-8 font-[Sn Pro]">
              SyncSpace
            </h1>
          </div>

          <div className="ml-auto mr-10 flex items-center gap-8">
            {isLoggedin && <Bell size={24} className="text-white cursor-pointer hover:scale-105 transition-all duration 300" />}


            <button className="bg-[#3B82F6] text-white px-5 py-2 rounded-lg font-medium bg-blue-600 hover:scale-105 transition-all duration 300 hover:bg-blue-700 cursor-pointer"onClick={HandleLoggedinCheck}>Book Workspace</button>


            {isLoggedin && <CircleUserRound size={30} onClick={() => setSidebarOpen(!SidebarOpen)} className="text-white cursor-pointer hover:scale-105 transition-all duration 300" />}
          </div>
        
          {SidebarOpen && (
            <div className="absolute top-[72px] right-0 min-h-screen w-74 bg-white shadow-lg rounded-lg p-4 z-50 mt-2">
              <div className="flex justify-between  mb-2">
                <h2 className=" text-lg font-semibold ml-2 mb-1 ">User Profile</h2>
                <X onClick={() => setSidebarOpen(false)} className="cursor-pointer" />
              </div>
              <hr className="border-gray-300 mb-4"></hr>
              <div className="flex flex-col gap-2 p-4">

                <h3 className="px-4 py-3 rounded-lg text-slate-700 font-medium cursor-pointer 
                 hover:bg-blue-50 hover:text-blue-600 transition " onClick={()=>navigate("/Home")}>
                  Home
                </h3>

                <h3 className="px-4 py-3 rounded-lg text-slate-700 font-medium cursor-pointer 
                 hover:bg-blue-50 hover:text-blue-600 transition">
                  Profile
                </h3>

                <h3 onClick={() => navigate("/dashboard")} className="px-4 py-3 rounded-lg text-slate-700 font-medium cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition">
                  Dashboard
                </h3>
                <h3 className="px-4 py-3 rounded-lg text-slate-700 font-medium cursor-pointer">
                  Calendar
                </h3>
                <h3 className="px-4 py-3 rounded-lg text-slate-700 font-medium cursor-pointer 
                 hover:bg-blue-50 hover:text-blue-600 transition">
                  About
                </h3>

                <h3 className="px-4 py-3 rounded-lg text-slate-700 font-medium cursor-pointer 
                 hover:bg-blue-50 hover:text-blue-600 transition">
                  Contact
                </h3>

                <h3 className="px-4 py-3 rounded-lg text-slate-700 font-medium cursor-pointer 
                 hover:bg-blue-50 hover:text-blue-600 transition">
                  Help
                </h3>

                <h3 className="px-4 py-3 rounded-lg text-slate-700 font-medium cursor-pointer 
                 hover:bg-blue-50 hover:text-blue-600 transition">
                  Settings
                </h3>


                <h3 className="mt-4 px-4 py-3 rounded-lg text-red-500 font-medium cursor-pointer
                 hover:bg-red-50 transition">
                  Logout
                </h3>

              </div>

            </div>)}
        </div>
    </>
)

}
export default Header