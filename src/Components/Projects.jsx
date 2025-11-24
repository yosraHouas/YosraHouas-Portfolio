import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import Modal from "react-modal";
import { useSpring, animated, useTrail } from "react-spring";
import projects from "../constants/projects.json";
import { useTranslation } from "react-i18next";
import { IoOpenOutline } from "react-icons/io5";


const ProjectModal = ({ project, isOpen, closeModal }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    className="fixed inset-0 z-50 flex items-center justify-center p-6"
    overlayClassName="bg-black bg-opacity-50 transition-opacity duration-500 ease-out"
  >
    <div className="relative bg-white p-6 rounded-lg shadow-2xl transform transition-transform duration-500 ease-out max-w-4xl lg:flex">
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-darkDesert hover:text-goldDesert"
      >
        <FaTimes size={25} className="text-black/50" />
      </button>

      <div className="lg:w-1/2 flex justify-center items-center sm:mb-4">
        <img
          src={project.thumbnail}
          alt="Project thumbnail"
          className="rounded-lg"
          style={{ maxWidth: "90%", maxHeight: "90%" }}
        />
      </div>

      <div className="lg:w-1/2 py-2 px-4 flex flex-col justify-between sm:items-center lg:items-start">
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start">
          <h3 className="text-gray-800 font-semibold px-2 mt-2 mb-2 text-2xl sm:text-3xl text-center lg:text-start">
            {project.title}
          </h3>
          <p className="text-darkDesert leading-[2rem] text-center lg:text-left">
            {project.description}
          </p>
          <div>
            <p className="font-bold mb-1">Technology:</p>
          </div>
          <div className="flex items-center">
            {project.technologies &&
              project.technologies.map((technology, index) => (
                <img
                  key={index}
                  src={technology.image}
                  alt={technology.name}
                  className="w-[50px] h-[50px] p-2 mb-1"
                />
              ))}
          </div>

          <p className="text-darkDesert font-bold text-center lg:text-left mt-2">
            {project.date}
          </p>
        </div>
        <div className="w-full flex justify-between sm:justify-center lg:justify-between">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textPinkcustom p-2 rounded-full glow"
            >
              <FaGithub size={25} />
            </a>
          )}
          <a
            href={project.deployed}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textPinkcustom p-2 rounded-full glow"
          >
            <FaExternalLinkAlt size={25} />
          </a>
        </div>
      </div>
    </div>
  </Modal>
);

// move ProjectCard outside component so modalIsOpen does not trigger entire component to re-render
const ProjectCard = ({ project, openModal }) => {
  // Enhance card hover effect
  const [hovered, setHovered] = useState(false);
  const hoverProps = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",
  });

  return (
    <animated.div
      style={hoverProps}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group bg-white/85 rounded-lg p-3 mb-4"
    >
      <div data-aos="zoom-in" className="relative group">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <div className="absolute inset-0 bg-darkDesert bg-opacity-70 flex items-center justify-center rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500">
          <h1 className="text-gray-700 rounded-full text-center text-sm md:text-lg lg:text-xl truncate w-11/12 md:w-10/12 font-semibold bg-white/70 px-4 py-2">
            {project.title}
          </h1>
        </div>
        <button onClick={openModal} className="absolute inset-0 cursor-pointer">
          <span className="sr-only">Open details for {project.title}</span>
        </button>
        <div className="flex items-center justify-center p-2">
          <p className="font-bold">Technology :</p>
          {project.technologies &&
            project.technologies.map((technology, index) => (
              <img
                key={index}
                src={technology.image}
                alt={technology.name}
                className="w-[35px] h-[35px] p-1 mb-1"
              />
            ))}
        </div>
        <div className="flex justify-center items-center p-1">
          <button
            onClick={openModal}
            type="submit"
            className="text-white flex items-center px-4 py-2 rounded-lg"
            style={{
              backgroundImage:
                "linear-gradient(to left, rgba(75, 19, 79, 0.8), rgba(201, 75, 75, 0.6))",
            }}
          >
            View details <IoOpenOutline  className="ml-1" />
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useTranslation();

  // Staggered card load animation
  const trails = useTrail(projects.length, {
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 200,
    config: { mass: 5, tension: 2000, friction: 200 },
  });

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  // Modal fade-in and scale effect
  const modalAnimation = useSpring({
    opacity: selectedProject ? 1 : 0,
    transform: selectedProject ? "scale(1)" : "scale(0.9)",
    config: { tension: 150, friction: 20 },
  });

  return (
    <div className="bg-black lg:pt-36 pt-10">
      <div
        id="projects"
        className="max-w-7xl mx-auto flex flex-col items-center p-4 min-h-screen mb-4"
      >
        <h1 className="text-white lg:text-[60px] mb-8 text-[35px] title lg:mt-20 mt-14">
          <span className="text-textPinkcustom">{t("P")}</span>
          {t("rojects")}
        </h1>
        <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {trails.map((props, index) => (
            <animated.div key={projects[index].id} style={props}>
              <ProjectCard
                project={projects[index]}
                openModal={() => openModal(projects[index])}
              />
            </animated.div>
          ))}
        </div>
        {selectedProject && (
          <animated.div style={modalAnimation}>
            <ProjectModal
              project={selectedProject}
              isOpen={!!selectedProject}
              closeModal={closeModal}
            />
          </animated.div>
        )}
      </div>
    </div>
  );
}
