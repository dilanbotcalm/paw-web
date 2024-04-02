import { Button } from "@/components/ui/button";

const MyAccount = () => {
  return (
    <div className="flex flex-col md:flex-row mb:mt-[116px] mt-[40px] ">
      <div className="w-full md:w-[375px] h-auto md:p-2 md:ml-[10%] ml-0 md:mr-[71px] ">
        <div className="md:text-right text-center text-white text-[11px] mb-[11px]">
          PAW Wallet Balance
        </div>
        <div className="md:text-right text-center text-white text-[40px] mb-[11px]">
          0 PAW
        </div>
        <div className="md:text-right text-center text-white text-[11px]">
          $0.00
        </div>
      </div>

      <div className="w-full md:w-auto h-auto md:p-2 p-[21.5px] md:mr-[275px] ">
        <div className="flex flex-col h-full">
          <button className="w-180 h-35 px-[33px] py-[9px] mb-[20px] md:mb-[40.33px] text-white text-[12px] rounded-[8px] focus:outline-none bg-[#121C] hover:bg-[#2D1E2F]">
            Become Validator
          </button>
          <button className="w-180 h-35 px-[33px] py-[9px] text-white text-[12px] rounded-[8px] focus:outline-none bg-[#1766AA] hover:bg-[#2D73CD]">
            Become Delegator
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
