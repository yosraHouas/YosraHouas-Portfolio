import React, { useEffect, useState, useRef } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTranslation } from "react-i18next";

export default function About() {
  const [percentages, setPercentages] = useState([0, 0, 0, 0]);
  const finalValues = [90, 100, 95, 90];
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.isIntersecting); // Ajoutez ceci pour le débogage
        if (entry.isIntersecting) {
          resetAndAnimateProgress();
        }
      });
    }, { threshold: 0.5 });
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const resetAndAnimateProgress = () => {
    setPercentages([0, 0, 0, 0]); // Ceci est correct
    setTimeout(() => {
      animateProgress(); // Assurez-vous que cette fonction fonctionne comme prévu
    }, 10);
  };
 

  const animateProgress = () => {
    const interval = setInterval(() => {
      setPercentages((prevPercentages) => {
        let allReachedFinalValues = true;
        const updatedPercentages = prevPercentages.map((percent, index) => {
          if (percent < finalValues[index]) {
            allReachedFinalValues = false;
            return percent + 1;
          }
          return percent;
        });

        if (allReachedFinalValues) {
          clearInterval(interval);
        }

        return updatedPercentages;
      });
    }, 50);
  };

  useEffect(() => {
    animateProgress(); // Déclenchez l'animation directement pour le test
  }, []);
  const { t } = useTranslation();

  return (
    <div
      ref={aboutRef}
      id="About"
      className="text-white bg-black lg:py-10 py-14 lg:pt-25 pt-7"
    >
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="progressGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#75e5dc" />
            <stop offset="100%" stopColor="#aa33ce" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-7xl px-3 lg:px-4">
        <div className="mx-auto mt-10 max-w-2xl rounded-3xl ring-1 ring-textNude sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h1
              data-aos="fade-right"
              className="lg:text-[50px] text-[22px] font-semibold title tracking-tight text-white mb-2"
            >
              {t("titreAbout")}{" "}
              <span className="text-textPinkcustom">{t("Me")}</span>
            </h1>
            <p
              data-aos="fade-right"
              className="text-justify leading-[2.5rem] mb-4"
            >
              {t("p1_about")}
              <br className="mt-2" />
              {t("p2_about")}
              <br className="mt-2" />
              {t("p3_about")}
              <br className="mt-2" />
              {t("p4_about")}
            </p>

            <div
              data-aos="fade-up"
              className="mt-4 flex lg:flex-row flex-col items-center lg:justify-start justify-center lg:gap-x-4 gap-x-0 gap-y-4 w-full"
            >
              <a
                href="#Contact"
                className="neno-button text-[18px]  hover:bg-indigo-600 text-white py-3 px-4 rounded-full w-full lg:w-auto"
                style={{
                  backgroundImage:
                    "linear-gradient(to left, rgba(75, 19, 79, 0.8), rgba(201, 75, 75, 0.6))",
                }}
              >
                {t("btnHireMe")}
              </a>
              <div
                className="neno-button w-full lg:w-auto"
                style={{
                  display: "inline-block",
                  background:
                    "linear-gradient(to left, rgba(75, 19, 79, 0.8), rgba(201, 75, 75, 0.6))",
                  borderRadius: "9999px", // use a large px value to create a rounded border
                  padding: "2px", // this padding will act as the "border"
                }}
              >
                <a
                  href="yosraHouas_AP_CV_2025.pdf"
                  download="Now_yosraHouas_AP_CV_2025.pdf"
                  className="neno-button text-[18px] bg-black text-textNude py-3 px-4 rounded-full sm:w-full w-auto sm:mt-2"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    color: "inherit",
                    background: "black", // your button's background color
                    borderRadius: "9999px", // use a large px value to create a rounded border
                  }}
                >
                  {t("btnGetResume")}
                </a>
              </div>
            </div>

            <div
  className="flex justify-around mt-8 mb-4 flex-col sm:flex-row"
  style={{ gap: "10px" }}
>
  {percentages.map((percentage, index) => (
    <div
      key={index}
      className="text-center w-full sm:mb-0 mb-4" // Retiré sm:w-auto ici
      style={{ margin: "0 auto" }}
    >
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={{
          path: {
            stroke: "url(#progressGradient)",
            strokeLinecap: "round",
            strokeWidth: 2,
          },
          trail: {
            stroke: "#808080",
            strokeLinecap: "round",
            strokeWidth: 5,
            opacity: 0.5,
          },
          text: {
            fill: "#ccc",
            fontSize: "16px",
          },
        }}
      />
      <p className="text-sm mt-2">
        {index === 0
          ? t("Web_Dev")
          : index === 1
          ? t("Design")
          : index === 2
          ? t("DB")
          : t("OOP")}
      </p>
    </div>
  ))}
</div>

          </div>
        </div>
      </div>
    </div>
  );
}
