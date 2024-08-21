import Hero1 from "@/assets/hero1.webp";
import Hero2 from "@/assets/hero2.webp";
import Hero3 from "@/assets/hero3.webp";
import Hero4 from "@/assets/hero4.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

const carouselImages = [Hero1, Hero2, Hero3, Hero4];

const HeroCarousel = () => {
  return (
    <div className="hidden lg:block">
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-2">
                    <img
                      src={image}
                      alt="hero"
                      className="w-full h-[24rem] rounded-md object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default HeroCarousel;
