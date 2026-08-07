import HomeImage from "../assets/HomePage.jpg"
import { useNavigate } from "react-router-dom"
import {CircleFadingArrowUp} from 'lucide-react'
import Card from "../Components/Card";
import Card1 from '../assets/card1.jpg'
import Card2 from '../assets/card2.jpg'
import Card3 from '../assets/card3.jpg'
function Home() {
  const navigate = useNavigate();
 const loggedValue=localStorage.getItem("Loggedin")!;
 function BackTotop()
 {
window.scrollTo(
  {
  top: 0,
  behavior: "smooth"
})};

 
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
        <div className="flex flex-col mt-18 px-14 ">
          <h3 className="text-5xl font-bold">Discover the Perfect Workspace!</h3>
          <p className="text-slate-600 max-w-6xl py-3">Our diverse range of meeting spaces is designed to suit every need. From intimate brainstorming sessions to large-scale presentations, find your ideal environment for productivity and collaboration.</p>
        </div>
        <div className="grid grid-cols-1 mt-10">
          {/*card1 versalite space  */}
            <div className="flex gap-2 ">
                <div className="w-1/2">
                  <Card  image={Card1}></Card>
                </div>
                 <div className="flex flex-col w-1/2 gap-2 p-10">
                    <span className="inline-block w-[200px] rounded-2xl bg-slate-200 px-6 py-1 font-medium   text-blue-600"> Versatile Workspace
                    </span>
                      <h3 className="font-bold text-2xl">Meeting Spaces for Every Collaboration Need!</h3>
                      <p className="text-slate-600">Our flexible meeting rooms accommodate various group sizes and requirements, ensuring productive sessions whether you're planning a small team huddle or a large departmental meeting.</p>
                      <ul  className="list-disc mt-8 ml-10 font-medium text-md text-slate-700 space-y-3">
                        <li>Focus Room — Perfect for individual work, interviews, and one-on-one discussions.</li>
                        <li>Collaboration Room — Ideal for creative brainstorming and interactive sessions.</li>
                        <li>Conference Room — Designed for formal  client meetings, and company-wide announcements.</li>
                        <li>Virtual Meeting Room — Equipped with advanced video conferencing technology for seamless remote collaboration.</li>
                      </ul>
                </div>
            </div>
            {/* card2 space*/}
            <div>
              <div className="flex gap-2 mt-16 mr-3">
                <div className="flex flex-col w-1/2 gap-2 p-10 mt-4">
                    <span className="inline-block w-[200px] rounded-2xl bg-slate-200 px-6 py-1  font-medium   text-blue-600">Productive Space
                    </span>
                      <h3 className="font-bold text-2xl mt-3">Enhance Your Productivity with Our Workspaces</h3>
                      <p className="text-slate-600">Designed for efficiency and comfort, our workspaces provide everything you need to focus, collaborate, and achieve your goals. From quiet corners to dynamic hubs, we've got the perfect spot for your work style.</p>
                      <ul  className="list-disc mt-8 ml-10 font-medium text-md text-slate-700 space-y-3">
                        <li>Quiet Zone — A serene environment for deep work.</li>
                        <li>Creative Corner — An inspiring space equipped with whiteboards and flexible seating for ideation and design thinking.</li>
                        <li>Open Hub — A vibrant area fostering spontaneous interactions and knowledge sharing.</li>
                        <li>Focus Lounge — A comfortable retreat for breaks and casual discussions</li>
                      </ul>
                </div>
                <div className="w-1/2">
                  <Card  image={Card2}></Card>
                </div>
              </div>
            </div>
              {/* card3 space */}
               <div className="flex gap-2 mt-15 ">
                <div className="w-1/2">
                  <Card  image={Card3}></Card>
                </div>
                 <div className="flex flex-col w-1/2 gap-2 p-10">
                    <span className="inline-block w-[200px] rounded-2xl bg-slate-200 px-6 py-1 font-medium   text-blue-600"> Private Workspace
                    </span>
                     <h3 className="font-bold text-2xl mt-3">
                      Private Workspaces for Focused Productivity!
                    </h3>
                    <p className="text-slate-600">
                      Enjoy a quiet and comfortable workspace designed for privacy, concentration,
                      and uninterrupted productivity. Choose a space that suits your individual
                      work needs, whether you're taking calls, attending virtual meetings, or
                      working on important tasks.
                    </p>
                        <ul className="list-disc mt-8 ml-10 font-medium text-md text-slate-700 space-y-3">
                          <li>
                            Personal Workspace — A dedicated space for focused individual work and
                            everyday tasks.
                          </li>
                          <li>
                            Quiet Room — A peaceful environment for uninterrupted concentration and
                            productivity.
                          </li>
                          <li>
                            Private Meeting Room — Ideal for confidential discussions and
                            one-on-one meetings.
                          </li>
                          <li>
                            Virtual Work Space — Equipped for video calls and
                            seamless online collaboration.
                          </li>
                        </ul>
                  </div>
                </div>
        </div>
        <div className=" flex flex-col mb-34 ">
          <h4 className="font-bold text-4xl text-center">Want to Explore All types of the Workspaces </h4>
         <div className="flex ">
          <button className="mt-8 font-medium text-white bg-blue-500 rounded-lg px-6 py-2 max-w-[200px]  cursor-pointer  hover:scale-105 transition duration 300 ml-175 text-md" onClick={()=>{loggedValue==="true"? navigate("/ExploreRooms"):navigate("/Login") }}>Explore now</button>
          <CircleFadingArrowUp  size={45}className="animate-bounce ml-120 mt-10 text-blue-500 cursor-pointer" onClick={()=>{console.log("animation clicked! check where error");{BackTotop()}}}/>
          </div>
            
        </div>
{/*next for the footer hereeeeeeeeeeeee*/}

      </div>

    </>
  )


}
export default Home