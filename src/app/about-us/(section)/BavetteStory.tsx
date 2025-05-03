import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#11331B] p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#11331B]">
        <h2 className="font-oswald text-center text-5xl text-[#fff] md:left-[15%] md:text-8xl">
          The Sdk
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#11331B] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/home/gallery/2.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="font-oswald max-w-[500px] text-center text-5xl text-[#fff] md:text-start md:text-7xl">
              From Passion
              <br />
              to Perfection{" "}
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#9C9E9F] md:text-start">
              What began as a vision—to redefine the developer experience—has
              grown into a cutting-edge SDK where innovation truly comes to
              life. Built from a deep passion for technical excellence, our SDK
              was created not just to support development—but to transform it.{" "}
              <br />
              From humble beginnings to becoming a trusted tool for developers,
              our commitment to quality, forward-thinking design, and robust
              performance has never wavered. Every function is thoughtfully
              designed, every integration is seamless, and every release is a
              step forward in empowering developers. <br />
              We don’t just provide an SDK—we enable you to create exceptional
              digital experiences. As we continue to evolve, our mission remains
              the same: to combine technical precision with usability and offer
              a development experience unlike any other.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
