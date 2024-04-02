import React from "react";
import Icon from "../assets/paw_icon.png";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
};

const TermsContent = (props: Props) => {
  const { title, description } = props;

  return (
    <div>
      <div className="flex items-center gap-2">
        <Image src={Icon} alt="" className="w-6" />
        <span className="text-white sm:text-xl text-lg font-semibold">
          {title}
        </span>
      </div>
      <div className="text-xs sm:text-sm text-white sm:text-start text-justify mt-2">
        {description}
      </div>
    </div>
  );
};

export default TermsContent;
