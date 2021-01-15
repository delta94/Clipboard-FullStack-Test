import React, { useState } from "react";
import Moment from "react-moment";
import JobDetail from "../JobDetail";

const JobListItem = ({ data }) => {
  const {
    job_title: title,
    job_type: type,
    salary_range,
    city,
    department,
    hours,
    work_schedule,
    description: summary,
    created,
  } = data;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div
        className="flex flex-col lg:flex-row justify-between lg:items-center w-full border-t py-4 px-2 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col text-sm">
          <span className="font-bold">{title}</span>
          <span className="font-light">{`${type} | $${salary_range[0]} - $${salary_range[1]} an hour | ${city}`}</span>
        </div>
        <span className="text-sm font-light">
          <Moment fromNow>{created}</Moment>
        </span>
      </div>
      {isExpanded && (
        <JobDetail data={{ department, hours, work_schedule, summary }} />
      )}
    </>
  );
};

export default JobListItem;
