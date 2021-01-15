import React from "react";
import { formatDeparments } from "../../../utils/helper";

const JobDetail = ({ data }) => {
  const { department, hours, summary, work_schedule } = data;

  return (
    <div className="flex flex-col lg:flex-row lg:items-center w-full mb-4 px-2 text-sm">
      <div className="flex flex-col flex-1">
        <div className="flex flex-col lg:flex-row mb-2">
          <span className="font-medium w-64 xl:w-80">Department:</span>
          <p className="font-light w-64 xl:w-80">
            {formatDeparments(department)}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row mb-2">
          <span className="font-medium w-64 xl:w-80">Hours / shifts:</span>
          <p className="font-light w-64 xl:w-80">
            {`${hours} hours / ${work_schedule}`}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row mb-2">
          <span className="font-medium w-64 xl:w-80">Summary:</span>
          <p className="font-light w-64 xl:w-80">{summary}</p>
        </div>
      </div>
      <div className="flex lg:flex-col lg:items-end lg:w-48">
        <button className="border bg-blue-500 text-white rounded-lg px-4 py-2 mr-1 lg:my-1 lg:mr-0 hover:bg-blue-300 hover:border-blue-300 focus:outline-none">
          Job details
        </button>
        <button className="text-blue-500 border border-blue-500 rounded-lg px-4 py-2 ml-1 lg:my-1 lg:ml-0 hover:text-white hover:bg-blue-300 hover:border-blue-300 focus:outline-none">
          Save job
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
