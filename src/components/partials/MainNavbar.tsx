import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router";
import HeaderBg from "../../assets/images/header-bg.png";
import Logo from "../../assets/images/logos/logo_white.png";
import Sidebar from "./Sidebar";

const MainNavbar = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div
      style={{ backgroundImage: `url(${HeaderBg})`, backgroundSize: "cover" }}
    >
      <div className="py-[26px] max-width">
        <div className="flex items-center justify-between gap-2">
          <Link to={"/"} className="shrink-0">
            <img
              src={Logo}
              alt="Elite Logo White"
              className="w-[110px] object-contain"
            />
          </Link>
          <ul className="hidden md:flex items-center gap-4 lg:gap-10">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `text-[#D0DAE2] hover:text-white duration-200 text-sm lg:text-base ${
                    isActive ? "text-white font-semibold" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/courses"}
                className={({ isActive }) =>
                  `text-[#D0DAE2] hover:text-white duration-200 text-sm lg:text-base ${
                    isActive ? "text-white font-semibold" : ""
                  }`
                }
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about-us"}
                className={({ isActive }) =>
                  `text-[#D0DAE2] hover:text-white duration-200 text-sm lg:text-base ${
                    isActive ? "text-white font-semibold" : ""
                  }`
                }
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/career-advice"}
                className={({ isActive }) =>
                  `text-[#D0DAE2] hover:text-white duration-200 text-sm lg:text-base ${
                    isActive ? "text-white font-semibold" : ""
                  }`
                }
              >
                Career Advice
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact-us"}
                className={({ isActive }) =>
                  `text-[#D0DAE2] hover:text-white duration-200 text-sm lg:text-base ${
                    isActive ? "text-white font-semibold" : ""
                  }`
                }
              >
                Contact us
              </NavLink>
            </li>
          </ul>
          <Link
            to={"/"}
            className="px-6 lg:px-8 py-2 lg:py-4 rounded-[38px] bg-white hover:bg-transparent duration-200 hover:text-white border border-white font-semibold font-inter text-sm lg:text-base ml-auto md:ml-0"
          >
            Book a Call
          </Link>
          <button
            className="block md:hidden"
            onClick={() => setOpenSideBar(true)}
          >
            <GiHamburgerMenu className="text-white text-2xl" />
          </button>
          <Sidebar open={openSideBar} close={() => setOpenSideBar(false)} />
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
