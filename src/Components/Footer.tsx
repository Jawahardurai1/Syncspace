import { Projector,PictureInPicture,CalendarDays,LaptopMinimalCheck } from "lucide-react"
function Footer()
{
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
                    <h2 className="text-slate-400 text-sm italic mt-2">Sign in</h2>
                    <h2 className="text-slate-400 text-sm italic">Register</h2>
                    </div>

                    <div>
                    <h3 className="text-xl font-semibold text-white">Design's </h3>
                     <h2 className="text-slate-400 text-sm italic mt-2">Meeting Rooms</h2>
                    <h2 className="text-slate-400 text-sm italic">Workspaces</h2>
                     <h2 className="text-slate-400 text-sm italic">Office Spaces</h2>
                    </div>
                    <div>
                    <h3 className="text-xl font-semibold text-white">Support </h3>
                    <h2 className="text-slate-400 text-sm italic mt-2">Contact us</h2>
                     <h2 className="text-slate-400 text-sm italic">Contact Us</h2>
                    <h2 className="text-slate-400 text-sm italic">Help Center</h2>
                    <h2 className="text-slate-400 text-sm italic">FAQs</h2>
                    </div>
                    <div>
                    <h3 className="text-xl font-semibold text-white">Company </h3>
                    <h2 className="text-slate-400 text-sm italic mt-2">About us</h2>
                    <h2 className="text-slate-400 text-sm italic">Careers</h2>
                    <h2 className="text-slate-400 text-sm italic">Privacy Policy</h2>
                    </div>
                </div>
                 
            </div>
        </div>
   

        </div>
        </footer>
    )
}
export default Footer