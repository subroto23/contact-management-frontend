"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  navLinkAnimateChild,
  navLinkAnimateParient,
  navLogo,
} from "@/animate/Navbar.animate";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-bodyColor  via-bodyColor to-primaryColor py-5   mx-auto flex flex-wrap justify-between flex-col md:flex-row items-center sticky top-0 z-[999] overflow-hidden">
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

      {/* Nav Links */}
      <motion.div
        className="flex gap-x-6 md:mr-12 mr-1"
        variants={navLinkAnimateParient}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={navLinkAnimateChild}>
          <Link
            href={"/contacts"}
            className=" hover:text-gray-200 text-xl font-semibold"
          >
            All Contacts
          </Link>
        </motion.div>
        <motion.div variants={navLinkAnimateChild}>
          <Link
            href={"/add-contact"}
            className="hover:text-gray-200 text-xl font-semibold"
          >
            Add Contacts
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navbar;
