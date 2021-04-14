import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b-2 border-gray-100 bg-green-700">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-white">
        <Link to="/">
          <p className="font-bold cursor-pointer py-3">Line Today Dummy</p>
        </Link>
        <Link to="/bookmark" className="flex flex-row space-x-2 py-3 hover:bg-white hover:text-green-700 px-2 transition-all ease-in-out">
          <p className="font-bold cursor-pointer">Bookmark</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}

export { Navbar };
