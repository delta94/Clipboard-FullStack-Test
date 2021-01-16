import _ from "lodash";

export const commafy = (num) =>
  num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

export const getTotalJobCounts = (jobs = []) => {
  let counts = 0;
  jobs.forEach((item) => (counts += item.total_jobs_in_hospital));
  return counts;
};

export const getInitialHospitalName = (name) => name.substring(0, 2);

export const getFilterHeading = (str) => str.replace("_", " ");

export const formatDeparments = (department) =>
  department.join().replaceAll(",", ", ");

export const generateApiUrl = ({ filter, search, sort }) => {
  const filterToSend = _.pickBy(filter, (value) => value.length > 0);
  const sortToSend = _.pickBy(sort, (value) => value !== "");

  const apiUrl = `api/jobs?filters=${
    Object.keys(filterToSend).length > 0
      ? encodeURIComponent(JSON.stringify(filterToSend))
      : ""
  }&search=${encodeURIComponent(search)}&sort=${
    Object.keys(sortToSend).length > 0
      ? encodeURIComponent(JSON.stringify(sortToSend))
      : ""
  }`;

  return apiUrl;
};
