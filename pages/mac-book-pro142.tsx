import type { NextPage } from "next";
import Container from "../components/container";

const MacBookPro142: NextPage = () => {
  return (
    <div className="w-full h-[1044px] relative bg-gray-300 overflow-hidden leading-[normal] tracking-[normal]">
      <Container />
      <section className="absolute h-full top-[0px] bottom-[0px] left-[582px] w-[930px]">
        <img
          className="absolute top-[69px] left-[167px] rounded-[41px] w-[372px] h-[778.1px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/screenshot-20240213-at-217-11@2x.png"
        />
        <div className="absolute h-full top-[0px] bottom-[0px] left-[417px] w-[513px]">
          <div className="absolute top-[-15px] left-[0px] bg-gray-400 w-[513px] h-[1059px]" />
          <img
            className="absolute top-[392px] left-[295px] w-0 h-[283px] z-[1]"
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
        </div>
        <img
          className="absolute top-[637px] left-[0px] w-[229.4px] h-[217.3px] object-contain z-[2]"
          alt=""
          src="/icecream@2x.png"
        />
      </section>
    </div>
  );
};

export default MacBookPro142;
