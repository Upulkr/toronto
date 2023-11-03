import { featuresData } from "@/data";
import { FeatureCard } from "@/widgets/cards";
import FooterTwo from "./FooterTwo";
function Services() {
  return (
    <div className=" bg-white dark:bg-black">
      {" "}
      <div className="  bg-white dark:bg-black">
        {" "}
        <section className=" bg-white px-4 pb-20  pt-2 dark:bg-black ">
          <div className="bg-white p-2  dark:bg-black md:p-8">
            <div className="box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px  grid grid-cols-1 gap-8 bg-white dark:bg-black  md:grid-cols-2 lg:grid-cols-3">
              {featuresData.map(({ title, img, description }) => (
                <FeatureCard
                  key={title}
                  title={title}
                  img={img}
                  description={description}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <FooterTwo />
    </div>
  );
}

export default Services;
