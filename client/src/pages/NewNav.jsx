import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [open, setOpen] = useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <nav className="flex justify-center fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Salon Toronto
          </span>
        </Link>

        <div className="flex md:order-2">
          <Link to="/booking">
            <button
              type="button"
              className="p-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
            >
              Book An Appointment
            </button>
          </Link>
          <div className="ml-auto md:hidden">
            <IconButton
              variant="text"
              size="sm"
              color="white"
              className="bg-white text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent dark:text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>
          <MobileNav
            className="rounded-xl bg-white px-4 pb-4 pt-2 text-blue-gray-900 dark:text-white"
            open={open}
          >
            <div className="mx-auto dark:text-white ">
              <ul className="text-center">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About</li>
                </Link>
                <Link to="/services">
                  <li>Services</li>
                </Link>
                <Link to="/contact">
                  <li>Contact</li>
                </Link>
              </ul>
            </div>
          </MobileNav>
        </div>
        <div className="w-full md:w-auto md:order-1 md:flex md:items-center md:justify-between">
          <ul className="mt-4 flex flex-col md:flex-row md:space-x-8 md:border-0 md:p-0 md:mt-0">
            <li>
              <Link
                to="/"
                className="block rounded py-2 pl-3 pr-4 text-blue-700 md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
