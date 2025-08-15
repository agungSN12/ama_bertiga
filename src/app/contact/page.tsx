"use client";
import Footer from "@/ui/Footer";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [name, setName] = useState("");

  const [message, setMessage] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi
      once: true,
    });
  }, []);

  const handleSend = () => {
    const url = `https://wa.me/6288802110125?text=${encodeURIComponent(
      `Halo saya ${name}\n ${message}`
    )}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="min-h-screen flex flex-col mt-16">
        {/* Hero Section */}
        <header className="bg-[url('/images/photo4_header.png')]  relative py-16 w-full  h-12 bg-no-repeat">
          <h1
            data-aos="fade-in"
            className="text-center z-20 text-2xl absolute inset-0 flex justify-center items-center text-white font-bold  tracking-widest"
          >
            CONTACT US
          </h1>
          <div className="bg-blue-color absolute w-full opacity-70  inset-0 h-full "></div>
        </header>

        {/* Main Content */}
        <main className="flex-1 container mx-auto md:px-28 px-10 py-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <section data-aos="fade-in" className="md:col-span-2">
            <form className="space-y-6 max-w-xl text-xs md:text-sm">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Post Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                ></textarea>
              </div>
              <button
                type="submit"
                className="primary-bg text-white hover:text-gray-900 px-6 py-3 font-semibold rounded-md  transition"
                onClick={handleSend}
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Contact Info */}
          <section className="space-y-8 text-gray-800 max-w-sm">
            <h2
              data-aos="fade-left"
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Get In Touch
            </h2>
            <p
              data-aos="fade-left"
              className="text-gray-600 text-xs md:text-sm"
            >
              Kami siap membantu Anda untuk segala kebutuhan produksi tekstil
              dan pakaian. Jangan ragu untuk menghubungi kami melalui kontak di
              bawah ini. Tim kami akan merespons dengan cepat dan profesional.
            </p>

            <div className="space-y-6" data-aos="fade-left">
              <div className="flex items-start space-x-4">
                <svg
                  className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M3 10h1l2 5 8-8-4-4-8 8 4 4"></path>
                  <circle cx="14" cy="7" r="4"></circle>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                    Call us
                  </h3>
                  <p className="text-gray-600  text-xs md:text-sm">
                    088-802-110-125
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <svg
                  className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M16 12v3a4 4 0 0 1-8 0v-3"></path>
                  <path d="M8 12h8m-4-7v4"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                    Email us
                  </h3>
                  <p className="text-gray-600  text-xs md:text-sm">
                    cvamabertiga@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <svg
                  className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M3 10h1l2 5 8-8-4-4-8 8 4 4"></path>
                  <circle cx="14" cy="7" r="4"></circle>
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                    Address
                  </h3>
                  <p className="text-gray-600  text-xs md:text-sm">
                    Kampung Pintu 1, Jln. Rancaekek-Majalaya No.193D RT/RW
                    06/07, Kec. Rancaekek, Kab. Bandung, Jawa-Barat 40394
                  </p>
                  <p className="text-gray-600  text-xs md:text-sm">Indonesia</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <Footer />
        </div>
      </div>
    </>
  );
}
