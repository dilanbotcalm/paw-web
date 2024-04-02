import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";

const HomeSection2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full h-[35px] px-[10.56px] mt-16 min-w-[960px] ">
      <div className="flex items-center w-full max-w-[300px] h-[35px] rounded-full border-[0.41px] border-white mb-4 md:mb-0 md:mr-4 md:mt-0">
        <RiSearch2Line className="h-5 w-5 text-white ml-2" />
        <input
          className="outline-none bg-transparent placeholder-white text-white pl-2 ml-2 w-full"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-[19px]">
        <Button className="w-[131px] h-[34px] border rounded-full bg-transparent text-[10px] hover:bg-blue-800 hover:border-gray-800 md:mr-2">
          Become a Delegator
        </Button>
        <Button className="w-[131px] h-[34px] border rounded-full bg-transparent text-[10px] hover:bg-gray-800 hover:border-gray-800">
          Become a Validator
        </Button>
      </div>
    </div>
  );
};

export default HomeSection2;
