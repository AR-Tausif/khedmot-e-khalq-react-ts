import React from "react";
import DonorsTable from "./DonorsTable";

const Donors = () => {
  return (
    <div className="bg-white rounded-sm border border-gray-300 min-h-full p-5 mt-14">
      <div className="">
        <DonorsTable />
      </div>
    </div>
  );
};

export default Donors;
