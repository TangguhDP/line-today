import React from "react";

export default function LoadingScreen() {
  return (
    <div
      aria-hidden="true"
      className="w-full h-full bg-black opacity-50 fixed inset-0 z-50 flex items-center overflow-y-auto overscroll-none"
    >
      <svg
        stroke="#fff"
        viewBox="0 0 38 38"
        className="w-24 h-24 text-white mx-auto my-auto"
      >
        <defs />
        <g
          fill="none"
          fillRule="evenodd"
          strokeWidth="2"
          transform="translate(1 1)"
        >
          <circle cx="18" cy="18" r="18" strokeOpacity=".5" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              dur="1s"
              from="0 18 18"
              repeatCount="indefinite"
              to="360 18 18"
              type="rotate"
            />
          </path>
        </g>
      </svg>
    </div>
  );
}
