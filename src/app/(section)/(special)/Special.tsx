"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#11331B] py-12">
      <div className="absolute bottom-[110px] right-[8%] z-50 hidden md:block">
        <Link href={"/menu"}>
          <Button
            className="relative z-50 mt-4 flex items-center justify-center gap-3 px-7 py-7 uppercase"
            variant="imageoutline"
          >
            View Menu
          </Button>
        </Link>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="font-birthstone text-2xl font-[400] tracking-[0.76px] text-[#fff]">
                highlights{" "}
              </span>
              <h6 className="text-center font-sofia_sans text-4xl font-[400] uppercase text-[#fff] md:text-5xl">
                Sdk highlights
              </h6>
              <Link href={"/menu"}>
                <Button
                  className="relative z-40 mt-4 flex items-center justify-center gap-3 px-7 py-7 uppercase md:hidden"
                  variant="imageoutline"
                >
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative z-50 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
