import { HeaderNavLinks, headerNavLinks } from "@/data/headerNavLinks";
import { siteMetadata } from "@/data/siteMetadata";
import { classNames } from "@/utils/utils";
import { Parallax } from "react-scroll-parallax";
import SoundSwitcher from "./SoundSwitcher";

const Header = () => {
  return (
    <div className="">
      <div className="absolute z-[9999] w-full">
        <Parallax speed={50} translateY={[100, -200]}>
          <div className=" absolute flex justify-center items-center navbar  p-10 w-full">
            <div className="navbar-start">
              <div className="dropdown">
                <label
                  tabIndex={0}
                  className="btn btn-ghost lg:hidden text-rose-gold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>

                <ul
                  tabIndex={0}
                  className="menu

                    menu-sm dropdown-content mt-3 z-[301]

                    p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {headerNavLinks.map((navItem: HeaderNavLinks) => (
                    <li key={navItem.title}>
                      <a href={navItem.href}>{navItem.title}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                className={classNames(
                  `lg:text-2xl text-3xl text-rose-gold font-secondary`,

                  `normal-case`
                )}
              >
                {" "}
                {siteMetadata.couplesDetails.preferredThemeForEvent.length < 7
                  ? siteMetadata.couplesDetails.preferredThemeForEvent
                  : siteMetadata.siteLogo}
              </a>
            </div>

            <div className="navbar-center hidden lg:flex text-white">
              {headerNavLinks.map((navItem: HeaderNavLinks) => (
                <div
                  className="hover:text-secondary active:text-secondary

                             focus:text-secondary"
                  key={navItem.title}
                >
                  <a
                    className="btn btn-ghost font-normal font-secondary normal-case text-lg"
                    href={navItem.href}
                  >
                    {navItem.title}
                  </a>
                </div>
              ))}
            </div>

            <div className="navbar-end">
              <a className="">
                <SoundSwitcher />
              </a>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};
export default Header;
