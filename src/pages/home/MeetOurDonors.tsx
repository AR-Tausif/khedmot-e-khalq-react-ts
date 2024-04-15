import DonorBox from "@/components/shared/DonorBox";
import FilterButton from "@/components/shared/FilterButton";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import React from "react";

const MeetOurDonors = ({ donors, setDonors }) => {
  const donorsAPI = "https://khuddam-care.vercel.app/api/v1/donors";
  console.log(donors);

  const todayDate = format(new Date(), "yyyy-MM-dd");
  const handleToday = () => {
    fetch(`${donorsAPI}?suitDate=${todayDate}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDonors(data.data);
      });
  };
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center ">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Meet Our Top Donors
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Active Donors</p>
        <div className="py-2">
          <Separator />
        </div>
      </div>
      {/* End Title */}
      <div className="my-3 flex justify-center flex-wrap gap-3 space-x-2">
        <FilterButton handleToday={handleToday} text="Today" />
        <FilterButton handleToday={handleToday} text="This Month" />
        <FilterButton handleToday={handleToday} text="This Week" />
        <FilterButton handleToday={handleToday} text="Active" />
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dynamic element start here */}

        {donors ? (
          donors.map((donor) => <DonorBox donor={donor} key={donor._id} />)
        ) : (
          <div>
            {" "}
            <h1 className="text-center">Oppps, Donors not available.</h1>
          </div>
        )}

        {/* End Col */}
        <a
          className="col-span-full lg:col-span-1 group flex flex-col justify-center text-center rounded-xl p-4 md:p-6 border border-dashed border-gray-200 hover:shadow-sm dark:border-gray-700"
          href="/login"
        >
          <h3 className="text-lg text-gray-800 dark:text-gray-200">
            Want to add Donor?
          </h3>
          <div>
            <span className="inline-flex items-center gap-x-2 text-blue-600 group-hover:text-blue-700 dark:text-blue-500 dark:group-hover:text-blue-400">
              Lets try to create donor
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </div>
        </a>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default MeetOurDonors;
