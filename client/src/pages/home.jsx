import "@dotlottie/player-component";
import { teamData } from "../data/team-data";
import { TeamCard } from "../widgets/cards/team-card";
import { Footer } from "../widgets/layout/footer";

import { IconButton, Typography } from "@material-tailwind/react";
import ChatBox from "./ChatBox";
import Example from "./NewServices";
import Testomonials from "./Testomonials";
import { LazyLoadImage } from "react-lazy-load-image-component";
import HeroSection from "./HeroSection";
import Call from "./Call";
import Saloon from "./Saloon";
import Offer from "./Offers";
import Offers from "./Offers";


export function Home() {
  return (

 
    <div className="overflow-y-hidden">
    <HeroSection/>
 
      {/* <div className="  relative flex min-h-screen flex-col   bg-center sm:bg-cover  bg-white  ">
      <LazyLoadImage 
            alt="bg image"
            className="h-w-full object-contain mt-5 sm:max-h bg-white  "
            src="./img/hairbackground.jpg"
          />
        <div className="max-w-8xl container relative mx-auto bg-white  m-9 pb-5 ">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center ">
            <Typography variant="h1" color="black" className=" p-5 m-4   sm:pt-8 ">
              Unleash Your Beauty
            </Typography>
            <Typography variant="lead" color="balck" className="">
              Welcome to hair and body Therapy Salon!
            </Typography>
         
          </div>
        </div>
      </div> */}
 <Saloon/>
 <Offers />
      <section className=" m-5 pt-12 bg-white  overflow-y-hidden">
        <Example />
      </section>
    
      <section className="m-7 px-4 pb-10 pt-4 bg-white ">
        <div className="container mx-auto">
          <Typography
            variant="h1"
            color="black"
            className="mb-8 text-center font-black  dark:text-white"
          >
            Our happy clients say about us
          </Typography>
        </div>


        <Testomonials />
        {/* <div >
          {Customers.map(({ comment }) => (
            <Testomonials comment={comment} />
          ))}
        </div> */}
      </section>

      <section className=" bg-white  px-4 pb-20 pt-4 overflow-y-hidden">
        <div className="container mx-auto overflow-y-hidden">
          <Typography
            variant="h1"
            color="Black"
            className="mb-8 text-center font-black  dark:text-white"
          >
            MEET THE EXPERTS
          </Typography>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 bg-white overflow-y-hidden ">
            {teamData.map(({ img, name, position, socials, id }) => (
              <TeamCard
                key={id}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
<Call/>
      <div className=" bg-white overflow-y-hidden">
        <Footer />
        {/* <div>  <OpenHours  key={id}
            id={id}
             open={open}
             close= {close}
             day={day}/></div> */}
      </div>
      <div>
        <ChatBox />
      </div>
  
    </div>
  );
}

export default Home;
