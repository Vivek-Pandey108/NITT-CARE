import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { DoctorContext } from "../context/DoctorContext";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { dToken, setDToken } = useContext(DoctorContext);
  const { aToken, setAToken } = useContext(AdminContext);

  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    dToken && setDToken("");
    dToken && localStorage.removeItem("dToken");
    aToken && setAToken("");
    aToken && localStorage.removeItem("aToken");
  };

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-2 text-xs">
        <img
          onClick={() => navigate("/")}
          className="w-12 h-11 object-contain cursor-pointer"
          src={assets.logo}
          alt="Hello"
        />

        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        onClick={() => logout()}
        className="bg-gradient-to-br from-[#1479C9] to-[#33CC80] text-white px-2 py-1 rounded-2xl font-semibold shadow-lg transition-all duration-200 hover:from-[#1167b1] hover:to-[#1e9449]"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
