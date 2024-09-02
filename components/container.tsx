import type { NextPage } from "next";

export type ContainerType = {
  className?: string;
};

const Container: NextPage<ContainerType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[123px] left-[0px] w-[749px] flex flex-col items-start justify-start pt-[245px] pb-[379px] pl-[227px] pr-[68px] box-border gap-[47px] max-w-full text-left text-45xl text-gray-200 font-league-spartan ${className}`}
    >
      <h1 className="m-0 w-[283px] relative text-inherit font-medium font-inherit inline-block [filter:drop-shadow(0px_4px_92px_rgba(0,_0,_0,_0.25))] z-[1] mq450:text-19xl mq767:text-32xl">
        <span>Step</span>
        <span className="text-darkgray">{` `}</span>
        <span className="text-whitesmoke">4</span>
      </h1>
      <div className="w-[86px] h-0.5 relative border-cornflowerblue border-t-[2px] border-solid box-border z-[1]" />
      <div className="w-[1103px] h-[1071.1px] absolute !m-[0] bottom-[-150.1px] left-[-354px]">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(59,_149,_255,_0.17),_rgba(28,_106,_197,_0))] w-full h-full" />
        <div className="absolute top-[400px] left-[581px] rounded-[50%] bg-gold w-4 h-4 z-[1]" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full text-9xl text-palegoldenrod-100">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-8 pr-0 box-border max-w-full">
          <div className="flex-1 relative font-medium inline-block [text-shadow:0px_4px_13.4px_rgba(0,_0,_0,_0.25)] max-w-full z-[1] mq450:text-3xl">
            Tenant gets approved to move-in :
          </div>
        </div>
        <div className="w-[381px] relative leading-[92.86%] text-whitesmoke inline-block [text-shadow:0px_4px_13.4px_rgba(0,_0,_0,_0.25)] max-w-full z-[1] mq450:text-3xl mq450:leading-[21px]">
          <ul className="m-0 font-inherit text-inherit pl-[37px]">
            <li className="mb-3.5">Gets Zero-security deposit approval</li>
            <li>Zero cost EMI = Monthly Rent</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Container;
