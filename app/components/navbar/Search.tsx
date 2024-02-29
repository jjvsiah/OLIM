"use client";
import { BiSearch } from 'react-icons/bi'

const Search = () => {
  return (
    <div
      className="
        border-[1px]
        w-full
        md:w-auto
        py-2
        rounded-full
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer


        "
    >
      <div
        className="
            flex
            flex-row
            items-center
            justify-between
        "
      >
        <div
            className="
            text-sm
            font-semibold
            px-6
        "
        >
            Search Coaches
        </div>
        <div
            className="
                p-2
                bg-yellow-600
                rounded-full
                text-white
                
            "
        >
            <BiSearch size = {18} />

        </div>
      </div>
    </div>
  );
};

export default Search;
