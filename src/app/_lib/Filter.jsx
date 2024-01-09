"use client";

import { useState } from "react";

export default function Filter({ setFilter }) {
  const [filterBy, setFilterBy] = useState();
  const filterOnChange = (e) => {
    setFilterBy(e.target.value);
  };
  const submitFilter = (e) => {
    e.preventDefault();
    setFilter(filterBy);
  };
  return (
    <div className="mt-5 mb-5">
      <form className="text-center" onSubmit={submitFilter}>
        <label>Filter by:</label>

        <select
          name="pets"
          id="pet-select"
          className="pl-1 ml-1 rounded text-gray-700 font-bold resize w-1/4 h-8 "
          onChange={filterOnChange}
        >
          <option value="">--Please choose an option--</option>
          <option value="user_id-desc">Newest Pirates</option>
          <option value="user_id-asc">Oldest Pirates</option>
          <option value="treasure_count-desc">Richest Pirates</option>
          <option value="treasure_count-asc">Poorest Pirates</option>
        </select>
        <button className="w-auto ml-1 text-center mx-auto mt-1 px-2 py-1 tracking-wide text-white transition-colors duration-200 transform rounded focus:outline-none bg-gray-800 hover:bg-green-600 cursor-pointer ">
          Apply
        </button>
      </form>
    </div>
  );
}