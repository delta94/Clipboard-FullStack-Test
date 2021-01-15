import React, { useState } from "react";
import JobListItem from "../JobListItem";
import { getInitialHospitalName } from "../../../utils/helper";

const HospitalListItem = ({ data }) => {
  const { total_jobs_in_hospital: positions, name, items } = data;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <button
        className="focus:outline-none my-2 px-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div className="flex rounded-lg bg-gray-300">
            <span className="flex items-center justify-center uppercase text-white text-lg font-medium w-8 h-8">
              {getInitialHospitalName(name)}
            </span>
          </div>
          <span className="text-left text-sm font-light ml-5">{`${positions} jobs for ${name}`}</span>
        </div>
      </button>
      {isExpanded && (
        <div>
          {items.map((item, index) => (
            <JobListItem key={index} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HospitalListItem;
