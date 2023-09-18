import { Carousel } from "@material-tailwind/react";
 
export default function CarouselCustomNavigation() {
  return (
    <>
    <div className="flex flex-col justify-center items-center">
    <div className="text-4xl font-bold text-center my-[3rem]">
        OUR <span className="text-[#EB0028]">GALLERY</span>
      </div>
    <Carousel
      className="rounded-xl w-3/5 mini:w-4/5"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="./gallery/tedx2019.png"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="./gallery/1.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="./gallery/2.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="./gallery/3.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="./gallery/4.jpg"
        alt="image 4"
        className="h-full w-full object-cover"
      />
    </Carousel>
    </div>
    </>
  );
}