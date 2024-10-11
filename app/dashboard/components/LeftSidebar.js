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
    <aside
      className={`fixed w-[21.5%] h-[88vh] border-2 border-gray-200 rounded-xl m-2 top-16 shadow-lg transition-all duration-900 ${
        sidebar ? "-left-96" : "left-16"
      }`}
    >
      <div>
        <button className="fixed left-5 top-[5.5rem]" onClick={handleSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </button>
      </div>
      {renderSelectedComponent()}
    </aside>
  );
};

export default LeftSidebar; // Ensure it's a default export
