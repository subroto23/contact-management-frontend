"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { navLogo } from "@/animate/Navbar.animate";
import { usePathname } from "next/navigation";
import Container from "../ui/Container/Container";

const Navbar = () => {
  const currentPath = usePathname();
  const navLink = (
    <>
      <Link
        href={"/contacts"}
        className={` hover:text-gray-200 text-xl font-semibold ${
          currentPath === "/contacts" ? "text-[#0FFBF9]" : "text-white"
        }`}
      >
        <li>
          <span>All Contacts</span>
        </li>
      </Link>
      <Link
        href={"/add-contact"}
        className={` hover:text-gray-200 text-xl font-semibold ${
          currentPath === "/add-contact" ? "text-[#0FFBF9]" : "text-white"
        }`}
      >
        <li>
          <span>Add Contacts</span>
        </li>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-gradient-to-r from-bodyColor  via-bodyColor to-primaryColor sticky top-0 z-[999]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff" // This applies to the entire SVG, but you can override individual paths if needed
              className="size-8 text-white"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M3 6H21"
                  stroke="#ffffff" // Make stroke white
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 14H21"
                  stroke="#ffffff" // Make stroke white
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 10L21 10"
                  stroke="#ffffff" // Make stroke white
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M3 18L21 18"
                  stroke="#ffffff" // Make stroke white
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <span className="btn btn-ghost text-xl">
          {/* Logo */}
          <motion.div variants={navLogo} initial="hidden" animate="visible">
            <Link
              href={"/"}
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 pl-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-primaryColor rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="text-xl text-white uppercase">Contactly</span>
            </Link>
          </motion.div>
        </span>
      </div>
      <div className="navbar-end hidden lg:flex md:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
    </div>
  );
};

export default Navbar;
