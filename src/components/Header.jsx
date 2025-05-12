import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-10 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/icon-pack-vol-1/hamburger-menu-3.png"
          alt="menu"
          onClick={() => toggleMenuHandler()}
        />
        <img
          className="h-14 mx-2 cursor-pointer"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt="youtube-icon"
        />
      </div>

      <div className="col-span-10 ">
        <input
          className="w-1/2 border border-gray-400 p-1 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-1 px-2 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
