import { useState, useEffect } from "react";

const images = [
  "src/assets/img/lp1.webp",
  "src/assets/img/lp2.webp",
  "src/assets/img/lp3.webp",
];

export default function AutoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="default-carousel" className="relative w-full">
      {/* Carousel */}
      <div className="relative h-[800px] overflow-hidden rounded-lg md:h-[800px]">
        {/* Item 1 */}
        <div
          className={`absolute block w-full h-full object-cover duration-1000 ease-in-out ${index === 0 ? "" : "hidden"}`}
        >
          <img src={images[0]} alt="..." className="w-full h-full object-cover rounded-xl" />
        </div>
        {/* Item 2 */}
        <div
          className={`absolute block w-full h-full object-cover duration-1000 ease-in-out ${index === 1 ? "" : "hidden"}`}
        >
          <img src={images[1]} alt="..." className="w-full h-full object-cover rounded-xl" />
        </div>
         {/* Item 3 */}
         <div
          className={`absolute block w-full h-full object-cover duration-1000 ease-in-out ${index === 2 ? "" : "hidden"}`}
        >
          <img src={images[2]} alt="..." className="w-full h-full object-cover rounded-xl" />
        </div>
      </div>
    </div>
  );
}
