import type { NextPage } from "next";

export type OnboardingType = {
  className?: string;
};

const Onboarding: NextPage<OnboardingType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[26px] left-[0px] w-[749px] flex flex-col items-start justify-start pt-[428px] pb-[391px] pl-[295px] pr-0 box-border gap-[47px] max-w-full text-left text-45xl text-gray-200 font-league-spartan ${className}`}
    >
      <h1 className="m-0 w-[283px] relative text-inherit font-medium font-inherit inline-block [filter:drop-shadow(0px_4px_92px_rgba(0,_0,_0,_0.25))] z-[1] mq450:text-19xl mq767:text-32xl">
        <span>Step</span>
        <span className="text-darkgray">{` `}</span>
        <span className="text-whitesmoke">3</span>
      </h1>
      <div className="w-[86px] h-0.5 relative border-cornflowerblue border-t-[2px] border-solid box-border z-[1]" />
      <div className="w-[1103px] h-[1071.1px] absolute !m-[0] bottom-[-53.1px] left-[-356px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(59,_149,_255,_0.17),_rgba(28,_106,_197,_0))] w-full h-full" />
        <div className="absolute top-[583px] left-[651px] rounded-[50%] bg-gold w-4 h-4 z-[1]" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-8 pr-0 box-border max-w-full text-5xl text-palegoldenrod-100">
        <div className="flex-1 relative tracking-[-0.02px] font-medium inline-block [text-shadow:0px_4px_13.4px_rgba(0,_0,_0,_0.25)] min-h-[44px] max-w-full z-[1] mq450:text-lgi">
          Smooth Onboarding for the Tenant begins
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
