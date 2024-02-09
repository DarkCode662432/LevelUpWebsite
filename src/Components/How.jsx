import React from "react";
import PrimaryButton from "./Buttons/PrimaryButton";

const How = ({ solutions, buttonTitle, buttonPath }) => {
  return (
    <div className="w-full flex justify-center">
      <section className="max-w-[1400px] py-20 px-[5%]">
        <div className="w-full justify-center flex py-4 pb-8">
          <div className="bg-[#02c2ab] aspect-square w-[116px] h-[116px] p-2 relative shadow-2xl shadow-[#02c2ab] rounded-[2rem]">
            {/* Animation or icon */}
          </div>
        </div>
        <div className="container text-[#002E70] mx-auto">
          <h2 className="mb-4 text-4xl text-center max-w-[1200px] font-extrabold tracking-tight leading-none text-[#002E70] md:text-5xl lg:text-6xl ">
            Here&apos;s how we can help
          </h2>
          <div className="mx-auto pt-12 h-full max-w-[1400px] p-2">
            <div className="grid grid-cols-1 justify-center gap-6 md:grid-cols-2 ">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="p-6 bg-[#02c2ab]/30 hover:bg-[#02c2ab] duration-500 cursor-pointer hover:scale-105 rounded-lg shadow-md"
                >
                  <h3 className="text-2xl !font-extrabold text-[#112b65]  mb-4">
                    {solution.name}
                  </h3>
                  <p className="text-lg text-[#112b65]">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <PrimaryButton path={buttonPath} title={buttonTitle} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default How;
