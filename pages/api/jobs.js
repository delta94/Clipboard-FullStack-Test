// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import filters from "../../data/filters";
import jobs from "../../data/jobs.json";
import _ from "lodash";

export default async (req, res) => {
  res.statusCode = 200;
  // @todo: implement filters and search
  // @todo: implement automated tests

  let result = [...jobs];

  const { filters, search, sort } = req.query;

  const jobsBySearch = [];
  const jobsByFilter = [];

  /*---------------------------------------------- Search jobs --------------------------------------------- */

  if (search) {
    const searchQuery = decodeURIComponent(search).toLowerCase();

    result.forEach((hospital) => {
      const { items } = hospital;
      const filteredJobs = items.filter((job) => {
        let hasSearch = false;
        hasSearch = Object.values(job).some((value) => {
          if (typeof value === "string") {
            return value.toLowerCase().includes(searchQuery);
          } else if (typeof value === "object") {
            return value.some((item) => {
              if (typeof item === "number") return false;
              return item.toLowerCase().includes(searchQuery);
            });
          }
          return false;
        });
        return hasSearch;
      });

      if (filteredJobs.length > 0) {
        jobsBySearch.push({
          ...hospital,
          total_jobs_in_hospital: filteredJobs.length,
          items: filteredJobs,
        });
      }
    });

    result = jobsBySearch;
  }

  /*---------------------------------------------- Filter jobs --------------------------------------------- */

  if (filters) {
    const filtersQueryObj = JSON.parse(
      decodeURIComponent(filters).toLowerCase()
    );
    const filterTypes = Object.keys(filtersQueryObj);

    result.forEach((hospital) => {
      const { items } = hospital;
      const filteredJobs = items.filter((job) => {
        return filterTypes.every((filterType) => {
          if (typeof job[filterType] === "string") {
            return filtersQueryObj[filterType].includes(
              job[filterType].toLowerCase()
            );
          } else if (typeof job[filterType] === "object") {
            return job[filterType].some((el) =>
              filtersQueryObj[filterType].includes(el.toLowerCase())
            );
          }
        });
      });

      if (filteredJobs.length > 0) {
        jobsByFilter.push({
          ...hospital,
          total_jobs_in_hospital: filteredJobs.length,
          items: filteredJobs,
        });
      }
    });

    result = jobsByFilter;
  }

  /*---------------------------------------------- Sort jobs --------------------------------------------- */
  if (sort) {
    const sortOptions = JSON.parse(decodeURIComponent(sort).toLowerCase());
    const sortOptionKeys = Object.keys(sortOptions);
    const sortOptionValues = Object.values(sortOptions);

    //replace "role", "education" with "job_title", "required_crendentials" if "role" and "education" exists in sort options
    sortOptionKeys.forEach((key, index) => {
      if (key === "role") sortOptionKeys[index] = "job_title";
      else if (key === "education")
        sortOptionKeys[index] = "required_credentials";
    });

    //sort jobs in every hospital by multiple sort options
    let sortedResult = result.map((hospital) => {
      return {
        ...hospital,
        items: _.orderBy(
          hospital.items,
          [...sortOptionKeys],
          [...sortOptionValues]
        ),
      };
    });

    //sort hospitals by multiple sort options based on the first job in each hospital
    sortedResult = _.orderBy(
      sortedResult,
      sortOptionKeys.map((key) => `items.0.${key}`),
      [...sortOptionValues]
    );

    result = sortedResult;
  }
  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));
  res.json(result);
};
