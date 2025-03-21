import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold">
          Cafe Order
        </NavLink>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/menu"
              className="text-lg hover:text-yellow-400 transition duration-300"
              activeClassName="text-yellow-400"
            >
              MenuCafe
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order"
              className="text-lg hover:text-yellow-400 transition duration-300"
              activeClassName="text-yellow-400"
            >
              Order
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
