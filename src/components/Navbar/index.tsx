import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4">
      <Link to="/" className="hover:underline">
        🏠 Main
      </Link>
      <Link to="/strength" className="hover:underline">
        🔐 Password verification
      </Link>
      <Link to="/generate" className="hover:underline">
        ⚙️ The generator
      </Link>
      <Link to="/dictionary" className="hover:underline">
        🧠 Dictionary attack
      </Link>
    </nav>
  );
};
