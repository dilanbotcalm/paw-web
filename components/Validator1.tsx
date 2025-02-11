import React from "react";
import { Button } from "@nextui-org/react";
import { RiSearch2Line } from "react-icons/ri";

const Validator1 = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-2 md:px-2 md:mt-[31px] mt-[20px]">
      <div className="pb-4   flex items-center justify-between">
        <div className="relative mt-1 w-[25%]">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center pl-3 pointer-events-none">
            <div className="flex items-center w-full max-w-[300px] h-[35px] rounded-full border-[0.41px] border-white mb-4 md:mb-0 md:mr-4 md:mt-0">
              <RiSearch2Line className="h-5 w-5 text-white ml-2" />
              <input
                className="outline-none bg-transparent placeholder-white text-white pl-2 ml-2 w-full"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-[19px] py-2 px-2">
          <Button className="h-[34px] w-[134px] text-[10px] rounded-[46px] bg-white text-black py-2 px-4">
          Become a Delegator
          </Button>
          <Button className="h-[34px] w-[134px] text-[10px] rounded-[46px] bg-white text-black py-2 px-4">
          Become a Validator
          </Button>
        </div>
      </div>
     
      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-xs uppercase text-left text-white font-semibold bg-gray-900">
          <tr>
            <th scope="col" className="p-4">
              Product name
            </th>
            <th scope="col" className="p-4">
              Color
            </th>
            <th scope="col" className="p-4">
              Category
            </th>
            <th scope="col" className="p-4">
              Price
            </th>
            <th scope="col" className="p-4">
              Price
            </th>
            <th scope="col" className="p-4">
             
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="dark:bg-gray-900">
            <th
              scope="row"
              className="px-6 py-4 font-semibold text-white align-top"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4 text-white align-top">Silver</td>
            <td className="px-6 py-4 text-white align-top">Laptop</td>
            <td className="px-6 py-4 text-white align-top">$2999</td>
            <td className="px-6 py-4 text-white align-top">$2999</td>
            <Button className="h-[34px] w-[94px] text-[8px] rounded-[23px] border-[0.46px] text-white py-2 px-2 mt-2">
          Delegate
          </Button>
          </tr>
          <tr className="dark:bg-gray-900">
            <th
              scope="row"
              className="px-6 py-4 font-semibold text-white align-top"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4 text-white align-top">White</td>
            <td className="px-6 py-4 text-white align-top">Laptop PC</td>
            <td className="px-6 py-4 text-white align-top">$1999</td>
            <td className="px-6 py-4 text-white align-top">$1999</td>
            <Button className="h-[34px] w-[94px] text-[8px] rounded-[23px] border-[0.46px] text-white py-2 px-2 mt-2">
         Delegate
          </Button>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Validator1;

