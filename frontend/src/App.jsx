import { useState } from "react";
import "./App.css";

// All hooks
import { useRoutes } from "react-router-dom";

// All pages
import Home from "./pages/Home.jsx";
import Listing from "./pages/ResourceListings.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Offer from "./pages/Offer.jsx";
import Request from "./pages/Request.jsx";
import Signin from "./pages/Signin.jsx";
import Login from "./pages/Login.jsx";

function App() {
  const [count, setCount] = useState(0);

  // const router = useRoutes([
  //   {
  //     path:"/", element:<Home/>
  //   },
  //   {
  //     path:"/listing", element:<Listing/>
  //   }

  // ])

  return (
    <>
      <Navbar />
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
