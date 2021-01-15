import React from "react";
import FilterSection from "../FilterSection";
import JobSection from "../JobSection";

const Main = () => {
  return (
    <div className="flex flex-1 lg:px-4">
      <FilterSection />
      <JobSection />
    </div>
  );
};

export default Main;
