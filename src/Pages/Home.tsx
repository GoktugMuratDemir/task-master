import React from "react";
import { HeaderTitle } from "../Components/HeaderTitle";
import { FilterBar } from "../Components/FilterBar";
import TaskCard from "../Components/TaskCard";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <HeaderTitle title="All Types" />
      <FilterBar />
      <TaskCard />
    </div>
  );
};
