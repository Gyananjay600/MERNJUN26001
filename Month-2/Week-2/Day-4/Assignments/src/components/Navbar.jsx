import { NavLink } from "react-router-dom";

function Navbar() {

  const activeStyle =
    "text-yellow-300 border-b-2 border-yellow-300";

  const normalStyle =
    "hover:text-yellow-300 transition";

  return (

    <nav className="bg-blue-600 text-white shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <h1 className="text-2xl font-bold">
          React Router
        </h1>

        <div className="flex gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeStyle : normalStyle
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeStyle : normalStyle
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? activeStyle : normalStyle
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeStyle : normalStyle
            }
          >
            Contact
          </NavLink>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;