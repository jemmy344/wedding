"use client"
import { HeaderNavLinks, headerNavLinks } from "@/data/headerNavLinks";
import { siteMetadata } from "@/data/siteMetadata";
import { classNames } from "@/utils/utils";
import { Bars } from 'react-loader-spinner';



const Header = () => {
    return (
        <div className="navbar relative z-50 p-10 w-[100%]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-[#FF9C34]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[60] 
                    p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            headerNavLinks.map((navItem: HeaderNavLinks) => (
                                <li key={navItem.title}><a href={navItem.href}>{navItem.title}</a></li>
                            ))
                        }
                    </ul>
                </div>
                <a className={classNames(`lg:text-2xl text-3xl text-[#FF9C34] font-primary`, `normal-case`)}> {siteMetadata.couplesDetails.preferredThemeForEvent.length < 7 ? siteMetadata.couplesDetails.preferredThemeForEvent : siteMetadata.siteLogo}</a>
            </div>
            <div className="navbar-center hidden lg:flex text-white">
                {
                    headerNavLinks.map((navItem: HeaderNavLinks) => (
                        <div className="hover:text-secondary active:text-secondary
                             focus:text-secondary" key={navItem.title}><a className="btn btn-ghost font-normal font-secondary normal-case text-lg" href={navItem.href}>{navItem.title}</a></div>
                    ))
                }

            </div>

            <div className="navbar-end">
                <a className="">
                    <Bars
                        height="30"
                        width="90"
                        color="#FF9C34"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </a>
            </div>
        </div>
    );
}

const Name = ({ coupleName }: { coupleName: string }) => {
    return (
        <div className="top-[50%] left-[25%] font-primary text-5xl  absolute z-[120]">
            <h1>{coupleName}</h1>
        </div>
    );
}

const TopSection = () => {
    return (
        <>
            <Header />
            <div className="absolute inset-0 bg-topImage bg-cover">
                <Name coupleName={`${siteMetadata.couplesDetails.hisName} & ${siteMetadata.couplesDetails.herName}`} />
                <div className="h-screen w-full relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4e2a05] via-[#2b1d0b] to-[#2b1d0b] opacity-[71%]">

                    </div>

                </div>
            </div>

        </>



    )
}
export default TopSection;