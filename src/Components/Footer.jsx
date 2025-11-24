import React from "react";
import { FaGithub, FaLinkedin, FaFacebook  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {CURRENT_YEAR} from '../constants/index';


export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col items-center justify-center py-2 px-2 sm:flex-row sm:justify-between sm:py-4 sm:px-6">
        <span className="text-sm text-lightDesert sm:text-center">
          © {CURRENT_YEAR}{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="hover:text-goldDesert transition-colors duration-300"
          >
            YosraHouas.dev
          </a>
        </span>
        <div className="flex mt-2 space-x-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/yosraAP?tab=repositories"
            className="text-lightDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaGithub className="w-5 h-5" />
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/yosra-houas-4aa39a1"
            className="text-lightDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn account</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="text-lightDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaFacebook className="w-5 h-5" />
            <span className="sr-only">Facebook account</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="text-lightDesert hover:text-goldDesert transition-colors duration-300"
          >
            <MdEmail className="w-5 h-5" />
            <span className="sr-only">Email account</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
