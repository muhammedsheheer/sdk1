"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SpecialPopup from "./SpecialPopup";

const images = [
  {
    image: "/images/home/highlights/image1.png",
    date: "Sundays 50 % off sushi",
    food: "T&C only one offer at the time can be used.",
    name: "Sundays 50 % off sushi",
  },
  {
    image: "/images/home/highlights/image2.png",
    date: "Monday to Thursday 50% of Shisha",
    food: "T&C only one offer at the time can be used.",
    name: "Monday to Thursday 50% of Shisha",
  },
  {
    image: "/images/home/highlights/image3.png",
    time: "Happy hour Monday- Tuesday 6-7pm ",
    food: "T&C only one offer at the time can be used.",
    name: "Happy hour Monday- Tuesday 6-7pm ",
  },
  {
    image: "/images/home/highlights/image1.png",
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

const Latest = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to(".latest-one", {
        scrollTrigger: {
          trigger: ".latest-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });

      gsap.to(".latest-two", {
        scrollTrigger: {
          trigger: ".latest-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        duration: 0.8,
      });
    });

    mm.add("(min-width:501px)", () => {
      gsap.to(".latest-one", {
        scrollTrigger: {
          trigger: ".latest-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
      gsap.to(".latest-two", {
        scrollTrigger: {
          trigger: ".latest-two",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        duration: 0.8,
      });
    });
    gsap.to(".latest-arrow", {
      scrollTrigger: {
        trigger: ".latest-arrow",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      duration: 0.8,
    });
    gsap.to(".carousal-item", {
      scrollTrigger: {
        trigger: ".carousal-item",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      opacity: 1,
      duration: 0.8,
    });
    const splitType = document.querySelectorAll(".head-latest");
    splitType.forEach((char) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" });
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.2,
        });
      }
    });
  }, []);
  return (
    <section
      id="welcome"
      className="relative flex w-full items-center justify-center bg-[#fff]"
    >
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute left-0 top-0 hidden h-full w-full items-start justify-center md:flex"></div>
      <div className="relative flex h-fit w-full max-w-[1300px] flex-col items-center justify-center gap-9 overflow-hidden bg-transparent px-3 py-12 lg:flex-row lg:gap-0 lg:p-0 lg:py-24">
        <div className="z-30 flex h-full w-full flex-col items-center justify-center gap-5 lg:items-center lg:gap-9">
          <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/2">
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <p className="latest-one font-birthstone text-xl font-[200] text-[#8C7753] md:-ml-[50px] md:text-3xl">
                Latest
              </p>
              <p className="styled_section_head non-italic flex items-center justify-center gap-3 text-center uppercase tracking-[8px] text-primary md:tracking-[10.56px]">
                {/* <Image
                  src="/images/left.png"
                  alt="left"
                  width={44}
                  height={12}
                  className="latest-arrow w-fit"
                  style={{
                    transform: "scale(0.5)",
                  }}
                /> */}
                <span className="head-latest font-open_sans text-[36px] font-normal text-[#11331B] xl:text-[46px]">
                  What`s on
                  <br />
                  this week
                </span>
                {/* <Image
                  src="/images/right.png"
                  alt="right"
                  width={44}
                  height={12}
                  className="latest-arrow h-fit w-fit"
                  style={{
                    transform: "scale(0.5)",
                  }}
                /> */}
              </p>
            </div>
          </div>
          <Carousel
            className="carousal-item hidden w-full md:block md:w-[1100px]"
            style={{
              transform: "scale(1.3)",
              opacity: 0,
            }}
          >
            <CarouselContent className="">
              {images.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="flex basis-1/2 justify-center md:basis-1/3"
                >
                  <SpecialPopup item={item}>
                    <Image
                      src={item?.image}
                      alt="right"
                      width={417}
                      height={531}
                      className="about-arrow w-full hover:cursor-pointer md:h-[450px] md:w-[330px]"
                    />
                  </SpecialPopup>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="left-4 top-1/2 hidden h-12 w-12 bg-[#0e1719] text-primary shadow-2xl outline-none md:flex"
              variant="default"
            />
            <CarouselNext
              className="top-1/2 mr-8 hidden h-12 w-12 bg-[#0e1719] text-primary shadow-2xl outline-none md:flex"
              variant="default"
            />
            <div className="flex items-center justify-center gap-7 pt-12 md:hidden">
              <CarouselPrevious
                className="static h-12 w-12 bg-[#0e1719] text-primary shadow-2xl outline-none"
                variant="default"
              />
              <CarouselNext
                className="static h-12 w-12 bg-[#0e1719] text-primary shadow-2xl outline-none"
                variant="default"
              />
            </div>
          </Carousel>
          <div className="grid grid-cols-2 gap-2 md:hidden">
            {images.map((item, index) => (
              <SpecialPopup key={index} item={item}>
                <Image
                  src={item.image}
                  width={281}
                  height={74}
                  alt="image"
                  className="h-auto w-full hover:cursor-pointer"
                />
              </SpecialPopup>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest;
