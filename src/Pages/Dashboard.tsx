
import { Building2, CheckCircle2, CalendarClock, Bell, MoveUpRight, Sparkles, CircleUserRound, X } from "lucide-react";
import UseFetch from "../Hooks/UseFetch";
import { useState } from "react";
import Loading from '../assets/Loading.gif'
function Dashboard() {

  const { data, error, loading } = UseFetch("http://localhost:3000/Meeting");
  const [VisibleCount, setVisibleCount] = useState(3);
  const [SidebarOpen, setSidebarOpen] = useState(false);
  interface Meeting {
    id: number;
    title: string;
    room: string;
    organizer: string;
    startTime: string;
    status: "Upcoming" | "Ongoing" | "Completed" | "Scheduled";
  }
  const StatusColor = {
    Upcoming: {
      dot: "bg-blue-500",
      text: "text-blue-500"
    },
    Ongoing: {
      dot: "bg-green-500",
      text: "text-green-500"
    },
    Completed: {
      dot: "bg-red-500",
      text: "text-red-500"
    },
    Scheduled: {
      dot: "bg-purple-500",
      text: "text-purple-500"
    }
  }
  if (loading) {
    return (<div className="min-h-screen flex items-center justify-center">
      <img src={Loading} alt="Loading..." className="w-80 h-80" />
    </div>)
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 border border-red-300 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-red-600">
            Failed to load meetings
          </h2>
          <p className="text-slate-600 mt-2">{error}</p>

          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
  return (
    <>

      <div className="min-h-screen">
        {/*nav  content */}
        <div className=" sticky top-0 z-50 flex h-[72px] w-full items-center bg-blue-500">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-white tracking-wide ml-8 font-[Sn Pro]">
              SyncSpace
            </h1>
          </div>

          <div className="ml-auto mr-10 flex items-center gap-8">
            <Bell size={24} className="text-white cursor-pointer hover:scale-105 transition-all duration 300" />
            <button className="bg-[#3B82F6] text-white px-5 py-2 rounded-lg font-medium bg-blue-600 hover:scale-105 transition-all duration 300 hover:bg-blue-700 cursor-pointer">Book Workspace</button>
            <CircleUserRound size={30} onClick={() => setSidebarOpen(!SidebarOpen)} className="text-white cursor-pointer hover:scale-105 transition-all duration 300" />
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
                 hover:bg-blue-50 hover:text-blue-600 transition">
                  Home
                </h3>

                <h3 className="px-4 py-3 rounded-lg text-slate-700 font-medium cursor-pointer 
                 hover:bg-blue-50 hover:text-blue-600 transition">
                  Profile
                </h3>

                <h3 className="px-4 py-3 rounded-lg text-slate-700 font-medium cursor-pointer">
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

        <div className='p-8 space-y-8 mt-4 '>
          <div className="px-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-slate-800">
                  Dashboard
                </h1>

                <p className="text-slate-500 mt-1">
                  Welcome back! Here's an overview of your meeting Workspace.
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm text-slate-500">
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
          {/* for the cards management */}

          <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-6 p-6">
            {/* card 1  for the total rooms */}
            <div className="h-[200px] rounded-xl bg-emerald-500 p-6 shadow-lg  hover:shadow-xl hover:scale-105 transition duration 300 flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                  <Building2 className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  Total Workspaces
                </h3>
              </div>

              <h1 className="text-center text-6xl font-bold text-white">
                40<sup className="text-3xl">+</sup>
              </h1>
              <div className="flex items-center gap-1 cursor-pointer">
                
                <p className="text-sm text-white/80">
                  +5 this month
                </p>
                <MoveUpRight size={14} className="text-white" />
                
              </div>

            </div>
            {/* card 2  for the available rooms */}
            <div className="h-[200px] rounded-xl bg-sky-400 p-6 shadow-lg hover:shadow-xl flex flex-col justify-between hover:scale-105 transition-all duration 300">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                  <CheckCircle2 className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  Available Workspaces
                </h3>
              </div>

              <h1 className="text-center text-6xl font-bold text-white">
                26
              </h1>
              
              <p className="text-sm mt-3 text-white/80">
                65% Available
              </p>
              
            </div>
            {/* card 3  for the upcoming meeting */}
            <div className="h-[200px] rounded-xl bg-orange-500 p-6 shadow-lg hover:shadow-xl flex flex-col justify-between hover:scale-105 transition-all duration 300">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                  <CalendarClock className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  Upcoming Meeting
                </h3>
              </div>

              <div className="text-center">
                <h2 className="text-4xl font-bold text-white">
                  10:30 AM
                </h2>

                <p className="mt-2 text-lg font-medium text-white">
                  Marketing Review
                </p>

                <p className="text-sm text-white/80">
                  Workspace A101
                </p>
              </div>
            </div>
          </section>
          {/* for the meeting schedule */}
          <section className="rounded-xl bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex m-2 gap-2">
                <Sparkles className="text-amber-500" size={20} />
                <h1 className="text-md font-italic text-slate-800">
                  Welcome back, User
                </h1>
              </div>
              <div className="flex  flex-col m-2 gap-2">
                
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:scale-105 transition-all duration 300 hover:bg-blue-600" onClick={() => setVisibleCount(VisibleCount === 3 ? data.length : 3)}>
                  {VisibleCount === 3 ? "View All" : "View Less"}
                </button>
              </div>
            </div>
            <h2 className="text-sm font-semibold text-slate-600">
              Here's your meeting room overview for today.
            </h2>
            {/* Add your meeting schedule content mapping of teh data through useEffect hook */}
            <div className="grid grid-cols-5   border-b border-slate-200 pb-3 text-sm font-semibold text-slate-600 mt-4">
              <p>Time</p>
              <p>Meeting</p>
              <p>Workspace</p>
              <p>Organizer</p>
              <p>Status</p>

            </div>
            {data.slice(0, VisibleCount).map((meeting: Meeting) => (

              <div className="mt-4 grid grid-cols-5  border-b border-slate-200 pb-3 text-sm text-slate-700" key={meeting.id}>
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full ${StatusColor[meeting.status].dot}`}></div>
                  <p className="w-1/6 p-3 text-sm text-slate-700">{meeting.startTime}</p>
                </div>
                <p className="w-1/6 text-sm text-slate-700">{meeting.title}</p>
                <p className="w-1/6 text-sm text-slate-700">{meeting.room}</p>
                <p className="w-1/6 text-sm text-slate-700">{meeting.organizer}</p>
                <p className={`w-1/6 text-sm ${StatusColor[meeting.status].text}`}>{meeting.status}</p>
                <p className="w-1/6 text-center">

                </p>
              </div>
            ))}

          </section>
        </div>


      </div>
    </>
  );
}
export default Dashboard;