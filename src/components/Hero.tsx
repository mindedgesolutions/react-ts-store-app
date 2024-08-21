import { HeroCarousel } from "@/components";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div className="">
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are chaning the people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odio
          similique aperiam, accusantium nemo assumenda eius quam, quas vitae
          cupiditate ex libero soluta iure placeat pariatur quasi consequuntur
          corrupti distinctio!
        </p>
        <Button asChild size={"lg"} className="mt-10">
          <Link to={`/products`}>Our products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};
export default Hero;
