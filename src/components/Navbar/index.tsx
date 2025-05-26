import { Link } from "react-router-dom";
import shieldLogo from "../../assets/shield.png";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={shieldLogo} alt="Shield Logo" className="w-8 h-8" />
          <span className="font-semibold text-lg">Password Lib</span>
        </Link>

        <div className="flex gap-6">
          <Link to="/" className="hover:underline">
            Main
          </Link>
          <Link to="/strength" className="hover:underline">
            Password verification
          </Link>
          <Link to="/generate" className="hover:underline">
            The generator
          </Link>
          <Link to="/dictionary" className="hover:underline">
            Dictionary attack
          </Link>
        </div>
      </div>
    </nav>
  );
};
