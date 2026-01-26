"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const ItalianEquipmentIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const VarietyIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
    />
  </svg>
);

const QualityIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
);

const LogisticsIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
    />
  </svg>
);

export default function AboutCompany() {
  const { t } = useLanguage();
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      id: 1,
      titleKey: "about.feature1.title",
      descKey: "about.feature1.desc",
      icon: <ItalianEquipmentIcon />,
    },
    {
      id: 2,
      titleKey: "about.feature2.title",
      descKey: "about.feature2.desc",
      icon: <VarietyIcon />,
    },
    {
      id: 3,
      titleKey: "about.feature3.title",
      descKey: "about.feature3.desc",
      icon: <QualityIcon />,
    },
    {
      id: 4,
      titleKey: "about.feature4.title",
      descKey: "about.feature4.desc",
      icon: <LogisticsIcon />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                {t("about.title")}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("about.description")}
              </p>
            </div>
            <div
              ref={imageRef}
              className={`relative transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Modern interior with porcelain tiles"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className={`absolute -bottom-6 -left-6 w-32 h-32 bg-amber-600 rounded-2xl -z-10 transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              />
              <div
                className={`absolute -top-6 -right-6 w-24 h-24 bg-gray-200 rounded-2xl -z-10 transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-10"
                }`}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group text-center p-6 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 text-amber-600 mb-6 transition-all duration-300 group-hover:bg-amber-600 group-hover:text-white group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="group bg-gray-50 rounded-xl p-6 text-center transition-all duration-300 hover:bg-amber-600 hover:shadow-lg">
              <p className="text-3xl sm:text-4xl font-bold text-amber-600 mb-2 transition-colors duration-300 group-hover:text-white">
                {t("about.stat1.value")}
              </p>
              <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-amber-100">
                {t("about.stat1.desc")}
              </p>
            </div>

            <div className="group bg-gray-50 rounded-xl p-6 text-center transition-all duration-300 hover:bg-amber-600 hover:shadow-lg">
              <p className="text-3xl sm:text-4xl font-bold text-amber-600 mb-2 transition-colors duration-300 group-hover:text-white">
                {t("about.stat2.value")}
              </p>
              <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-amber-100">
                {t("about.stat2.desc")}
              </p>
            </div>

            <div className="group bg-gray-50 rounded-xl p-6 text-center transition-all duration-300 hover:bg-amber-600 hover:shadow-lg">
              <p className="text-3xl sm:text-4xl font-bold text-amber-600 mb-2 transition-colors duration-300 group-hover:text-white">
                {t("about.stat3.value")}
              </p>
              <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-amber-100">
                {t("about.stat3.desc")}
              </p>
            </div>

            <div className="group bg-gray-50 rounded-xl p-6 text-center transition-all duration-300 hover:bg-amber-600 hover:shadow-lg">
              <p className="text-3xl sm:text-4xl font-bold text-amber-600 mb-2 transition-colors duration-300 group-hover:text-white">
                {t("about.stat4.value")}
              </p>
              <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-amber-100">
                {t("about.stat4.desc")}
              </p>
            </div>

            <div className="group bg-gray-50 rounded-xl p-6 text-center transition-all duration-300 hover:bg-amber-600 hover:shadow-lg">
              <p className="text-3xl sm:text-4xl font-bold text-amber-600 mb-2 transition-colors duration-300 group-hover:text-white">
                {t("about.stat5.value")}
              </p>
              <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-amber-100">
                {t("about.stat5.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
