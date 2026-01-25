"use client";

import { useEffect, useRef, useState } from "react";

const FreeDeliveryIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
    />
  </svg>
);

const FastDeliveryIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const deliveryFeatures = [
  {
    icon: <FreeDeliveryIcon />,
    title: "Free Delivery",
    description:
      "Free delivery of products purchased on the website within Tashkent",
  },
  {
    icon: <FastDeliveryIcon />,
    title: "Fast Delivery",
    description:
      "Delivery within 24 hours or at the time specified by the customer",
  },
];

export default function PaymentDelivery() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
              Payment and Delivery
            </h2>
            <div className="space-y-6">
              {deliveryFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-90 rotate-3"
            }`}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Fast delivery service"
                className={`w-full h-full object-cover transition-transform duration-[1500ms] ${
                  isVisible ? "scale-100" : "scale-110"
                }`}
              />
            </div>
            <div
              className={`absolute -bottom-4 -right-4 w-28 h-28 bg-amber-600 rounded-full -z-10 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-0"
              }`}
            />
            <div
              className={`absolute -top-4 -left-4 w-20 h-20 bg-gray-300 rounded-full -z-10 transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-0"
              }`}
            />
            <div
              className={`absolute top-1/2 -right-8 w-16 h-16 border-4 border-amber-400 rounded-full -z-10 transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-0"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
