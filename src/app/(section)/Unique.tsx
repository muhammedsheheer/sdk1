import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Unique: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#FFF] py-12 md:py-28">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="font-birthstone text-2xl font-[400] tracking-[0.76px] text-[#8C7753]">
            Our story
          </span>
          <h6 className="text-center font-sofia_sans text-4xl font-[400] uppercase text-[#11331B] md:text-5xl">
            What makes us unique{" "}
          </h6>
          <div className="flex flex-col items-center justify-center px-4 md:px-0">
            <p className="w-full max-w-[570px] text-center font-lora text-sm font-[400] lowercase text-[#9C9E9F] md:text-base">
              We blend Mediterranean elegance with bold Pan-Asian flavours,
              crafting innovative sushi and premium seafood dishes using the
              finest ingredients. Every bite offers a perfect balance of
              tradition, freshness, and unforgettable taste.
            </p>
          </div>
        </div>{" "}
        <div className="flex w-full flex-col gap-4 px-4 pt-8 md:flex-row md:px-10">
          <div className="w-full md:w-[33%]">
            <Image
              src={"/images/home/story/image2.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full md:h-[450px]"
            />
          </div>
          <div className="relative h-[350px] w-full md:h-[450px] md:w-[34%]">
            <div className="absolute -top-6 left-3 md:left-10">
              {/* first */}
              <div className="flex flex-row gap-4">
                <div>
                  <div>
                    {" "}
                    <h1
                      className="text-center font-open_sans text-8xl font-[600] uppercase tracking-[-10px] md:text-[116px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #EBC488 -39.86%, #171711  100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK
                    </h1>{" "}
                  </div>
                </div>
                <div>
                  <div>
                    {" "}
                    <h1
                      className="text-center font-open_sans text-8xl font-[600] uppercase tracking-[-10px] md:text-[116px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #EBC488 -39.86%, #171711  100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK
                    </h1>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-3 top-[8%] md:left-10">
              {/* second */}
              <div className="flex flex-row gap-4">
                <div>
                  <div>
                    {" "}
                    <h1
                      className="text-center font-open_sans text-8xl font-[600] uppercase tracking-[-10px] md:text-[116px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #EBC488 -39.86%, #171711  100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK
                    </h1>{" "}
                  </div>
                </div>
                <div>
                  <div>
                    {" "}
                    <h1
                      className="text-center font-open_sans text-8xl font-[600] uppercase tracking-[-10px] md:text-[116px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #EBC488 -39.86%, #171711  100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK
                    </h1>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-3 top-[22%] md:left-10">
              {/* tird */}
              <div className="flex flex-row gap-4">
                <div>
                  <div>
                    {" "}
                    <h1
                      className="text-center font-open_sans text-8xl font-[600] uppercase tracking-[-10px] md:text-[116px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #EBC488 -39.86%, #171711  100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK
                    </h1>{" "}
                  </div>
                </div>
                <div>
                  <div>
                    {" "}
                    <h1
                      className="text-center font-open_sans text-8xl font-[600] uppercase tracking-[-10px] md:text-[116px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #EBC488 -39.86%, #171711  100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK
                    </h1>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-3 top-[34%] md:left-10">
              {/* fourth */}
              <div className="flex flex-row gap-4">
                <div>
                  <div>
                    {" "}
                    <h1
                      className="text-center font-open_sans text-8xl font-[600] uppercase tracking-[-10px] md:text-[116px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #EBC488 -39.86%, #171711  100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK
                    </h1>{" "}
                  </div>
                </div>
                <div>
                  <div>
                    {" "}
                    <h1
                      className="text-center font-open_sans text-8xl font-[600] uppercase tracking-[-10px] md:text-[116px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #EBC488 -39.86%, #171711  100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK
                    </h1>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-3 top-[48%] md:left-10">
              {/* fifth */}
              <div className="flex flex-row gap-4">
                <div>
                  <div>
                    {" "}
                    <h1
                      className="text-center font-open_sans text-8xl font-[600] uppercase tracking-[-10px] md:text-[116px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #EBC488 -39.86%, #171711  100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK
                    </h1>{" "}
                  </div>
                </div>
                <div>
                  <div>
                    {" "}
                    <h1
                      className="text-center font-open_sans text-8xl font-[600] uppercase tracking-[-10px] md:text-[116px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #EBC488 -39.86%, #171711  100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK
                    </h1>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-3 top-[62%] md:left-10">
              {/* sixth */}
              <div className="flex flex-row gap-4">
                <div>
                  <div>
                    {" "}
                    <h1
                      className="text-center font-open_sans text-8xl font-[600] uppercase tracking-[-10px] md:text-[116px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #EBC488 -39.86%, #171711  100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK
                    </h1>{" "}
                  </div>
                </div>
                <div>
                  <div>
                    {" "}
                    <h1
                      className="text-center font-open_sans text-8xl font-[600] uppercase tracking-[-10px] md:text-[116px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #EBC488 -39.86%, #171711  100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK
                    </h1>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-3 top-[76%] md:left-10">
              {/* seventh */}
              <div className="flex flex-row gap-4">
                <div>
                  <div>
                    {" "}
                    <h1
                      className="text-center font-open_sans text-8xl font-[600] uppercase tracking-[-10px] md:text-[116px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #EBC488 -39.86%, #171711  100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK
                    </h1>{" "}
                  </div>
                </div>
                <div>
                  <div>
                    {" "}
                    <h1
                      className="text-center font-open_sans text-8xl font-[600] uppercase tracking-[-10px] md:text-[116px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #EBC488 -39.86%, #171711  100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      SDK
                    </h1>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[33%]">
            <Image
              src={"/images/home/story/image1.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full md:h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unique;
