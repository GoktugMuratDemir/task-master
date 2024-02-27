import React, { useState } from "react";

export const FilterBar: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleButtonClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  const renderButton = (filterType: string, text: string) => (
    <button
      className={`${
        selectedFilter === filterType
          ? "bg-gray-100 text-sm font-semibold p-2 rounded transition duration-300 ease-in-out"
          : "text-gray-400 text-sm bg-transparent border border-solid border-gray-400 rounded px-2"
      }`}
      onClick={() => handleButtonClick(filterType)}
    >
      {text}
    </button>
  );

  return (
    <div className="flex justify-between">
      <div className="flex items-center text-lg font-semibold text-gray-800">Tasks</div>
      <div className="flex gap-2">
        {renderButton("all", "All")}
        {renderButton("done", "Done")}
        {renderButton("notDone", "Not Done")}
      </div>
    </div>
  );
};
