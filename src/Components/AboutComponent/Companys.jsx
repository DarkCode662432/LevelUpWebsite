import React from "react";

// Import your logos here
import logo1 from "../../../public/assets/images/company/logo-blab.svg";
import logo2 from "../../../public/assets/images/company/EY_logo_2019.svg";
import logo3 from "../../../public/assets/images/company/tuck-school-of-business.svg";
import logo4 from "../../../public/assets/images/company/general-electric.svg";
import logo5 from "../../../public/assets/images/company/London_Business_School_logo.svg";
import logo6 from "../../../public/assets/images/company/stanford-university.svg";
import logo7 from "../../../public/assets/images/company/pwc.svg";
import logo8 from "../../../public/assets/images/company/hbs.png";
import logo9 from "../../../public/assets/images/company/University_of_Cambridge-Logo.wine.svg";
import logo10 from "../../../public/assets/images/company/UK_Export_Finance_logo.svg";
import logo11 from "../../../public/assets/images/company/network-rail-vector-logo.svg";
import logo12 from "../../../public/assets/images/company/mckinsey.svg";
import logo13 from "../../../public/assets/images/company/hp.svg";
import logo14 from "../../../public/assets/images/company/HM-Treasury.svg";
import logo15 from "../../../public/assets/images/company/mit.svg";
import logo16 from "../../../public/assets/images/company/iema-1.svg";
import logo17 from "../../../public/assets/images/company/KPMG_logo.svg";
import logo18 from "../../../public/assets/images/company/sustainalytics.svg";
import logo19 from "../../../public/assets/images/company/deloitte.svg";
import logo20 from "../../../public/assets/images/company/Salesforce.com_logo.svg";
import logo21 from "../../../public/assets/images/company/pvh.svg";
import logo22 from "../../../public/assets/images/company/qatar-foundation-logo-vector.svg";
import logo23 from "../../../public/assets/images/company/Cognizant_logo_2022.svg";
import logo24 from "../../../public/assets/images/company/Protiviti_logo.svg";

const logos = [
  logo1, logo2, logo3, logo4, logo5,
  logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15,
  logo16, logo17, logo18, logo19, logo20,
  logo21, logo22, logo23, logo24,
];

const Companys = () => {
  return (
    <div className="container mx-auto mt-20 px-[5%]">
      <h1 className="text-3xl md:text-5xl text-center font-extrabold mb-16 text-[#112b65]">
        Our ESG experts have worked with the best companies in every category
      </h1>
      <div className="grid grid-cols-2 place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 justify-items-center gap-2">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-full h-auto sm:w-20 scale-75 md:w-24 lg:w-28 xl:w-32 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Companys;
