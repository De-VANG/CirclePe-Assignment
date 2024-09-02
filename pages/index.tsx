import type { NextPage } from "next";
import Onboarding from "../components/onboarding";

const MacBookPro143: NextPage = () => {
  return (
    <div className="w-full h-[1044px] relative bg-gray-300 overflow-hidden leading-[normal] tracking-[normal]">
      <Onboarding />
      <div className="absolute h-full top-[0px] bottom-[0px] left-[605px] w-[907px]">
        <img
          className="absolute top-[80px] left-[210px] rounded-[45px] w-[372px] h-[778.1px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/screenshot-20240213-at-217-1@2x.png"
        />
        <div className="absolute h-full top-[0px] bottom-[0px] left-[394px] w-[513px]">
          <div className="absolute top-[-15px] left-[0px] bg-gray-400 w-[513px] h-[1059px]" />
          <img
            className="absolute top-[392px] left-[295px] w-0 h-[283px] z-[1]"
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
        </div>
        <img
          className="absolute top-[577px] left-[0px] w-[284.2px] h-[282.3px] object-contain z-[2]"
          alt=""
          src="/18-1@2x.png"
        />
      </div>
    </div>
  );
};

export default MacBookPro143;
