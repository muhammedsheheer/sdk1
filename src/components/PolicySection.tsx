import React, { useState } from "react";

const PolicySection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded((prev) => !prev);

  return (
    <div className="mx-auto max-w-2xl rounded-xl border bg-white p-4 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Guest Information</h2>

      <div className="space-y-4 text-sm leading-relaxed text-gray-700">
        {/* Dress Code */}
        <div>
          <h3 className="font-semibold">Dress Code:</h3>
          <p>
            Our dress code is smart and elegant. We kindly ask that guests do
            not wear hoodies, caps, tracksuits, gym leggings, casual shorts,
            flip flops or beach sliders.
            {!isExpanded && " "}
            {!isExpanded && (
              <span
                className="cursor-pointer text-blue-500"
                onClick={toggleReadMore}
              >
                Read more
              </span>
            )}
          </p>
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <>
            <p>
              Gentlemen are kindly asked to avoid wearing sandals but are
              welcome to wear smart shorts until 7pm.
            </p>

            {/* Age Policy */}
            <div>
              <h3 className="font-semibold">Age Policy:</h3>
              <p>
                We warmly welcome guests of all ages. However, we kindly advise
                that on Friday and Saturday evenings, our ambiance exudes a
                vibrant atmosphere, accentuated by flowing cocktails and
                champagne. We recommend guests consider this ambiance when
                planning their visit during these peak times.
              </p>
              <p>
                We reserve the right to request physical proof of age if deemed
                necessary. Entry is at management`s discretion.
              </p>
            </div>

            {/* Cancellation Policy */}
            <div>
              <h3 className="font-semibold">Cancellation Policy:</h3>
              <p>
                Cancellations must be made through your confirmation email with
                receiving a valid confirmation of cancellation email as proof,
                or via email at (E-mail address). These are the only
                cancellation method(s) accepted to avoid being charged.
              </p>
              <p>
                A £30 per person charge will be applied in the instance of a no
                show or cancellation. The cardholders account details will be
                securely stored on our system and the above fee will only be
                applied if the reservation is cancelled later than 24hrs prior
                to the reservation date.
              </p>
            </div>

            <p
              className="cursor-pointer font-medium text-blue-500"
              onClick={toggleReadMore}
            >
              Show less
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PolicySection;
