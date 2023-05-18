import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const NavBar = () => {
  const list = (
    <li>
      <Link to="/">Home</Link>
      <Link to="">All Toys</Link>
      <Link to="">My Toys</Link>
      <Link to="/createToy">Add a Toys</Link>
      <Link to="">Blogs</Link>
    </li>
  );
  return (
    <>
      <div className="navbar bg-[#E7CBCB] text-[#643843] px-5 sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow text-[#643843] bg-[#EDCDBB] rounded-box w-52 z-30"
            >
              {list}
            </ul>
          </div>
          <Link to="/" className=" font-bold normal-case text-xl ps-0">
            <img className="h-16" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-[#643843] px-1">{list}</ul>
        </div>
        <div className="navbar-end">
          {/* <>
            <div className="w-10 rounded-full me-2">
              <div
                className="tooltip tooltip-bottom font-bold"
                data-tip={"hello"}
              >
                <img
                  className="w-10 rounded-full hover:cursor-pointer"
                  src={userImg}
                />
              </div>
            </div>
            <button className="bg-[#E3B7A0] text-[#643843] hover:bg-[#472D2D] px-2 py-1 rounded font-bold">
              Log Out
            </button>
          </> */}

          <Link
            to="/login"
            className=" px-2 py-1 rounded bg-[#643843] text-[#E7CBCB] hover:bg-[#472D2D] font-bold"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
