import axios from "axios";
import { generateApiUrl } from "../utils/helper";
import _ from "lodash";

export const getFilters = async () => {
  const filters = await axios("/api/filters");
  return filters.data;
};

export const getJobs = async ({ filter, search, sort }) => {
  const apiUrl = generateApiUrl({
    filter,
    search,
    sort,
  });
  const jobs = await axios(apiUrl);
  return jobs.data;
};
