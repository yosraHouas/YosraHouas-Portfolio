import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { SiCss3, SiCsharp } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaNodeJs, FaAngular, FaJava , FaPhp} from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import ProgressBar from "@ramonak/react-progress-bar";
import { useTranslation } from 'react-i18next';


const skillsData = [
  {
    id: 1,
    name: "HTML",
    image: (
      <ImHtmlFive
        style={{
          color: "#E34F26",
          verticalAlign: "middle",
          marginRight: "8px",
          fontSize: "28px",
        }}
      />
    ),
    progress: 100,
    type: "frontend",
  },
  {
    id: 2,
    name: "CSS3",
    image: (
      <SiCss3
        style={{
          color: "#1572B6",
          verticalAlign: "middle",
          marginRight: "8px",
          fontSize: "28px",
        }}
      />
    ),
    progress: 85,
    type: "frontend",
  },
  {
    id: 3,
    name: "JavaScript",
    image: (
      <RiJavascriptFill
        style={{
          color: "#f7df1e",
          verticalAlign: "middle",
          marginRight: "8px",
          fontSize: "28px",
        }}
      />
    ),
    progress: 100,
    type: "frontend",
  },
  {
    id: 4,
    name: "Csharp",
    image: (
      <SiCsharp
        style={{
          color: "#220a4be7",
          verticalAlign: "middle",
          marginRight: "8px",
          fontSize: "28px",
        }}
      />
    ),
    progress: 80,
    type: "backend",
  },
  {
    id: 5,
    name: "Java",
    image: (
      <FaJava
        style={{
          color: "ff0000",
          verticalAlign: "middle",
          marginRight: "8px",
          fontSize: "28px",
        }}
      />
    ),
    progress: 75,
    type: "backend",
  },

  {
    id: 6,
    name: "React",
    image: (
      <FaReact
        style={{
          color: "#44064d",
          verticalAlign: "middle",
          marginRight: "8px",
          fontSize: "28px",
        }}
      />
    ),
    progress: 80,
    type: "frontend",
  },
  {
    id: 7,
    name: "Node.js ",
    image: (
      <FaNodeJs
        style={{
          color: "#0c9336e7",
          verticalAlign: "middle",
          marginRight: "8px",
          fontSize: "28px",
        }}
      />
    ),
    progress: 80,
    type: "backend",
  },
  {
    id: 8,
    name: "Angular ",
    image: (
      <FaAngular
        style={{
          color: "#850505e7",
          verticalAlign: "middle",
          marginRight: "8px",
          fontSize: "28px",
        }}
      />
    ),
    progress: 70,
    type: "frontend",
  },
  {
    id: 9,
    name: "PHP ",
    image: (
      <FaPhp
        style={{
          color: "#6724dbe7",
          verticalAlign: "middle",
          marginRight: "8px",
          fontSize: "28px",
        }}
      />
    ),
    progress: 70,
    type: "backend",
  },
  {
    id: 10,
    name: "Typescript",
    image: (
      <BiLogoTypescript
        style={{
          color: "#264babd5",
          verticalAlign: "middle",
          marginRight: "8px",
          fontSize: "28px",
        }}
        className="rounded-full"
      />
    ),
    progress: 50,
    type: "backend",
  },
];

function Skills() {
  const { t } = useTranslation(); 

    const [ref, inView] = useInView();
    const frontendSkills = skillsData.filter(
      (skill) => skill.type === "frontend"
    );
    const backendSkills = skillsData.filter((skill) => skill.type === "backend");

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 280);
      };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  return (
    <div ref={ref}
    id="skills"
    className="relative pt-28 lg:px-56 px-10 lg:py-36 py-14 flex flex-col items-center"
  >
       <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
    <h1 className="lg:text-[60px] mb-8 text-[35px] title lg:mt-10 mt-0"><span className="text-textPinkcustom">{t("S")}</span>{t("kills")}</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl py-16 mb-8">
      <div className="flex flex-col items-center">
        {frontendSkills.map((skill) => (
          <div key={skill.id} className="w-11/12 mb-4">
              <span className="hover:text-textPinkcustom hover:font-bold rounded-full glow" style={{ display: "inline-flex", alignItems: "center" }}>
                {skill.image}
                <p style={{ margin: "0" }}>{skill.name}</p>
              </span>
              <ProgressBar
                completed={inView ? skill.progress : 0}
                height="14px"
                labelAlignment="outside"
                labelColor="#000"
                bgColor="var(--colorProgressBar)"
                trackBorderColor="#fff"
                trackBorderWidth="1px"
                animateOnRender={true}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          {backendSkills.map((skill) => (
            <div key={skill.id} className="w-11/12 mb-4">
              <span className="hover:text-textPinkcustom hover:font-bold rounded-full glow" style={{ display: "inline-flex", alignItems: "center" }}>
                {skill.image}
                <p style={{ margin: "0" }}>{skill.name}</p>
              </span>
              <ProgressBar
                completed={inView ? skill.progress : 0}
                bgColor="var(--colorProgressBar)"
                height="14px"
                labelAlignment="outside"
                labelColor="#000"
                trackBorderColor="#fff"
                trackBorderWidth="1px"
                animateOnRender={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;