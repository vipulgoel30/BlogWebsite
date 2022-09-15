import { useState } from "react";
function SearchBar() {
  const [searchBar, setSearchBar] = useState(false);
  const showSearchBar = function () {
    setSearchBar(true);
  };

  return (
    <div
      className={`flex items-center justify-center border-gray-100 border-4  transition-all rounded-3xl  shadow-xl   ${
        searchBar ? "w-80" : "w-fit"
      } `}
    >
      <input
        type="text"
        className={`${
          searchBar ? "w-full ml-3 py-1 px-4" : "w-0"
        } h-8 transition-all outline-none`}
        placeholder="Type something..."
      ></input>
      <div
        className="py-2 px-2 hover:scale-110 transition-all duration-200 "
        onClick={showSearchBar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-7 h-7 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </div>
  );
}
export default SearchBar;
