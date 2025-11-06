"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Transformations = () => {
  const transformations = [
    { id: 1, before: "/client-assets/t1.jpg" },
    { id: 2, before: "/client-assets/t2.jpg" },
    { id: 3, before: "/client-assets/t3.jpg" },
    { id: 4, before: "/client-assets/t4.jpg" },
    { id: 5, before: "/client-assets/t5.jpg" },
    { id: 6, before: "/client-assets/t6.jpg" },
    { id: 8, before: "/client-assets/t8.jpg" },
    { id: 9, before: "/client-assets/t9.jpg" },
    { id: 10, before: "/client-assets/t10.jpg" },
    { id: 11, before: "/client-assets/t11.jpg" },
    { id: 12, before: "/client-assets/t12.jpg" },
    { id: 13, before: "/client-assets/t13.jpg" },
    { id: 14, before: "/client-assets/t14.jpg" },
    { id: 15, before: "/client-assets/t15.jpg" },
    { id: 16, before: "/client-assets/t16.jpg" },
    { id: 17, before: "/client-assets/t17.jpg" },
    { id: 18, before: "/client-assets/t18.jpg" },
    { id: 19, before: "/client-assets/t19.jpg" },
    { id: 20, before: "/client-assets/t20.jpg" },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.max(transformations.length - visibleCards + 1, 1);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev < transformations.length - visibleCards ? prev + 1 : 0
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, [visibleCards, transformations.length]);

  return (
    <section className="pt-6 md:pt-10 pb-24 px-4 sm:px-10 md:px-20">
      <div className="max-w-[1200px] mx-auto relative">
        <p className="text-black font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-3">
          Wellness from Our Thriving Community
        </p>
        <p className="text-center text-sm sm:text-base md:text-lg text-[#404040] font-semibold max-w-[900px] mx-auto">
          Experience the best wellness transformations through our community-driven support and personal coaching
        </p>

        <div className="relative mt-10">
          <div className="overflow-hidden">
            <div
              className="flex gap-8 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {transformations.map((t) => (
                <div
                  key={t.id}
                  className={`rounded-3xl relative flex overflow-hidden flex-shrink-0 ${
                    visibleCards === 1
                      ? "w-full"
                      : visibleCards === 2
                      ? "w-[calc(50%-16px)]"
                      : "w-[calc(33.333%-21px)]"
                  }`}
                >
                  <Image
                    src={t.before}
                    alt="before"
                    width={500}
                    height={500}
                    className="w-full h-80 sm:h-72 md:h-[400px] object-cover"
                  />
                  <div className="absolute rounded-full bg-[#BBD63C] px-6 sm:px-8 md:px-10 py-2 sm:py-3 left-1/2 -translate-x-1/2 bottom-3 sm:bottom-4 text-black flex items-center justify-between gap-3 sm:gap-5 md:gap-8 text-xs sm:text-sm md:text-base">
                    <div className="bg-white text-black px-2 py-1 rounded-lg">
                      <p className="text-[10px] sm:text-xs">Transformation</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots always visible */}
        <div className="hidden md:flex mt-8 justify-center gap-2">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-[#BBD63C]" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;
