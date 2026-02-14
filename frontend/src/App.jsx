import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Listing from "./pages/ResourceListings.jsx";
import Offer from "./pages/Offer.jsx";
import Request from "./pages/Request.jsx";
import Signin from "./pages/Signin.jsx";
import Login from "./pages/Login.jsx";
import { Toaster } from "react-hot-toast";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/request" element={<Request />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
