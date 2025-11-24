import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import { FaArrowCircleDown } from 'react-icons/fa';
import Typewriter from "typewriter-effect";
import img from "../assets/bg.jpg";
import profileImage from "../assets/imgprofile.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { RESUME_URL } from "../constants";

export default function Banner() {
  const { t } = useTranslation(); 

  useEffect(() => {
    Aos.init({ easing: "ease-out-quart", delay: 0, duration: 750 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      id="Banner"
      className="relative isolate overflow-hidden bg-gray-900 lg:py-44 py-20 "
    >
      <img
        src={img}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-6xl px-3 lg:px-4 lg:pt-36 pt-0">
        <div className="mx-auto mt-16 sm:mt-0 max-w-2xl lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-2 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <img
              className="rounded-full lg:w-56 lg:h-56 h-44 w-44 mx-auto img_glow_circle"
              src={profileImage}
              alt="Yosra"
            />
          </div>
          <div className="mx-auto p-8 sm:p-10 lg:flex-auto">
            <h2
              data-aos="fade-right"
              className="lg:text-[42px] mx-auto font-Andan italic font-semibold tracking-tight text-textNude text-[25px]"
              style={{ letterSpacing: "0.1em" }}
            >
              {t("txtBanner")}
              <span
                className="wave mx-auto"
                role="img"
                aria-labelledby="wave"
                style={{ fontStyle: "normal" }}
              >
                👋🏻
              </span>
            </h2>

            <div className="mt-4 lg:mt-6 lg:text-[32px] h-20 text-[25px] font-semibold text-gray-300 flex items-center">
              <Typewriter
                onStringTyped={(index, self) => handleTypeWriterChange(index)}
                options={{
                  strings: [
                    t("bannerT1"),
                    t("bannerT2"),
                    t("bannerT3"),
                    t("bannerT4"),
                    t("bannerT5"),
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>
            <div className="flex flex-col items-center justify-center sm:mt-4 mt-0">
  <motion.div
    initial={{ scale: 1 }}
    animate={{ scale: [1, 1.2, 1] }} 
    transition={{ duration: 3.3, repeat: Infinity }} 
    whileHover={{ scale: 1.1 }}
  >
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={RESUME_URL}
      className="flex btnCV mx-auto font-serif" style={{ letterSpacing: "0.1em"}}
    >
       {t("btnViewCV")} <FaArrowCircleDown className="ml-2 mt-1" />
    </a>
  </motion.div>
</div>

          </div>
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
