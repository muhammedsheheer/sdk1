import Image from "next/image";
import React from "react";

function About() {
  return (
    <section className="relative flex h-fit w-full items-end justify-center px-4 py-12 md:h-screen md:px-[50px] md:py-20">
      <div className="absolute flex h-full w-full items-start justify-center py-8">
        <p
          className="md:pl-[50px] font-open_sans text-9xl font-light uppercase md:tracking-[50px] lg:text-[450px]"
          style={{
            background: "linear-gradient(180deg, #D3A641 0%, #191717 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SPACE
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-2 justify-center items-center md:items-end z-40 pt-12 md:pt-0">
<div className="w-full md:w-5/12 flex flex-col md:flex-row justify-center items-center lg:items-end gap-6">
    <p className="font-inter text-[#A27C26] text-center md:text-start lowercase">At antonietta ’s, we believe every occasion deserves a touch of sweetness and every celebration a cake that speaks from the heart. Our bakery specializes in creating delectable, handcrafted cakes that are as unique as the moments they celebrate.</p>
    <Image
    src='/images/home/about/image1.png'
    width={336}
    height={336}
    alt="image1"
    className="lg:w-[300px] lg:h-[300px]"
    />
</div>
<div className="w-full md:w-2/12 md:h-[300px] flex justify-center items-center py-5">
    <p className="uppercase font-inter text-center text-[#A27C26] tracking-[3px] text-3xl">ABOUT US</p>
</div>
<div className="w-full md:w-5/12 flex flex-col md:flex-row justify-center items-center lg:items-end gap-6">
    <p className="font-inter text-[#A27C26] lowercase text-center md:text-start">At Space Aigburth Restaurant you can always expect a warm welcome from our highly-trained team of international waiters and waitresses. The attentive staff will be happy to help in any way they can to make your dining experience a more pleasurable one.</p>
    <Image
    src='/images/home/about/image2.png'
    width={289}
    height={489}
    alt="image2"
    className="lg:w-[289px] lg:h-[460px]"
    />
</div>
      </div>
    </section>
  );
}

export default About;
