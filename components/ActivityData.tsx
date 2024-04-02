import React from "react";
import Image from "next/image";


type Props = {
  name: string;
  icon:StaticImageData
  description: string;
  amount: number;
  paymentStatus: boolean;
};

const ActivityData = ({ name, icon, description, amount, paymentStatus }: Props) => {
  return (
    <div className="flex items-center justify-between px-5 py-3 sm:py-4 hover:bg-[#0B183B] rounded-2xl text-white cursor-pointer">
      <div className="flex items-center justify-start gap">
        <div className="">
          <Image src={icon} alt="" className="w-7 sm:w-8" />
        </div>
        <div className="flex flex-col  gap-0">
          <span className="text-sm sm:text-base">{name}</span>
          <span className="text-[10px] sm:text-xs text-gray-400">
            {description}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <span className="text-sm sm:text-base">{amount} PAW</span>
        <span className={`text-[10px] sm:text-xs ${paymentStatus ? 'text-[#61adeb]' : 'text-[#ff1818]'}`}>
          {paymentStatus ? 'Success' : 'Failed'}
        </span>
      </div>
    </div>
  );
};

export default ActivityData;
