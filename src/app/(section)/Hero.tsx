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

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
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
          <h1
            className="text-center font-open_sans text-8xl font-[600] uppercase md:text-9xl"
            style={{
              background:
                "linear-gradient(0deg, #677C6D  0.3%, #F6FFF8 75.67%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SDK
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
