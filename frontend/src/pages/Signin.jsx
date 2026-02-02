import React, { useState } from "react";
import bgimg from "../assets/download.jpg";

import { useNavigate } from "react-router-dom";
function Signin() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleName = (e) => {
    const { name, value } = e.target;
    const onlyLetters = value.replace(/[^a-zA-Z]/g, "");
    // setForm({ ...form, [name]: onlyLetters });

    // it should only allow letters less thne 15
    if (onlyLetters.length <= 15) {
      setForm({ ...form, [name]: onlyLetters });
    }
  };

  // emial validation funtion
  const emailVAlidation = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // password validation functionn
  const passswordValidation = (password) => {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,15}$/.test(
      password,
    );
  };

  // form submit handlerr
  const formHandlerSubmit = (e) => {
    e.preventDefault();

    console.log("click");

    if (!emailVAlidation(form.email)) {
      setError("Invalid email address");
      return;
    }

    if (!passswordValidation(form.password)) {
      setError(
        "Password must contain at least one uppercase letter, one number, one special character and be less than 15 characters long.",
      );

      return;
    }
    localStorage.setItem(
      "user",
      JSON.stringify({ email: form.email, password: form.password }),
    );
    console.log("alert");

    alert("Signup successful");
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#10B981] via-[#047857] to-black flex items-center justify-center px-4">
      {/* Main Card */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Image Section (desktop only) */}
        <div className="relative hidden md:flex">
          <img
            src={bgimg}
            alt="Abstract background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 flex flex-col justify-center px-10 lg:px-14 text-white">
            <h1 className="text-3xl lg:text-4xl font-semibold leading-tight mb-4">
              Create your
              <br />
              Account
            </h1>
            <p className="text-sm text-gray-200">
              Share your artwork
              <br />
              and Get projects!
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col justify-center px-6 sm:px-10 py-10 sm:py-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Sign Up
          </h2>

          <form onSubmit={formHandlerSubmit} className="space-y-4">
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleName}
              required
              type="text"
              placeholder="First name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              value={form.lastName}
              required
              onChange={handleName}
              name="lastName"
              type="text"
              placeholder="Last name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              required
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="password"
              required
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />

            <div className="flex items-center gap-2 text-xs text-gray-600">
              <input type="checkbox" className="accent-black" />
              <span>Accept Terms & Conditions</span>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition"
            >
              Join us → 
            </button>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="w-full bg-black text-white py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition"
            >
              Login
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-xs text-gray-500">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md text-sm hover:bg-gray-100 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-4 h-4"
              />
              Sign up with Google
            </button>

            <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md text-sm hover:bg-gray-900 transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
                className="w-4 h-4 invert"
              />
              Sign up with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
