import { useState } from "react";
import BgImage from "../assets/LoginBg.png";
import {useNavigate} from "react-router-dom";
function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    // Navigate to the dashboard after successful login
    navigate("/dashboard");

  }

  return (
    <div className="flex min-h-screen">
      <div className="relative w-1/2">
        <img className="h-full object-cover" src={BgImage}></img>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/65 to-slate-900/10" />

        <div className="absolute top-55 p-8 left-20 font-[Playfair Display] leading-tight text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to SyncSpace</h1>
        </div>
        <p className="absolute top-74 left-34 text-white text-md mb-6 italic font" style={{ fontFamily: '"Dancing Script", cursive' }}>
          collaboration platform for seamless teamwork"</p>
      </div>


      <div className="flex w-1/2 items-center justify-center bg-gray-100">
        <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-2xl">

          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Sign In
            </h1>
            <p className="mt-2 text-gray-500">
              Welcome back! Please sign in to continue.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>

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
          </form>
        </div>
      </div>
    </div>




  );
}

export default Login;