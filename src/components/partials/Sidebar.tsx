import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router";
import Logo from "../../assets/images/logos/logo_white.png";

type SidebarProps = {
  open: boolean;
  close: () => void;
};

const Sidebar = ({ open, close }: SidebarProps) => {
  return (
    <div
      className={`block md:hidden fixed w-full h-screen bg-black/30 z-[99999999] top-0 left-0 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className={`flex h-full w-full items-start max-w-[500px] ${
          open ? "translate-x-0" : "-translate-x-full"
        } duration-200`}
      >
        <div className="size-full bg-black">
          <div className="p-4 border-b border-[#D0DAE2]">
            <img src={Logo} alt="Elite Logo" className="w-[110px] mx-auto" />
          </div>
          <ul className="*:border-b *:border-[#D0DAE2]">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `text-[#D0DAE2] hover:text-white duration-200 p-3 block ${
                    isActive ? "text-white" : ""
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
                  `text-[#D0DAE2] hover:text-white duration-200 p-3 block ${
                    isActive ? "text-white" : ""
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
                  `text-[#D0DAE2] hover:text-white duration-200 p-3 block ${
                    isActive ? "text-white" : ""
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
                  `text-[#D0DAE2] hover:text-white duration-200 p-3 block ${
                    isActive ? "text-white" : ""
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
                  `text-[#D0DAE2] hover:text-white duration-200 p-3 block ${
                    isActive ? "text-white" : ""
                  }`
                }
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
        <button className="shrink-0 p-3" onClick={() => close()}>
          <IoClose className="text-4xl text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
