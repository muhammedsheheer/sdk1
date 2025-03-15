import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] py-12 md:py-24">
      <div className="absolute -left-[280px] top-0 hidden md:block">
        <h1
          className="text-center font-open_sans text-8xl font-[600] uppercase md:text-[550px]"
          style={{
            background:
              "linear-gradient(180deg, #EBC488 -39.86%, #171711  99.71%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          DK
        </h1>
      </div>
      <div className="absolute -right-[230px] top-0 hidden md:block">
        <div>
          <h1
            className="text-center font-open_sans text-8xl font-[600] uppercase md:text-[550px]"
            style={{
              background:
                "linear-gradient(180deg, #EBC488 -39.86%, #171711  99.71%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SD
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 md:px-0">
        <span className="font-birthstone text-2xl font-[400] tracking-[0.76px] text-[#8C7753]">
          highlights
        </span>
        <h6 className="text-center font-sofia_sans text-4xl font-[400] uppercase text-[#11331B] md:text-6xl">
          Reserve <br />
          Your Table
        </h6>
        <p className="w-full max-w-[450px] text-center font-inter text-sm font-[300] text-[rgba(156,158,159,0.60)] md:text-base">
          Lorem ipsum dolor sit amet, consectet adipisicing eli sed do eiu sm od
          tempor incididunt ut abore et dolore mag aliqua. Ut enim ad minm eniam
          quis nostrud.
        </p>
        <div className="">
          <Link href={"/table-booking"}>
            <Button
              className="relative z-40 mt-4 flex items-center justify-center gap-3 px-7 py-7 uppercase text-[#fff]"
              variant="imageB"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
