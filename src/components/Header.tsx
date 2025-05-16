import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-300 flex sm:flex-row flex-col justify-between gap-5 items-center p-5">
      <h1 className="text-gray-800 text-center font-light text-3xl mb-4">
        Product Management
      </h1>

      <nav>
        <ul className="flex items-center gap-4 text-gray-800 text-lg">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'border-b-1 border-b-gray-600' : ''}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'border-b-1 border-b-gray-600' : ''}>Dashboard</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
