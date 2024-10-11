import React, { useState } from "react";

const ProjectList = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedSubType, setSelectedSubType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const predefinedProjects = [
    {
      projectId: 500,
      name: "Project 1",
      members: [{ id: "id1", name: "Member 1", role: "creator" }],
      status: "ongoing",
      type: "landscape",
      subtype: "industrial",
      predefinedDesigns: [],
    },
    {
      projectId: 501,
      name: "Project 2",
      members: [{ id: "id2", name: "Member 2", role: "Architect" }],
      status: "completed",
      type: "interior",
      predefinedDesigns: [],
    },
    // Add more projects as needed
  ];

  const types = [
    "architecture",
    "layouts",
    "interior",
    "Exterior",
    "Landscape",
    "contruction",
  ];
  const subtypes = ["commercial", "residential", "industrial", "institutional"];
  const statuses = ["Ongoing", "Completed", "Pending"];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = predefinedProjects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full p-4 rounded-lg shadow-md ">
      <div className="m-2 w-full flex flex-col items-start">
        <button className="flex items-center justify-start h-10 w-full p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search Projects..."
            className="w-full h-8 p-2 rounded-lg focus:outline-none bg-gray-100"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </button>

        {/* Type Dropdown */}
        {/* <div className="w-full">
          <div className="w-full p-2 border border-gray-200 rounded-lg text-sm">
            {selectedType || "Select a type"}
          </div>
          <ul className="w-full p-2 border border-gray-200 rounded-lg bg-white mt-1">
            {types.map((type, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setSelectedType(type)} // Set the selected type
              >
                {type}
              </li>
            ))}
          </ul>
        </div> */}

        {/* Type and Subtype Dropdowns */}
        <div className="w-full flex gap-2 items-center justify-between my-2">
          {/* Status Dropdown */}
          <div className="w-1/2 ">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none"
            >
              <option value="" disabled>
                Status
              </option>
              {statuses.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          {/* Subtype Dropdown */}
          <div className="w-1/2">
            <select
              value={selectedSubType}
              onChange={(e) => setSelectedSubType(e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none"
            >
              <option value="" disabled>
                Sub-types
              </option>
              {subtypes.map((subtype, index) => (
                <option key={index} value={subtype}>
                  {subtype}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <ul className="flex flex-col items-start p-2 gap-2">
        {filteredProjects.map((project) => (
          <li key={project.projectId} className="w-10/12">
            <button className="flex items-center justify-start h-9 w-full px-2 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-base">
              {/* SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
              <span className="text-left text-slate-600 font-medium">
                {project.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
