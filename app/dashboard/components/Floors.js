"use client";
import React, { useRef, useState } from "react";
import "../styles.css";
const Floors = () => {
  const [isScrolling, setIsScrolling] = useState();
  const scrollContainerRef = useRef(null);
  const scrollToRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
      setIsScrolling(true);
    }
  };
  const scrollToLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
      setIsScrolling(true);
    }
  };
  return (
    <div className="p-2 border-2 border-gray-300 rounded-xl mt-2">
      <div
        className="h-10 w-10 border-2 border-gray-300 rounded-full relative top-10   flex justify-center items-center cursor-pointer transition-transform transform hover:scale-105"
        onClick={scrollToLeft}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </div>
      <div
        className="ml-9 relative w-[800px] overflow-x-auto no-scrollbar"
        ref={scrollContainerRef}
      >
        <ul className="flex w-max">
          {[
            "Ground floor",
            "First",
            "Second",
            "Third",
            "Fourth",
            "Fifth",
            "Sixth",
            "Seventh",
            "Eighth",
            "Ninth",
            "Tenth",
          ].map((e) => (
            <li
              className="w-32 border-b-4 hover:border-b-gray-300 p-2 flex justify-center"
              key={e}
            >
              {e}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="h-10 w-10 border-2 border-gray-300 rounded-full relative bottom-[44px] left-[800px] flex justify-center items-center cursor-pointer transition-transform transform hover:scale-105"
        onClick={scrollToRight}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>

      <div className="h-[460px]"></div>
    </div>
  );
};

export default Floors;
