import React from "react";
import { Input } from "../ui/input";

const IconInput = ({ field }) => {
  return (
    <div className="relative flex-row-reverse z-10 flex space-x-3 p-1 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
      <div className="flex-[1_0_0%]">
        <label
          htmlFor="hs-search-article-1"
          className="block text-sm text-gray-700 font-medium dark:text-white"
        >
          <span className="sr-only">Search article</span>
        </label>
        <Input placeholder="Type username" {...field} />
      </div>
      <div className="flex-[0_0_auto]">
        <a
          className="size-[35px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default IconInput;
