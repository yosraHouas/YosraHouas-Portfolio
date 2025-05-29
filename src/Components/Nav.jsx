import React, { useState } from "react";
import { Link } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import { RiTranslate } from "react-icons/ri";
import { useTranslation } from 'react-i18next';
import { IoMdArrowDropdown } from "react-icons/io";
import i18n from '/public/i18n'

function Nav() {
  const [click, setClick] = useState(false);
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en'); 

  const toggleMenu = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
    closeMobileMenu();
  };

  const mobileLanguageSelector = (
    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
      <div className="flex justify-center items-center">
        <button onClick={() => changeLanguage('fr')} className={`${selectedLanguage === 'fr' ? 'text-bleuLogo' : ''} hover:text-bleuLogo mx-2`}>
          FR
        </button>
        <span className="text-textNude mx-2">|</span>
        <button onClick={() => changeLanguage('en')} className={`${selectedLanguage === 'en' ? 'text-bleuLogo' : ''} hover:text-bleuLogo mx-2`}>
          EN
        </button>
      </div>
    </li>
  );
  const content = (
    <>
      <div
        className={`lg:hidden block absolute top-16 w-full left-0 right-0 bg-black text-textNude transition ${
          click ? "" : "hidden"
        }`}
      >
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="Banner" onClick={closeMobileMenu}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {t("home")}
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About" onClick={closeMobileMenu}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {t("about")}
            </li>
          </Link>
          <Link spy={true} smooth={true} to="skills" onClick={closeMobileMenu}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {t("skills")}
            </li>
          </Link>
          <Link
            spy={true}
            smooth={true}
            to="projects"
            onClick={closeMobileMenu}
          >
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {t("projects")}
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact" onClick={closeMobileMenu}>
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              {t("contact")}
            </li>
          </Link>
          {mobileLanguageSelector}
        </ul>
      </div>
    </>
  );
  return (
    <nav className="text-black fixed w-full bg-white shadow-md z-50 ">
      <div className="h-10vh flex justify-between lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <div className="animate-spin-vertical">
            <IoEarth className="text-bleuLogo text-[30px]" />
          </div>
          <div className="flex items-center ml-2">
            <span className="text-2xl font-bold text-black italic">Y</span>
            <span className="text-2xl font-bold text-textPinkcustom">H</span>
            <span className="text-gray-700 font-bold text-2xl mx-1">.</span>
          </div>
          <div className="text-[12px] text-gray-700 font-bold me-5">
            <span className="text-bleuLogo">P</span>ortfoli
            <span className="text-textPinkcustom">o</span>
          </div>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[19px] md:text[15px] font-semibold">
              <Link spy={true} smooth={true} to="Banner">
                <li className="transition cursor-pointer border-b-2 border-transparent hover:border-textPinkcustom">
                  {t("home")}
                </li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="transition cursor-pointer border-b-2 border-transparent hover:border-textPinkcustom">
                  {t("about")}
                </li>
              </Link>
              <Link spy={true} smooth={true} to="skills">
                <li className="transition cursor-pointer border-b-2 border-transparent hover:border-textPinkcustom">
                  {t("skills")}
                </li>
              </Link>
              <Link spy={true} smooth={true} to="projects">
                <li className="transition cursor-pointer border-b-2 border-transparent hover:border-textPinkcustom">
                  {t("projects")}
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="transition cursor-pointer border-b-2 border-transparent hover:border-textPinkcustom">
                  {t("contact")}
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block lg:hidden transition" onClick={toggleMenu}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>

        <div className="hidden lg:block relative">
          <button onClick={toggleMenu} className="flex items-center">
            <RiTranslate className="text-bleuLogo text-[22px]" />
            <IoMdArrowDropdown className="text-bleuLogo text-[22px]" />
          </button>
          {click && (
            <ul className="absolute top-full right-0 w-40 bg-white border border-gray-200 shadow-md mt-1 rounded-md">
              <li
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer hover:text-bleuLogo"
                onClick={() => changeLanguage("en")}
              >
                English
              </li>
              <li
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer hover:text-bleuLogo"
                onClick={() => changeLanguage("fr")}
              >
                Français
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
