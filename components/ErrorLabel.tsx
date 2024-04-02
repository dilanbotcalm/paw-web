import React from "react";

type Props = {
  errorMessage: string; // Define a prop for the error message
};

const ErrorLabel = (props: Props) => {
  return (
    <div className="flex items-center justify-center w-full">
      <span className="w-full max-w-xl p-2 bg-[#6B0909] text-center text-sm sm:text-base  rounded-2xl">
        {props.errorMessage} {/* Use the errorMessage prop */}
      </span>
    </div>
  );
};

export default ErrorLabel;
