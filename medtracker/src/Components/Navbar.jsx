import React from "react";
import logo from "../assets/home/Logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { navbar } from "../data";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.user);
  const navigate = useNavigate()
  
  const logout = () => {
    localStorage.clear()
    navigate('/')
  }
  return (
    <div className="bg-white p-3 h-[7rem] z-10 w-[100%] sticky top-0 shadow-md">
      <div className=" p-3 max-w-[1200px] flex justify-between items-center m-auto">
        <div>
          <img className="w-[10rem]" src={logo} alt="logo" />
        </div>
        <div className="flex ml-[2rem]">
          {navbar.map((nav) => (
            <Link
              to={nav.link}
              className="ml-[2rem] font-sans-serif text-[15px] font-mono"
              key={nav.link}
            >
              {nav.name}
            </Link>
          ))}
        </div>
        {!user ? (
          <div className="text-white">
            
            <Link to="/loginintro">
              <button className="w-[7rem] rounded-[3px] bg-black p-[15px] mr-[1.5rem]">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="w-[7rem] rounded-[3px] bg-[#A81515] p-[15px]">
                Sign up
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <button className="w-[7rem] rounded-[3px] bg-[#A81515] p-[15px] text-white" onClick={logout} >
              logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
