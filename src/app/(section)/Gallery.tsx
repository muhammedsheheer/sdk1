import Image from "next/image";
import React from "react";

const Gallery: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] px-4 pb-2 pt-12 md:px-10 md:pb-8 md:pt-12">
      <div className="flex flex-col items-center justify-center gap-8 md:gap-16">
        <h6 className="text-center font-sofia_sans text-4xl font-[400] uppercase text-[#11331B] md:text-5xl">
          A Place To Unwind
        </h6>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-6">
          <Image
            src={"/images/home/gallery/1.jpg"}
            width={281}
            height={74}
            alt="image"
            className="h-[300px] w-full object-cover md:h-[350px]"
          />
          <Image
            src={"/images/home/gallery/2.jpg"}
            width={281}
            height={74}
            alt="image"
            className="h-[300px] w-full object-cover md:h-[350px]"
          />
          <Image
            src={"/images/home/gallery/3.jpg"}
            width={281}
            height={74}
            alt="image"
            className="h-[300px] w-full object-cover md:h-[350px]"
          />
          <Image
            src={"/images/home/gallery/4.jpg"}
            width={281}
            height={74}
            alt="image"
            className="h-[300px] w-full object-cover md:h-[350px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
