"use client";
import Footer from "@/ui/Footer";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi
      once: true,
    });
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      {/* Header */}
      <header className="bg-[url('/images/photo4_header.png')] relative py-16 w-full h-12 bg-no-repeat">
        <h1
          data-aos="fade-in"
          data-aos-inset="0"
          className="text-center z-20 text-2xl absolute inset-0 flex justify-center items-center text-white font-bold  tracking-widest"
        >
          ABOUT US
        </h1>
        <div className="bg-blue-color absolute w-full opacity-70  inset-0 h-full "></div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-full  px-6 md:px-12 py-10">
        {/* Intro Section */}
        <section className="max-w-full  ">
          <div className="space-y-6  md:p-12 p-4 md:space-y-10 md:grid lg:grid-cols-3  md:gap-x-10 text-gray-700 text-xs md:text-sm">
            <h2
              data-aos="fade-in"
              className="text-2xl md:text-3xl font-extrabold primary-color  mb-6"
            >
              Get to Know PT <span className="primary-color">AMA Bertiga</span>{" "}
              <span className="secondary-color">
                Your Trusted Textile and Garment Partner!
              </span>
            </h2>
            <p data-aos="fade-out">
              CV. AMABERTIGA adalah sebuah perusahaan lokal yang bekerja di
              bidang industri garment. Berdiri sejak tahun 2018 dengan hanya
              memiliki 3 unit mesin jahit, 1 unit mesin obras dan 1 unit mesin
              overdeck. Seiring berjalan waktu jumlah mesin dan karyawan
              bertambah walaupun produksi sempat terhenti selama pandemi
              covid-19 tapi Alhamdulilah pada tahun 2022 kami dapat beroperasi
              kembali, dan pada Januari 2025 Akta CV. AMA BERTIGAresmi di
              terbitkan.
            </p>

            <p data-aos="fade-out">
              Bertempat di Kampung Pintu 1, Jln. Rancaekek-Majalaya No.193D
              RT/RW 06/07, Kec. Rancaekek, Kab. Bandung, Jawa-Barat 40394.
              Memiliki kurang lebih 60 orang karyawan.  Memiliki mesin jahit
              kurang lebih berjumlah 50 unit dan memiliki mesin untuk finishing
              6 unit, dan 2 unit boiler
            </p>
          </div>
        </section>

        {/* Feature Cards */}
        <section
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="mt-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#246AF3] rounded-full flex items-center justify-center text-white font-bold text-lg">
                P1
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Line produksi
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">
                PT AMA Bertiga memiliki dua lini produksi aktif, yaitu woven dan
                knitting, yang mendukung proses manufaktur tekstil dan pakaian
                secara efisien dan berkualitas
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#246AF3] rounded-full flex items-center justify-center text-white font-bold text-lg">
                P2
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                kapasitas perbulan
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">
                PT AMA Bertiga memproduksi hingga 5.000 pcs woven dan 15.000 pcs
                knitting per bulan, mendukung produksi yang stabil dan
                berkualitas.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#246AF3] rounded-full flex items-center justify-center text-white font-bold text-lg">
                P3
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Klien dan Mitra
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">
                PT AMA Bertiga mengoperasikan area produksi dengan teknologi
                terbaru. Semua staff memiliki Kompetensi tinggi dan fokus pada
                hasil terbaik dalam produksi serta mengutamakan kepuasan
                pelanggan.
              </p>
            </div>
          </div>
        </section>

        {/* Large Banner Image */}
        <section
          data-aos="fade-out"
          className="mt-12 max-w-6xl mx-auto rounded-lg overflow-hidden shadow-md"
        >
          <Image
            src={"/images/about_photo1.png"}
            alt=""
            className=" h-64 w-full object-center object-cover"
            width={700}
            height={400}
          />
        </section>

        {/* Grid of images below */}
        <section className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <Image
              src={"/images/about_cutting.png"}
              className="md:w-52 w-full h-36 object-center rounded-lg"
              alt=""
              width={500}
              height={300}
            />
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <Image
              src={"/images/about_qc_finishing.png"}
              alt=""
              className="md:w-52 w-full h-36 object-center object-cover rounded-lg"
              width={500}
              height={300}
            />
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <Image
              src={"/images/about_qc.png"}
              className="md:w-52 w-full h-36 object-center object-cover rounded-lg"
              alt=""
              width={500}
              height={300}
            />
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <Image
              src={"/images/produksi.png"}
              className="md:w-52 w-full h-36 object-center object-cover rounded-lg"
              alt=""
              width={500}
              height={300}
            />
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <Image
              src={"/images/produksi2.png"}
              className="md:w-52 w-full h-36 object-center object-cover rounded-lg"
              alt=""
              width={500}
              height={300}
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <Footer />
      </div>
    </div>
  );
}
