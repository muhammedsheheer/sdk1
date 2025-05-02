// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Hero: React.FC = () => {
//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-black bg-[url('/images/home/hero/bg.png')] bg-cover bg-center">
//       <div className="absolute right-14 top-8 z-50 hidden md:block">
//         <Link href={"/table-booking"}>
//           <Button
//             className="relative z-40 mt-4 flex items-center justify-center gap-3 px-6 py-7 uppercase"
//             variant="imageoutline"
//           >
//             Book Now
//           </Button>
//         </Link>
//       </div>
//       <div className="relative z-40 flex h-full flex-col items-center justify-center gap-3 text-white md:ml-16">
//         <div>
//           <h1
//             className="text-center font-open_sans text-8xl font-[600] uppercase md:text-9xl"
//             style={{
//               background:
//                 "linear-gradient(0deg, #677C6D  0.3%, #F6FFF8 75.67%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             SDK
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const text = "Coming Soon...";

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 300,
      },
    }),
  };
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setInView(false);
          setTimeout(() => setInView(true), 50);
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover"
      >
        <source src="/video/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 z-0 bg-black/50" />
      <div className="absolute right-14 top-8 z-50 hidden md:block">
        <Link href={"/table-booking"}>
          <Button
            className="relative z-40 mt-4 flex items-center justify-center gap-3 px-6 py-7 uppercase"
            variant="imageoutline"
          >
            Book Now
          </Button>
        </Link>
      </div>

      <div className="relative z-40 flex h-full flex-col items-center justify-center gap-3 text-white md:ml-16">
        <div>
          {/* <h1
            className="text-center font-open_sans text-8xl font-[600] uppercase md:text-9xl"
            style={{
              background:
                "linear-gradient(0deg, #677C6D  0.3%, #F6FFF8 75.67%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SDK
          </h1> */}
          <h1
            className="text-center font-open_sans text-8xl font-[600] uppercase md:text-9xl"
            style={{
              background:
                "linear-gradient(0deg, #677C6D  0.3%, #F6FFF8 75.67%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {inView &&
              [...text].map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
