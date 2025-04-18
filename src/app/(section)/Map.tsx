import React from "react";

const Map: React.FC = () => {
  return (
    <section className="h-full w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2256.5686220585653!2d-2.2458747!3d53.4857252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1cb83b8b4f5%3A0x7737606190785597!2sSDK%20Bar%20Restaurant!5e1!3m2!1sen!2sin!4v1744959041727!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "0px" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[50vh] w-full grayscale invert"
      ></iframe>
    </section>
  );
};

export default Map;
