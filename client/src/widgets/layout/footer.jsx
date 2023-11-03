import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import OpenHours from "@/pages/OpenHours";
import OpenTimes from "@/data/OpenTimes";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <>
   <footer className="dark:bg-black   relative px-4 pt-8 pb-6 dark:text-white bg-white sm:flex-cols-1 mr-3">
        <div className=" grid sm:grid-cols-1 lg:grid-cols-1 md:cols-1 xl:grid-cols-3 justify-center mx-auto ">
          <div className="flex flex-wrap pt-6 text-center lg:text-left pb-4">
            <div className="w-full px-4 lg:w-6/12 j mx-auto">
              <Typography variant="h2" className=" mx-auto grid w-max text-center" color="black dark:text-white">
                {title}
              </Typography>
              <Typography className="dark:text-white text-center font-normal text-black">
                {description}
              </Typography>
              <div className="dark:text-white mx-auto mt-6 mb-8 ml-5 flex justify-center gap-2 md:mb-0 lg:justify-start ">
                {socials.map(({ color, name, path }) => (
                  <a key={name} href={path} target="_blank" rel="noopener noreferrer">
                    <IconButton color="white" className="rounded-full">
                      <Typography color={color}>
                        <i className={`fa-brands fa-${name}`} />
                      </Typography>
                    </IconButton>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className=" mr-3 flex justify-between xl:justify-center lg:w-2/3 md:w-1/2 xl:w-full sm:flex-cols-1 lg:flex-cols-1 md:flex-cols-1 bg-black-300 rounded-lg overflow-hidden sm:mr-10 p-10  items-end relative mx-auto ">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 lg:flex-cols-1 md:flex-cols-1"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58164782.846126474!2d-142.1396116791268!3d27.153250409320055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891964c04d0f17%3A0x9954d851d387227e!2sSalon%20U!5e0!3m2!1sen!2slk!4v1697637303562!5m2!1sen!2slk"
              vnb-frameid="2993"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md p-2">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs dark:text-white">ADDRESS</h2>
                <p className="mt-1 dark:text-white">Hair and body Toronto</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs dark:text-white">EMAIL</h2>
                <a className="text-indigo-500 leading-relaxed dark:text-white">example@email.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed dark:text-white">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="mx-auto grid w-max m-5 lg:mt-0 ">
            <Typography variant="h3" className="dark:text-white font-normal text-black text-center">
              SALON HOURS
            </Typography>
            {OpenTimes.map(({ open, close, day, id }) => (
              <OpenHours open={open} close={close} day={day} key={id} />
            ))}
          </div>
        </div>
      </footer>
      <div className="flex flex-wrap items-center justify-center md:justify-between">
      <div className="mx-auto w-full px-4 text-center">
        <Typography
          variant="small"
          className="font-normal text-black  dark:text-white"
        >
         
          {copyright}
        </Typography>
      </div>
     
    </div>
    </>
  );
}

Footer.defaultProps = {
  title: "Salon Noya",
  description:
    "Your hair & body is a reflection of your personality",
  socials: [
    {
      color: "blue",
      name: "facebook",
      path: "https://www.facebook.com/CreativeTim",
    },
    {
      color: "light-blue",
      name: "twitter",
      path: "https://www.twitter.com/creativetim",
    },
    // {
    //   color: "purple",
    //   name: "instagram",
    //   path: "https://www.instagram.com/creativetimofficial/",
    // },
    // {
    //   color: "pink",
    //   name: "dribbble",
    //   path: "https://www.dribbble.com/creativetim",
    // },
    {
      color: "red",
      name: "youtube",
      path: "https://www.youtube.com/",
    },
    // {
    //   color: "black",
    //   name: "github",
    //   path: "https://github.com/creativetimofficial/material-tailwind",
    // },
  ],
  menus: [
    {
      name: "useful links",
      items: [
        // { name: "About Us", path: "https://www.creative-tim.com/presentation" },
        // { name: "Blog", path: "https://www.creative-tim.com/blog" },
        // {
        //   name: "Github",
        //   path: "https://www.github.com/creativetimofficial/material-tailwind?ref=mtk",
        // },
        {
          name: "Products",
          // path: "https://www.creative-tim.com/templates/free?ref=mtk",
        },
      ],
    },
    {
      name: "other resources",
      items: [
        {
          name: " License",
          // path: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk",
        },
        {
          name: "Contribute",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk",
        },
        {
          name: "Change Log",
          // path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk",
        },
        {
          name: "Contact Us",
          path: "/contact",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} Saloon Noya
    </>
  ),
};



Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
