import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Story: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] pb-0 pt-12 md:pb-4 md:pt-24">
      <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
        <div className="w-full md:w-1/2">
          <Image
            src={"/images/home/follow/image5.png"}
            width={160}
            height={160}
            alt="logo"
            className="h-auto w-full object-cover md:h-full"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 px-4 md:w-1/2 md:gap-6">
          <h6 className="text-center font-sofia_sans text-2xl font-[400] uppercase text-[#8C7753] md:text-start md:text-5xl">
            OUR STORY
          </h6>
          <p className="md:text w-full max-w-[650px] bg-[#FFFFFF] text-center font-lora text-sm font-[400] text-[#9C9E9F] md:text-justify md:text-lg">
            Welcome to the SDK, where seamless development meets powerful
            integration for an unparalleled developer experience! With our SDK,
            we empower you to build robust applications with ease—combining
            powerful tools, detailed documentation, and real-time support.
            Whether you`re crafting dynamic interfaces or integrating complex
            backend systems, our SDK ensures your development journey is smooth
            and productive. This is your ultimate toolkit for creating,
            innovating, and scaling faster than ever. Join us and let the SDK
            redefine your expectations of development efficiency and innovation.
          </p>
          <div>
            <Link href={"/menu"}>
              <Button
                className="relative z-40 mt-4 flex items-center justify-center gap-3 px-5 py-7 uppercase md:px-10 md:py-10"
                variant="imageoutline"
              >
                View Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
