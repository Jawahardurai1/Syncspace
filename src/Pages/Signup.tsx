import { useState } from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../Context/Context";
function Signup()
{
const[email,setEmail]=useState<string>('');


const[password,setPassword]=useState<string>('');
const[cpassword,setCpassword]=useState<string>('');
const {setLoggedin,username,setUsername}=useContext(UserContext)!;
const navigate=useNavigate();
function HandleSubmit(e:React.FormEvent<HTMLFormElement>)
{
    e.preventDefault();
    if(password!==cpassword)
    {
        alert("password not match");
        return;
    }
    console.log(email,username,password,cpassword);
   
    setLoggedin(true);
  
  localStorage.setItem("Loggedin", JSON.stringify(true));
    navigate("/");

}
return(
    <>
    <div className="w-full max-w-md  rounded-2xl bg-white p-8 shadow-2xl">

          <div className="mb-5 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Sign Up
            </h1>
            <p className="mt-1 text-gray-500">
              Welcome, Please sign up to continue.
            </p>
          </div>
          <form className="space-y-4" onSubmit={(e)=>{HandleSubmit(e)}} >
             <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
               User name
              </label>

              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-700"

              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-700"

              >
                Confirm Password
              </label>

              <input
                id="cpassword"
                type="password"
                placeholder="Conform password"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                onChange={(e)=>setCpassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition  cursor-pointer hover:bg-blue-700"
            >
              Sign In
            </button>
            <div className="mt-4 text-center text-sm text-gray-500">
             Already have an account?{" "}
              <a href="#" className="font-semibold text-blue-600 hover:text-blue-700">
                Sign In
              </a>
            </div>
          </form>
        </div></>
)
}
export default Signup
