import { Link } from "react-router-dom";
import logo from "../../../assets/klassy-logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(() => console.log("user logged out successfully"));
    alert("User logOut successfully").catch((error) => console.error(error));
  };

  const navItem = (
    <>
      <li className="hover:text-red-500">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-red-500">
        <Link to="allfooditems"> All Food Items</Link>
      </li>
      <li className="hover:text-red-500">
        <Link to="blog"> Blog</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-36">
      <>
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex space-x-8 font-bold py-8">{navItem}</ul>
        </div>
        <div className="navbar-end pr-5">
          {user ? (
            <>
              
              <a
                onClick={handleLogOut}
                className="btn btn-sm ml-3 text-red-500"
              >
                Sign Out
              </a>
            </>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm font-bold text-red-400">
                Login
              </button>
            </Link>
          )}
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                
                <span className="badge">{user?.email}</span>
              </a>
            </li>
            <li>
              <Link to='orders' className="font-semibold">1. My ordered food items</Link>
            </li>
            
          </ul>
        </div>
      </>
    </div>
  );
};

export default Navbar;
