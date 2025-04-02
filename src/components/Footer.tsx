"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-black px-4 pt-2 lg:px-8">
      <div className="flex flex-col gap-4 pt-12 md:gap-8 lg:pt-24">
        {/* first  div */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-14 md:px-32">
          {/* sub first  div */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-36">
            <div className="flex flex-col items-center gap-4 md:items-start md:gap-8">
              <div>
                <Link href={"/"}>
                  <Image
                    src={"/images/logo.png"}
                    width={152}
                    height={83}
                    alt="logo"
                    className="w-36 md:w-60"
                  />
                </Link>
              </div>
              <div className="flex flex-col items-center gap-2 md:items-start md:pt-4">
                <div className="flex flex-col items-center md:items-start">
                  <span className="flex flex-col text-center font-open_sans text-base font-[600] uppercase tracking-[1px] text-white md:text-start">
                    Contact
                  </span>
                  <br />
                  <span>
                    <Link
                      className="flex flex-col text-center font-open_sans text-base font-[400] uppercase tracking-[1px] text-white md:text-start"
                      target="_blank"
                      href={""}
                    >
                      382 Aigburth Rd, Aigburth,<br/> Liverpool L19 3QD,<br/> United Kingdom
                    </Link>
                  </span>
                  <br />
                  <span>
                    <Link
                      className="font-open_sans text-base font-[400] uppercase tracking-[1px] text-white"
                      href={"tel:+44 151 494 2979"}
                    >
                    +44 151 494 2979
                    </Link>
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2 md:gap-4">
                <Link
                  href={
                    "https://www.instagram.com/zaloscafelymm?igsh=MWpmbGlkYWM2NmQ5MQ%3D%3D"
                  }
                  target="_blank"
                >
                  <Icons.instagram className="text-white" />
                </Link>
                {/* <Link
                  href={
                    "https://www.tripadvisor.in/Restaurant_Review-g187069-d32861312-Reviews-Levant_Elixir_Of_Co_existence-Manchester_Greater_Manchester_England.html"
                  }
                  target="_blank"
                >
                  <Icons.unknown className="text-white" />
                </Link> */}
                <Link href={"https://g.co/kgs/rQAnich"} target="_blank">
                  <Icons.google className="text-white" />
                </Link>
                <Link
                  href={
                    "https://www.facebook.com/p/Zalos-Cafe-Lymm-61566589567442/"
                  }
                  target="_blank"
                >
                  <Icons.facebook className="text-white" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 md:mt-24 md:items-start md:gap-6">
              <Link
                href={"/"}
                className="font-open_sans text-base font-[400] uppercase tracking-[2.4px] text-white"
              >
                Home
              </Link>
              <Link
                href={"/menu"}
                className="font-open_sans text-base font-[400] uppercase tracking-[2.4px] text-white"
              >
                Menu
              </Link>

              <Link
                href={""}
                className="font-open_sans text-base font-[400] uppercase tracking-[2.4px] text-white"
              >
                products
              </Link>

              {/* <Link
                href={""}
                className="font-open_sans text-xs font-[700] uppercase tracking-[2.4px] text-[#fff]"
              >
                Products
              </Link> */}
              <Link
                href={"/table-booking"}
                className="font-open_sans text-base font-[400] uppercase tracking-[2.4px] text-white"
              >
                Reservation
              </Link>
              <Link
                href={"/contact"}
                className="font-open_sans text-base font-[400] uppercase tracking-[2.4px] text-white"
              >
                Contact Us
              </Link>
            </div>{" "}
          </div>

          {/* sub second  div */}
          <div className="flex w-full flex-col items-center gap-2 md:w-[400px] md:items-start md:pt-16">
            <h6 className="font-open_sans text-base font-[600] uppercase tracking-[2.2px] text-white md:pb-4">
              Opening Hours
            </h6>
            <div className="flex flex-col items-center gap-4 md:items-start md:gap-6">
              <div className="h-full w-full border-b-[1px] border-b-[#D9D9D9]" />

              <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-white">
                Monday
                </span>
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-white">
                9 AM - 4 PM{" "}
                </span>
              </div>

              <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-white">
                TUESDAY - THURSDAY{" "}
                </span>
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-white">
                9 AM - 10 PM{" "}
                </span>
              </div>
        

              <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-white">
                FRIDAY - SATURDAY{" "}
                </span>
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-white">
                9 AM - 11 PM{" "}
                </span>
              </div>

              <div className="flex w-full flex-row gap-4 md:w-[400px] md:justify-between">
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-white">
                SUNDAY{" "}
                </span>
                <span className="font-open_sans text-base font-[400] uppercase tracking-[1.96px] text-white">
                9 AM - 9 PM{" "}
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* second  div */}
        <div className="flex flex-col gap-4">
          <div className="h-full w-full border-b-[1px] border-b-[#D9D9D9]" />
          <div className="flex flex-col items-center justify-center gap-1 md:flex-row md:items-start md:justify-between">
            <Link href={"https://foodo.ai/"} target="_blank">
              <span className="pb-6 font-open_sans text-xs font-[400] uppercase tracking-[1px] text-white">
                Powerd by fo0do{" "}
              </span>
            </Link>
            <p className="pb-6 font-open_sans text-xs font-[400] uppercase tracking-[1px] text-white">
              © 2025 SPACE AIGBURTH ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;