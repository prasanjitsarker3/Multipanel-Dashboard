import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Drawer,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const openMobileNav = () => {
    setOpenNav(true);
    setOpenDrawer(true);
  };

  const closeMobileNav = () => {
    setOpenNav(false);
    setOpenDrawer(false);
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-lg ">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-lg">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-lg">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-lg">
          Docs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/mainDashboard/info" className="flex items-center text-lg">
          Dashboard
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="w-[calc(100%+48px)] overflow-scroll">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer text-2xl py-1.5 font-medium"
          >
            Material Tailwind
          </Typography>
          <div className="flex items-center gap-4 mr-8">
            <div className="hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Buy Now</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={openMobileNav}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          <Drawer
            open={openDrawer}
            onClose={closeMobileNav}
            className="p-4 fixed inset-y-0 left-0 w-64 lg:hidden"
          >
            <div className="mb-6 flex items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                Material Tailwind
              </Typography>
              <IconButton
                variant="text"
                color="blue-gray"
                // onClick={closeDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
            <Typography
              color="gray"
              className="mb-8 pr-4 font-normal bg-teal-700"
            >
              Material Tailwind features multiple React and HTML components, all
              written with Tailwind CSS classes and Material Design guidelines.
            </Typography>
            <div className="flex gap-2">
              <Button size="sm">Get Started</Button>
              <Button size="sm" variant="outlined">
                Documentation
              </Button>
            </div>
          </Drawer>
        </MobileNav>
      </Navbar>
    </div>
  );
};
export default Header;
