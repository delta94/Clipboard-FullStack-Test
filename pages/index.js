import React, { useContext } from "react";
import _ from "lodash";
import SearchBar from "../src/components/SearchBar";
import FilterSection from "../src/components/FilterSection";
import JobSection from "../src/components/JobSection";
import FilterModal from "../src/components/FilterModal";
import { Store } from "../src/context/context";

const Home = () => {
  const { state } = useContext(Store);
  const { modal } = state;

  return (
    <>
      <SearchBar />
      <div className="flex flex-1 lg:px-4">
        <FilterSection />
        <JobSection />
      </div>
      {modal && <FilterModal />}
    </>
  );
};

export default Home;
