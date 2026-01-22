import { Link } from "react-router-dom";
import logo from "../assets/nearnet.jpeg";

function Footer() {
  return (
    <footer className="w-full bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 flex items-center justify-center  rounded-xl text-white">
              <Link to="/">
            <img src={logo} alt="Nearnet Logo" className="full" />
             </Link>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">
                NearNet Helper
              </p>
              <p className="text-sm text-gray-500">
                Share resources. Help locally.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 font-medium">
            <a href="/" className="hover:text-gray-900">Home</a>
            <a href="#" className="hover:text-gray-900">Request</a>
            <a href="#" className="hover:text-gray-900">Offer</a>
            <a href="/listing" className="hover:text-gray-900">Listings</a>
            <a href="#" className="hover:text-gray-900">About</a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 NearNet Helper. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
