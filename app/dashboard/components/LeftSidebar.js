"use client";

import Link from "next/link";
import ProjectList from "./ProjectList";
import Members from "./Members";
import CRM from "./CRM";
import Task from "./Task";
import Chat from "./Chat";
import Orders from "./Orders";
import Pay from "./Pay";
import Docs from "./Docs";
import { useState } from "react";

const LeftSidebar = ({ selectedComponent }) => {
  const [sidebar, setSidebar] = useState(null);

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "ProjectList":
        return <ProjectList />;
      case "Members":
        return <Members />;
      case "CRM":
        return <CRM />;
      case "Task":
        return <Task />;
      case "Chat":
        return <Chat />;
      case "Orders":
        return <Orders />;
      case "Pay":
        return <Pay />;
      case "Docs":
        return <Docs />;
      default:
        return null; // or a default component
    }
  };

  const handleSlide = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <div>
      <div>
        <button
          className="fixed left-5 top-[4.4rem] z-50"
          onClick={handleSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <aside
        className={`fixed w-1/4 h-[88vh] border-2 border-gray-300 rounded-xl m-2 top-16 shadow-lg transition-all duration-500 ${
          sidebar ? "-left-96 -z-10" : "left-16 z-10"
        }`}
      >
        <div className="h-full">{renderSelectedComponent()}</div>
      </aside>
    </div>
  );
};

export default LeftSidebar; // Ensure it's a default export
