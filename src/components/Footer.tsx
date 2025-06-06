"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#11331B] px-4 pt-12 lg:px-10 lg:pt-24">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-1">
          <div className="w-full border-b-[1px] border-b-[rgba(201,171,129,0.40)] md:w-[45%]" />
          <Link href={"/"}>
            <Image
              src={"/images/home/hero/logo.png"}
              width={281}
              height={74}
              alt="logo"
              className="w-20 md:w-32"
            />
          </Link>
          <div className="w-full border-b-[1px] border-b-[rgba(201,171,129,0.40)] md:w-[45%]" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:hidden md:flex-row md:justify-center md:gap-10">
          <div className="flex w-full flex-col items-start justify-start gap-8 md:ml-16 md:flex-row md:items-center md:justify-center md:gap-4">
            <div className="flex flex-col items-start gap-3 md:items-start">
              <Link
                href={"/"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff]"
              >
                Home
              </Link>
              <Link
                href={"/menu"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff]"
              >
                Menu
              </Link>
              <Link
                href={"/about-us"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff]"
              >
                About
              </Link>
              <Link
                href={"/contact"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff]"
              >
                Contact
              </Link>
              <Link
                href={"/table-booking"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff]"
              >
                Reserve
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col items-end justify-end gap-8 md:flex-row md:items-center md:justify-center md:gap-20">
            <div className="flex flex-col items-end gap-3 md:items-center">
              <div>
                <Link
                  href={""}
                  className="font-open_sans text-base font-[400] uppercase tracking-[2px] text-[#fff]"
                >
                  Contact{" "}
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <Link
                  href={"https://maps.app.goo.gl/36sgBo5E3eb4yg5Y8"}
                  target="_blank"
                  className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff] md:text-start"
                >
                  1-7 Chapel St, Salford M3 <br /> 7NJ, United Kingdom
                </Link>
                <Link
                  href={"mailto:info@sdk-bar.restaurant"}
                  className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff] md:text-start"
                >
                  info@sdk-bar.restaurant
                </Link>
                <Link
                  href={"tele:+01618346377"}
                  className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff] md:text-start"
                >
                  0161 8346377
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-end gap-3 md:items-start">
              <Link
                href={""}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff]"
              >
                Opening hours
              </Link>
              <p className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff] md:text-start">
                Mon-Thurs 4pm-1am <br />
                Fri-Sat 12pm-3am <br />
                Sun 12pm-1am
              </p>
            </div>
          </div>
        </div>
        {/* mobile screen */}
        <div className="hidden flex-row items-center justify-center gap-60 md:flex">
          <div className="flex flex-col items-start gap-3 md:items-start">
            <Link
              href={"/"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff]"
            >
              Home
            </Link>
            <Link
              href={"/menu"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff]"
            >
              Menu
            </Link>
            <Link
              href={"/about-us"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff]"
            >
              About
            </Link>
            <Link
              href={"/contact"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff]"
            >
              Contact
            </Link>
            <Link
              href={"/table-booking"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff]"
            >
              Reserve
            </Link>
          </div>
          <div className="flex flex-col items-end gap-3 md:items-start">
            <div>
              <Link
                href={""}
                className="font-open_sans text-base font-[400] uppercase tracking-[2px] text-[#fff]"
              >
                Contact{" "}
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <Link
                href={"https://maps.app.goo.gl/36sgBo5E3eb4yg5Y8"}
                target="_blank"
                className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff] md:text-start"
              >
                1-7 Chapel St, Salford M3 <br /> 7NJ, United Kingdom
              </Link>
              <Link
                href={"mailto:info@sdk-bar.restaurant"}
                className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff] md:text-start"
              >
                info@sdk-bar.restaurant
              </Link>
              <Link
                href={"tele:+01618346377"}
                className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff] md:text-start"
              >
                0161 8346377
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-end gap-3 md:items-start">
            <Link
              href={""}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff]"
            >
              Opening hours
            </Link>
            <p className="text-end font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#fff] md:text-start">
              Mon-Thurs 4pm-1am <br />
              Fri-Sat 12pm-3am <br />
              Sun 12pm-1am
            </p>
          </div>
        </div>
        <div className="flex flex-row items-end justify-end gap-3 md:ml-10 md:items-center md:justify-center">
          <Link
            href={"https://www.instagram.com/sdkmanchester/"}
            target="_blank"
            className="text-[#fff]"
          >
            <Icons.instagram />
          </Link>
          <Link
            href={"https://maps.app.goo.gl/36sgBo5E3eb4yg5Y8"}
            target="_blank"
            className="text-[#fff]"
          >
            <Icons.google />
          </Link>
          {/* <Link href={""} target="_blank" className="text-[#fff]">
            <Icons.unknown />
          </Link>
          <Link href={""} target="_blank" className="text-[#fff]">
            <Icons.facebook />
          </Link> */}
        </div>
        <div className="flex flex-col gap-2 pb-10">
          <div className="w-full border-b-[1px] border-b-[rgba(201,171,129,0.40)]" />
          <div className="flex flex-col justify-center gap-2 md:flex-row md:justify-between">
            <span className="text-center font-open_sans text-xs font-[400] uppercase tracking-[2px] text-[#fff] md:text-start">
              © 2025 SDK , All Rights Reserved
            </span>

            <Link
              href={"https://foodo.ai"}
              target="_blank"
              className="text-center font-open_sans text-xs font-[400] uppercase tracking-[2px] text-[#fff] md:text-start"
            >
              Powerd by foodo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
