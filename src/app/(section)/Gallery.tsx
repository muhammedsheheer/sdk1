import Image from "next/image";
import React from "react";
import SpecialPopup2 from "./SpecialPopup2";

const images = [
  {
    image: "/images/home/gallery/1.jpg",
    date: "Sundays 50 % off sushi",
    food: "T&C only one offer at the time can be used.",
    name: "Sundays 50 % off sushi",
  },
  {
    image: "/images/home/gallery/2.jpg",
    date: "Monday to Thursday 50% of Shisha",
    food: "T&C only one offer at the time can be used.",
    name: "Monday to Thursday 50% of Shisha",
  },
  {
    image: "/images/home/gallery/3.jpg",
    time: "Happy hour Monday- Tuesday 6-7pm ",
    food: "T&C only one offer at the time can be used.",
    name: "Happy hour Monday- Tuesday 6-7pm ",
  },
  {
    image: "/images/home/gallery/4.jpg",
    food: "T&C only one offer at the time can be used.",
    dj: "Friday live DJ 8 -2am",
    name: "Friday live DJ 8 -2am",
  },
  // {
  //   image: "/images/home/highlights/image2.png",
  //   food: "T&C only one offer at the time can be used.",
  //   dj: "Saturday Live Dj 8 - 2am and Fire show girl dance ",
  //   name: "Saturday Live Dj 8 - 2am and Fire show girl dance",
  // },
  // {
  //   image: "/images/home/highlights/image3.png",
  //   food: "T&C only one offer at the time can be used.",
  //   dj: "live Dj 7-12 am",
  //   name: "live Dj 7-12 am",
  // },
  // {
  //   image: "/images/home/highlights/image3.png",
  //   food: "T&C only one offer at the time can be used.",
  //   name: "Electric Shisha at £25",
  // },
];
const Gallery: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] px-4 pb-2 pt-12 md:px-10 md:pb-8 md:pt-12">
      <div className="flex flex-col items-center justify-center gap-8 md:gap-16">
        <h6 className="text-center font-sofia_sans text-4xl font-[400] uppercase text-[#11331B] md:text-5xl">
          A Place To Unwind
        </h6>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-6">
          {/* <Image
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
          /> */}
          {images.map((item, index) => (
            <div key={index}>
              <SpecialPopup2 item={item}>
                <Image
                  src={item?.image}
                  alt="right"
                  width={417}
                  height={531}
                  className="h-[200px] w-full object-cover hover:cursor-pointer md:h-[350px]"
                />
              </SpecialPopup2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
