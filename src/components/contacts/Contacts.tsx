"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";

const PhoneIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const EmailIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  city: string;
  message: string;
  agreeToProcessing: boolean;
}

export default function ContactsPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    city: "",
    message: "",
    agreeToProcessing: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          city: formData.city,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        city: "",
        message: "",
        agreeToProcessing: false,
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
            {t("contacts.title")}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {t("contacts.getInTouch")}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("contacts.fullName")}
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors text-gray-900 placeholder:text-gray-400 bg-white"
                    placeholder={t("contacts.fullName.placeholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("contacts.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors text-gray-900 placeholder:text-gray-400 bg-white"
                    placeholder={t("contacts.email.placeholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("contacts.phone")}
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors text-gray-900 placeholder:text-gray-400 bg-white"
                    placeholder={t("contacts.phone.placeholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("contacts.city")}
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors text-gray-900 placeholder:text-gray-400 bg-white"
                    placeholder={t("contacts.city.placeholder")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t("contacts.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors resize-none text-gray-900 placeholder:text-gray-400 bg-white"
                    placeholder={t("contacts.message.placeholder")}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="agreeToProcessing"
                    name="agreeToProcessing"
                    checked={formData.agreeToProcessing}
                    onChange={handleChange}
                    required
                    className="w-5 h-5 accent-amber-600 border-gray-300 rounded cursor-pointer"
                  />
                  <label
                    htmlFor="agreeToProcessing"
                    className="text-sm text-gray-600 cursor-pointer"
                  >
                    {t("contacts.agree")}
                  </label>
                </div>
                {status === "success" && (
                  <p className="text-green-600 text-sm font-medium">{t("contacts.success")}</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-sm font-medium">{t("contacts.error")}</p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {status === "sending" ? t("contacts.sending") : t("contacts.send")}
                </button>
              </form>
            </div>

            {/* Contact Information & Map */}
            <div className="flex flex-col gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  {t("contacts.title")}
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="text-amber-600 flex-shrink-0">
                      <PhoneIcon />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{t("contacts.phoneLabel")}</p>
                      <a
                        href="tel:+37068026411"
                        className="text-gray-800 font-medium hover:text-amber-600 transition-colors"
                      >
                        +370 680 26411
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-amber-600 flex-shrink-0">
                      <LocationIcon />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{t("contacts.addressLabel")}</p>
                      <p className="text-gray-800 font-medium">
                        {t("contacts.address")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-amber-600 flex-shrink-0">
                      <EmailIcon />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{t("contacts.emailLabel")}</p>
                      <a
                        href="mailto:saleinfo@prime-ceramics.com"
                        className="text-gray-800 font-medium hover:text-amber-600 transition-colors"
                      >
                        saleinfo@prime-ceramics.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex-1 min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8554427839673!2d69.2795!3d41.3111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b534c65a977%3A0x7c8b87c4e0c8a1e1!2s2%20Parkent%20St%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
