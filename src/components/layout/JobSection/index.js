import React, { useState } from "react";
import { useQuery } from "react-query";
import HospitalListItem from "../../widget/HospitalListItem";
import SortOptionButton from "../../elements/SortOptionButton";
import { commafy, getTotalJobCounts } from "../../../utils/helper";
import { SORTBY, SortOptions } from "../../../constants/constants";
import { getJobs } from "../../../services/apiServcie";

const JobSection = ({ filters, searchKeyword }) => {
  const [selectedSortOptions, setSelectedSortOptions] = useState({});

  const { isLoading, error, data } = useQuery(
    ["getJobs", { filters, searchKeyword, selectedSortOptions }],
    () => getJobs({ filters, searchKeyword, selectedSortOptions })
  );

  const handleSortOptionClick = (title, sortOrder) => {
    const newSelectedSortOptions = {
      ...selectedSortOptions,
      [title]: sortOrder,
    };
    setSelectedSortOptions(newSelectedSortOptions);
  };

  return (
    <div className="flex flex-col flex-1 bg-white border-t border-b lg:border border-gray-200 p-4 mb-4">
      {isLoading ? (
        <div className="flex flex-col h-full w-full justify-center items-center">
          Loading...
        </div>
      ) : error ? (
        <div className="flex flex-col min-h-screen justify-center items-center">
          {`Something went wrong ${error.message}`}
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-6 mt-4 text-sm">
            <span>{`${commafy(getTotalJobCounts(data))} job postings`}</span>
            <div className="hidden lg:flex justify-center items-center space-x-2">
              <span className="text-gray-400 mr-2">{SORTBY}</span>
              {SortOptions.map((item, index) => (
                <SortOptionButton
                  key={`${item}-${index}`}
                  title={item}
                  selectedSortOptions={selectedSortOptions}
                  onOptionClick={(title, sortOrder) =>
                    handleSortOptionClick(title, sortOrder)
                  }
                />
              ))}
            </div>
          </div>
          {data.map((item, index) => (
            <HospitalListItem key={index} data={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default JobSection;
