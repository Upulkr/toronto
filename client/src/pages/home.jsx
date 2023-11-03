import "@dotlottie/player-component";
import { teamData } from "../data/team-data";
import { TeamCard } from "../widgets/cards/team-card";
import { Footer } from "../widgets/layout/footer";

import { IconButton, Typography } from "@material-tailwind/react";
import Call from "./Call";
import ChatBox from "./ChatBox";
import HeroSection from "./HeroSection";
import Example from "./NewServices";
import Offers from "./Offers";
import Saloon from "./Saloon";
import Testomonials from "./Testomonials";

export function Home() {
  return (
    <div className="overflow-y-hidden">
      <HeroSection />

      <Saloon />
      <Offers />
      <section className=" m-5 overflow-y-hidden bg-white  pt-12">
        <Example />
      </section>

      <section className="m-7 bg-white px-4 pb-10 pt-4 ">
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
      </section>

      <section className=" overflow-y-hidden  bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto overflow-y-hidden">
          <Typography
            variant="h1"
            color="Black"
            className="mb-8 text-center font-black  dark:text-white"
          >
            MEET THE EXPERTS
          </Typography>
          <div className="grid grid-cols-1 gap-6 overflow-y-hidden bg-white md:grid-cols-2 lg:grid-cols-4 ">
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
      <Call />
      <div className=" overflow-y-hidden bg-white">
        <Footer />
      </div>
      <div>
        <ChatBox />
      </div>
    </div>
  );
}

export default Home;
