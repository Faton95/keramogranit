"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface CarouselItem {
  id: number;
  image: string;
  title: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image: "/images/collections/basalt.jpg",
    title: "BASALT",
  },
  {
    id: 2,
    image: "/images/collections/callacata.jpg",
    title: "CALLACATA",
  },
  {
    id: 3,
    image: "/images/collections/carrara.jpg",
    title: "CARRARA",
  },
  {
    id: 4,
    image: "/images/collections/concreto.webp",
    title: "CONCRETO",
  },
  {
    id: 5,
    image: "/images/collections/desert.webp",
    title: "DESERT",
  },
  {
    id: 6,
    image: "/images/collections/dust.webp",
    title: "DUST",
  },
  {
    id: 7,
    image: "/images/collections/gloria.webp",
    title: "GLORIA",
  },
  {
    id: 8,
    image: "/images/collections/loft.jpg",
    title: "LOFT",
  },
  {
    id: 9,
    image: "/images/collections/mineral.webp",
    title: "MINERAL",
  },
  {
    id: 10,
    image: "/images/collections/onice.jpg",
    title: "ONICE",
  },
  {
    id: 11,
    image: "/images/collections/pulpis.webp",
    title: "PULPIS",
  },
  {
    id: 12,
    image: "/images/collections/rock.webp",
    title: "ROCK",
  },
  {
    id: 13,
    image: "/images/collections/terra.webp",
    title: "TERRA",
  },
  {
    id: 14,
    image: "/images/collections/victoria.webp",
    title: "VICTORIA",
  },
];

const ITEMS_PER_PAGE = 5;
const AUTO_SWIPE_INTERVAL = 5000;

export default function Carousel() {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(carouselItems.length / ITEMS_PER_PAGE);

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, AUTO_SWIPE_INTERVAL);

    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {t("carousel.title")}
          </h2>
          <div className="w-[100px] h-1 bg-amber-600 mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {t("carousel.description")}
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="flex-shrink-0 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {carouselItems
                  .slice(
                    pageIndex * ITEMS_PER_PAGE,
                    (pageIndex + 1) * ITEMS_PER_PAGE,
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      className="group relative aspect-square rounded-lg overflow-hidden bg-gray-200 cursor-pointer"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-semibold text-sm sm:text-base">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? "bg-amber-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`${t("carousel.goToPage")} ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/collections"
            className="group relative inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:bg-amber-700 hover:shadow-lg hover:shadow-amber-600/30 hover:-translate-y-1"
          >
            <span className="relative z-10">{t("carousel.viewAll")}</span>
            <svg
              className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
