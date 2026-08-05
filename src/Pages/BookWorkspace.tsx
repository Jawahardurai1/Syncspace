import { X } from "lucide-react";
import {useNavigate} from "react-router-dom";


function BookWorkspace()
{
    
const today = new Date().toISOString().split("T")[0];
const now = new Date();
const navigate = useNavigate();

   
const currentTime = now.toTimeString().slice(0,5);
return(
    <>
   <div className=" flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="w-full max-w-3xl rounded-2xl bg-white p-10 shadow-2xl">
            
          <div className="mb-8 text-center">
            <div className="flex items-center justify-between">
    <h1 className="ml-55 text-2xl font-bold text-gray-800">
        Book a Workspace
    </h1>

    <X className="cursor-pointer hover:text-red-500" onClick={() => navigate(-1)} size={30} />
</div>
            <p className="text-gray-600 font-italic">Select the features you need for your workspace.</p>
          </div>
          <form className="space-y-6">
           
                <div className="flex-col">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="Meeting title" className="text-gray-700">Meeting Title</label>
                                <input type="text" id="Meeting title" className="border border-gray-300  p-2 rounded-md shadow-sm     focus:outline-none focus:ring-blue-500 focus:border-blue-500"placeholder="Enter the Meeting title" />
                            </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="flex flex-col mt-3  gap-1">
                                <label htmlFor="workspace" className="text-gray-700">Workspace</label>
                                <select  id="workspace" className="border border-gray-300  p-2 rounded-md shadow-sm  focus:outline-none focus:ring-blue-500 focus:border-blue-500"> 
                                <option value="">Select a workspace</option>
                                <option value="workspace1">Workspace 1</option>
                                <option value="workspace2">Workspace 2</option>
                                </select>
                            </div>
                            <div className="flex flex-col mt-3  gap-1">
                                <label htmlFor="organiser" className="text-gray-700">Organiser</label>
                                <input type="text" id="organiser" className="border border-gray-300  p-2 rounded-md shadow-sm  focus:outline-none focus:ring-blue-500 focus:border-blue-500"placeholder="Enter the organiser" />
                            </div>
                        </div>
                            <div className="grid grid-cols-3 gap-4 mt-4">
                                <div className="flex flex-col mt-3  gap-1">
                                    <label htmlFor="date" className="text-gray-700">Date</label>
                                    <input type="date" id="date" className="border border-gray-300  p-2 rounded-md shadow-sm  focus:outline-none focus:ring-blue-500 focus:border-blue-500" defaultValue={today} />
                                </div>
                                <div className="flex flex-col mt-3  gap-1">
                                    <label htmlFor="start time" className="text-gray-700">Start Time</label>
                                    <input type="time" id="start time" className="border border-gray-300  p-2 rounded-md shadow-sm  focus:outline-none focus:ring-blue-500 focus:border-blue-500" defaultValue={currentTime} />
                                </div>
                                <div className="flex flex-col mt-3  gap-1">
                                    <label htmlFor="end time" className="text-gray-700">End Time</label>
                                    <input type="time" id="end time" className="border border-gray-300  p-2 rounded-md shadow-sm  focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                                </div>
                            </div>
                            <div className="flex flex-col mt-3  gap-1">
                                <label htmlFor="attentees" className="text-gray-700">Number of Attendees</label>
                                <input type="number" id="attentees" className="border border-gray-300  p-2 rounded-md shadow-sm  focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter the number of attendees" />
                            </div>
                            <div className="flex flex-col mt-3  gap-1">
                                <label htmlFor="Description" className="text-gray-700">Description</label>
                                <textarea id="Description" className="border border-gray-300  p-2 rounded-md shadow-sm  focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter a description for the meeting"></textarea>
                            </div>
                            <div className="flex flex-col mt-3 items-center justify-content gap-1">
                                <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:scale-105 transition-all duration 300 hover:bg-blue-600">Book Workspace</button>
                            </div>
                </div>
                

           </form>
        </div>
      </div>
    </>
)
}
export default BookWorkspace;