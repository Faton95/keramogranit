"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Banner() {
  const { t } = useLanguage();

  const features = [
    t("banner.feature1"),
    t("banner.feature2"),
    t("banner.feature3"),
    t("banner.feature4"),
    t("banner.feature5"),
  ];

  return (
    <section
      className="relative min-h-[600px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/banner-bg.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-center min-h-[600px]">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {t("banner.title")}
          </h1>
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-white text-lg"
              >
                <svg
                  className="w-5 h-5 text-green-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href="/collections"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
          >
            {t("banner.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
