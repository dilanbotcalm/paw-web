import { cardData } from '../data/data';
import Image from "next/image";

const HomeSection1 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-[12px] ml-4 md:ml-3 mr-4 md:mr-3 md:mt-[11px] mt-[5px]">
      {cardData.map((card, index) => (
        <div key={index} className="bg-[#064986] shadow-md rounded-lg p-4 relative">
        
          <img
            src="/export.png"
            alt="Export Image"
            className="absolute bottom-[65px] left-[235px] rounded-br-lg"
            style={{ width: '32px', height: '32px' }}
          />
          <div className="relative z-10">
            <h3 className="text-white text-[6px] md:text-[13px] font-normal mb-2">{card.title}</h3>
            <p className="text-white text-base md:text-lg mb-2">{card.description}</p>
            <p className="text-white text-xs md:text-sm font-normal">{card.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeSection1;
