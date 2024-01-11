"use client";

import { useState } from "react";

export default function Filter({ setFilter }) {
  const [filterBy, setFilterBy] = useState("treasure_count-desc");
  const filterOnChange = (e) => {
    setFilterBy(e.target.value);
  };
  const submitFilter = (e) => {
    e.preventDefault();
    setFilter(filterBy);
  };
  return (
    <div className="mt-5 mb-5 px-2 mx-auto flex text-center  py-2">
      <form className="text-center" onSubmit={submitFilter}>
        <label className="text-teal-800 text-lg">Filter by:</label>

        <select
          name="pets"
          id="pet-select"
          className="md:pl-1 ml-2 mr-2 rounded w-auto text-teal-800 font-bold first-line  h-8  "
          onChange={filterOnChange}
        >
          <option value="treasure_count-desc">Richest Pirates</option>
          <option value="treasure_count-asc">Poorest Pirates</option>
          <option value="user_id-desc">Newest Pirates</option>
          <option value="user_id-asc">Oldest Pirates</option>
        </select>
        <button className="w-auto md:ml-2 text-center mx-auto mt-1 px-2 py-1 tracking-wide text-teal-500 transition-colors duration-200 transform rounded focus:outline-none bg-white hover:bg-teal-500 hover:text-white cursor-pointer ">
          Apply
        </button>
      </form>
    </div>
  );
}