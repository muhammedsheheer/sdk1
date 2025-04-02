import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full flex flex-col gap-8 bg-[#000] pt-12 md:pt-24">
  <p className="w-full text-center uppercase text-4xl md:text-5xl font-open_sans tracking-[9px] text-[#D3A641]">SCROLL OUR INSTAGRAM</p>
  <div className="relative w-full flex">
    <div className="absolute w-full h-full flex justify-center items-center">
      <Link href=''>
      <div className="bg-black uppercase text-[#D3A641] font-open_sans md:tracking-[10px] text-xl md:text-4xl py-7 px-8">
      @spacebarandgrill
      </div>
      </Link>
    </div>
    <Image
    src='/images/home/follow/1.png'
    width={188}
    height={424}
    alt="1"
    />
        <Image
    src='/images/home/follow/2.png'
    width={348}
    height={424}
    alt="1"
    />
            <Image
    src='/images/home/follow/3.png'
    width={348}
    height={424}
    alt="1"
    />
            <Image
    src='/images/home/follow/4.png'
    width={348}
    height={424}
    alt="1"
    />
            <Image
    src='/images/home/follow/5.png'
    width={348}
    height={424}
    alt="1"
    />
        <Image
    src='/images/home/follow/6.png'
    width={165}
    height={424}
    alt="1"
    />
  </div>
    </section>
  );
};

export default Follow;
