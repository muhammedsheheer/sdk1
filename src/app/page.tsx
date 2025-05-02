"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "./(section)/Hero";
import Follow from "./(section)/Follow";
import Menu from "./(section)/Menu";
import Reviews from "./(section)/Review";
import Map from "./(section)/Map";
import Story from "./(section)/Story";
import Unique from "./(section)/Unique";
import Reserve from "./(section)/Reserve";
import Highlights from "./(section)/Highlights";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <Hero />
        <Highlights />
        <Story />
        <Unique />
        <Menu />
        <Reserve />
        <Reviews />
        <Follow />
        <Map />
        <Footer />
      </div>
    </main>
  );
}
