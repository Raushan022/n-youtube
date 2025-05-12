import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    //API call

    // make an api call on every key press
    // but if the difference between 2 api calls < 200ms
    // decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API CALL - ", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //update  cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

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
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-1 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-1 px-2 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 shadow-lg rounded-lg w-[35rem] border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-1 px-4 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
