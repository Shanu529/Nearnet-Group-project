import React, { useState } from "react";
import bg from "../assets/bg.mp4";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log("here is user data form localstorage", storedUser);

    if (!storedUser) {
     
      toast.error("No account found. Please sign up first.");
      return;
    }

    if (
      form.email === storedUser.email &&
      form.password === storedUser.password
    ) {
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/");
      }, 1200);

      // setError("");
      // alert("Login successful");
      // navigate("/");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#cbcbcb] via-[#ffffff] to-black flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="relative hidden md:flex">
          <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
              <source src={bg} type="video/mp4" />
            </video>
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 flex flex-col justify-center px-10 lg:px-14 text-white">
            <div data-aos="fade-right">
             <h1 className="text-20 lg:text-[50px] font-bold leading-tight mb-4">
              Welcome Back
            </h1>
            <p className="text-2xl text-gray-200">
              Login to continue
              <br />
              your journey 🚀
            </p>
          </div>
        </div>
        </div>

        <div className="flex flex-col justify-center px-6 sm:px-10 py-10 sm:py-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              required
              placeholder="Email address"
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
                setError("");
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="password"
              required
              placeholder="Password"
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
                setError("");
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />

            {Error && <p className="text-red-500 text-xs">{error}</p>}

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition"
            >
              Login →
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="grow h-px bg-gray-300"></div>
            <span className="px-3 text-xs text-gray-500">or</span>
            <div className="grow h-px bg-gray-300"></div>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md text-sm hover:bg-gray-100 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-4 h-4"
              />
              Login with Google
            </button>

            <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md text-sm hover:bg-gray-900 transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
                className="w-4 h-4 invert"
              />
              Login with Apple
            </button>
          </div>

          <p className="text-xs text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signin")}
              className="text-black font-medium cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
