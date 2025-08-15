"use client";
import According from "@/ui/According";
import Footer from "@/ui/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BagIcon,
  CaretRightIcon,
  CreditCardIcon,
  MapPinAreaIcon,
  PhoneCallIcon,
  StorefrontIcon,
  UserCheckIcon,
  UsersFourIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { ModalProps } from "@/interfaces/IModal";
import Modal from "@/ui/Modal";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi
      once: true,
    });
  }, []);
  const [modal, setModal] = useState<ModalProps | null>(null);
  return (
    <>
      <main className="bg-gray-50 min-h-screen overflow-hidden">
        <section className="relative bg-[url('/images/photo1.png')] bg-no-repeat h-96 lg:h-screen bg-center rounded-4xl m-5 md:my-0 md:mx-9 items-center flex  ">
          <div className="px-4  md:p-16" data-aos="fade-in" data-aos-offset="0">
            <p className="text-yellow-400 font-semibold text-sm sm:text-base mb-2">
              Ama<span className="font-bold primary-color">Bertiga</span>
            </p>
            <h1 className="text-white text-2xl md:text-5xl primary-color font-extrabold leading-tight mb-6">
              Pusat Tekstil Dan <br /> Pakaian Terlengkap!
            </h1>
            <button className=" inline-flex items-center text-xs md:text-base gap-2 primary-bg  text-white hover:text-gray-900 font-semibold px-4 py-2 rounded-full transition-colors duration-300 ease-in-out">
              kunjungi toko kami
              <span>
                <CaretRightIcon size={20} />
              </span>
            </button>
          </div>

          {/* Info Bar */}
          <div
            data-aos="fade-up"
            className=" w-full  absolute left-1/2  flex flex-col sm:flex-row bottom-[-20.5rem] md:bottom-[-20rem] lg:bottom-[-5.5rem]  items-center sm:items-start text-gray-700"
          >
            <div className="bg-white rounded-xl md:w-full lg:w-5xl shadow-lg gap-14 flex flex-col lg:flex-row p-5 md:p-8 transform -translate-x-1/2 ">
              <div className="flex items-center space-x-4 max-w-full ">
                <div className="flex gap-4">
                  <span className=" flex justify-center items-center secondary-color">
                    <StorefrontIcon size={32} />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-semibold  text-sm md:text-base">
                      Store
                    </h4>
                    <p className="text-xs md:text-sm  text-gray-500">
                      Tersedia di e-Katalog untuk pengadaan tekstil dan seragam
                      instansi secara resmi dan mudah
                    </p>
                    <Link href={"#"} className="text-xs font-semibold">
                      Lihat Disini
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 max-w-full ">
                <div className="flex gap-4">
                  <span className=" flex justify-center items-center secondary-color">
                    <MapPinAreaIcon size={32} />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-semibold  text-sm md:text-base">
                      Address
                    </h4>
                    <p className="text-xs md:text-sm  text-gray-500">
                      Berlokasi di Rancaekek-Majalaya PT AMA Bertiga menjalankan
                      produksi secara efisien.
                    </p>
                    <Link
                      href={
                        "https://www.google.com/maps?q=-6.96582942396002,107.75251183176617"
                      }
                      target="_blank"
                      className="text-xs font-semibold"
                    >
                      Lihat Disini
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 max-w-full ">
                <div className="flex gap-4">
                  <span className=" flex justify-center items-center secondary-color">
                    <PhoneCallIcon size={32} />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-semibold  text-sm md:text-base">
                      Contact
                    </h4>
                    <p className="text-xs md:text-sm  text-gray-500">
                      Hubungi kami untuk informasi dan kerja sama. Kami siap
                      membantu Anda.
                    </p>
                    <Link
                      href={
                        "https://api.whatsapp.com/send?phone=6288802110125&text=Halo%20saya%20ingin%20bertanya"
                      }
                      target="_blank"
                      className="text-xs font-semibold"
                    >
                      Hubungi Disini
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="max-w-7xl mt-[20rem] md:mt-[22rem] lg:mt-48 md:mb-20 justify-center  mx-auto px-6 sm:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="pl-4" data-aos="fade-in">
            <h2 className="text-2xl md:text-3xl font-extrabold primary-color mb-4 leading-tight">
              Welcome To <br />
              <span className="text-yellow-400">Ama Bertiga</span>
            </h2>
            <p className="text-gray-600 leading-relaxed  text-xs md:text-base max-w-xl mb-6">
              Kami bergerak di bidang perdagangan tekstil, menghadirkan berbagai
              pilihan kain berkualitas untuk berbagai kebutuhan dari yang
              sehari-hari sampai yang spesial. Setiap produk yang kami pilih dan
              distribusikan punya cerita, detail, dan standar yang jelas.
            </p>
            <Link
              href={"/about"}
              className="primary-bg text-xs md:text-sm text-white font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300"
            >
              kunjungi profile toko kami
            </Link>
          </div>
          <div
            data-aos="fade-left"
            className="overflow-hidden  flex items-center justify-end"
          >
            <Image
              src={"/images/seragam.jpg"}
              alt=""
              className="flex shadow-lg rounded-xl"
              width={300}
              height={300}
            />
          </div>
        </section>

        {/* kenapa pilih toko kami */}
        <div className="bg-blue-color  text-white rounded-4xl p-10 max-w-7xl mx-auto mt-10">
          <h2
            data-aos="fade-out"
            className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight text-center"
          >
            Kenapa harus beli di Toko Kami?
          </h2>
          <p
            data-aos="fade-in"
            className="text-center text-xs md:text-sm mb-8 max-w-2xl mx-auto"
          >
            Kami terbukti, layanan terpercaya, mitra yang bisa diandalkan. Kami
            hadir untuk jadi bagian dari setiap langkah bisnismu di dunia
            tekstil.
          </p>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {/* Left Image */}
            <div
              data-aos="zoom-in"
              className="md:w-1/3 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={"/images/photo3.png"}
                alt=""
                width={300}
                height={300}
              />
            </div>
            {/* Right Content List */}
            <div
              data-aos="fade-out"
              className="md:w-2/3 flex flex-col  justify-center space-y-14"
            >
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center  bg-opacity-20 rounded-full w-12 h-12 shrink-0">
                  <CreditCardIcon size={50} />
                </div>
                <div>
                  <h3 className="font-semibold text-md md:text-lg mb-1">
                    Produk Tekstil Berkualitas
                  </h3>
                  <p className="text-xs md:sm text-white/80 ">
                    Kami menyediakan berbagai jenis kain dan produk tekstil
                    unggulan, mulai dari bahan lokal hingga impor dengan standar
                    mutu tinggi.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center  bg-opacity-20 rounded-full w-12 h-12 shrink-0">
                  <BagIcon size={50} />
                </div>
                <div>
                  <h3 className="font-semibold text-md md:text-lg mb-1">
                    Akses Pemesanan Fleksibel
                  </h3>
                  <p className="text-xs md:text-sm text-white/80">
                    Pelanggan bisa melakukan pemesanan kapan saja melalui sistem
                    online kami yang siap 24/7.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center  bg-opacity-20 rounded-full w-12 h-12 shrink-0">
                  <UsersFourIcon size={50} />
                </div>
                <div>
                  <h3 className="font-semibold text-md md:text-lg mb-1">
                    Jaringan Supplier & Mitra Luas
                  </h3>
                  <p className="text-xs md:text-sm text-white/80">
                    Didukung oleh jaringan mitra dan supplier dari berbagai
                    daerah, kami terus memenuhi kebutuhan tekstil dalam skala
                    kecil hingga besar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Produk Unggulan Section */}
        <section className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
          <h2
            data-aos="fade-out"
            className="text-2xl md:text-3xl mb-2 primary-color font-bold"
          >
            Produk Unggulan Kami
          </h2>
          <p
            data-aos="fade-in"
            className="text-gray-600 text-xs md:text-sm mb-6 max-w-xl "
          >
            Produk Unggulan Kami, Pilihan Terbaik untuk Anda! Dirancang dengan
            kualitas terbaik, harga bersahabat, dan hasil yang memuaskan.
          </p>
          <div className="h-0.5 w-24 bg-blue-color mb-10"></div>

          {/* Produk Cards */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-4">
                <h3 className="font-semibold text-md md:text-sm mb-2 primary-color">
                  Seragam
                </h3>
                <p className="text-gray-500 text-xs md:text-sm mb-4 ">
                  Bahan kuat, nyaman, tahan lama, warna awet, dan tetap rapi.
                </p>
                <div className="overflow-hidden rounded-lg ">
                  <Image
                    src={"/images/photo2.png"}
                    alt=""
                    className="w-full  h-72 object-cover "
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-4">
                <h3 className="font-semibold text-md md:text-sm mb-2 primary-color">
                  Baju
                </h3>
                <p className="text-gray-500 text-xs md:text-sm mb-4 ">
                  {" "}
                  Bahan premium, jahitan rapi, desain modern, nyaman dipakai,
                  dan tahan lama.
                </p>
                <div className="overflow-hidden rounded-lg ">
                  <Image
                    src={"/images/kaos.jpg"}
                    alt=""
                    className="w-full h-72 object-cover"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-4">
                <h3 className="font-semibold text-md md:text-sm mb-2 primary-color">
                  Kemeja
                </h3>
                <p className="text-gray-500 text-xs md:text-sm mb-4 ">
                  Bahan lembut, potongan pas, jahitan presisi, rapi, dan
                  nyaman seharian.
                </p>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={"/images/kemeja.jpg"}
                    alt=""
                    className="w-full h-72 object-cover"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          {/* <div className="flex justify-end mt-10">
            <button className="primary-bg text-xs md:text-sm text-white hover:text-gray-900 px-5 py-2 rounded-md font-semibold transition-colors duration-300">
              Lihat produk selengkapnya
            </button>
          </div> */}
        </section>

        <div className="min-h-screen bg-white primary-color mt-20 px-6 py-12 max-w-7xl mx-auto">
          {/* Contact Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 lg:gap-20">
            <div className="flex-1 max-w-lg md:pl-14">
              <h2
                data-aos="fade-in"
                className="text-2xl md:text-3xl font-semibold mb-3"
              >
                Hubungi Kami untuk Info atau Kerja Sama
              </h2>
              <p
                data-aos="fade-out"
                className="text-gray-600 mb-6 leading-relaxed text-xs md:text-sm "
              >
                Kami siap membantu Anda! Untuk pertanyaan, dukungan, atau kerja
                sama, jangan ragu menghubungi kami. Isi formulir sesuatu yang
                bermanfaat bagimu.
              </p>
              <Link
                href={"/contact"}
                data-aos="fade-in"
                className="primary-bg text-xs md:text-sm text-white hover:text-gray-900 px-6 py-2 rounded-md font-semibold  transition"
              >
                Contact Us
              </Link>
            </div>
            <div data-aos="fade-left" className="flex justify-center ">
              <Image
                src={"/images/photo_baju2.jpg"}
                alt=""
                className="h-64 object-cover rounded-xl"
                width={300}
                height={300}
              />
            </div>
          </section>

          {/* Testimony Section */}
          <section className=" space-y-12 mt-28">
            <h3
              data-aos="fade-in"
              className="text-2xl md:text-3xl font-semibold mb-8"
            >
              Testimony
            </h3>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="border border-gray-200 rounded-md p-6 text-gray-700 bg-white">
                <p className="mb-4 text-xs md:text-sm italic">
                  “Pelayanan yang sangat memuaskan! Saya merasa sangat terbantu
                  dan prosesnya cepat serta mudah dipahami.”
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex justify-center items-center bg-sky-600">
                    <span>
                      <UserCheckIcon size={20} color="white" />
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-xs md:text-sm">
                      Rifki alfiansyah
                    </p>
                    <p className="text-[10px] text-gray-400">Customer</p>
                  </div>
                </footer>
              </div>
              <div className="border border-gray-200 rounded-md p-6 text-gray-700 bg-white">
                <p className="mb-4 text-xs md:text-sm italic">
                  “Hasil kerja rapi, detail, dan tepat waktu. Top banget
                  pokoknya.”
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex justify-center items-center bg-sky-600">
                    <span>
                      <UserCheckIcon size={20} color="white" />
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-xs md:text-sm">
                      budiman sutyo
                    </p>
                    <p className="text-[10px] text-gray-400">Customer</p>
                  </div>
                </footer>
              </div>
              <div className="border border-gray-200 rounded-md p-6 text-gray-700 bg-white">
                <p className="mb-4 text-xs md:text-sm italic">
                  “Produk sesuai ekspektasi, kualitasnya bagus”
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex justify-center items-center bg-sky-600">
                    <span>
                      <UserCheckIcon size={20} color="white" />
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-xs md:text-sm">
                      dini rosita
                    </p>
                    <p className="text-[10px] text-gray-400">Customer</p>
                  </div>
                </footer>
              </div>
            </div>
          </section>

          {/* Feedback Section */}
          <section
            data-aos="fade-out"
            className="mt-20 flex flex-col lg:flex-row justify-center items-center gap-16"
          >
            <div className="flex-1 max-w-lg">
              <h3 className="text-md md:text-lg font-semibold mb-3">
                Bagikan pendapatmu Tentang Toko Kami
              </h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6">
                Bagikan pendapat serta pengalamanmu menggunakan produk kami,
                karena setiap masukan darimu membantu kami berkembang dan
                memberikan yang terbaik.
              </p>
              <button
                onClick={() =>
                  setModal({
                    message:
                      "maaf fitur ini tidak bisa di pakai untuk sementara waktu",
                    type: "danger",
                  })
                }
                className="primary-bg text-xs md:text-sm text-white hover:text-gray-900 font-semibold px-6 py-2 rounded-md transition"
              >
                Sampaikan Masukanmu
              </button>
            </div>
            <form className="flex-1 space-y-6 max-w-md w-full">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="mb-1 text-xs md:text-sm font-medium text-gray-700"
                >
                  Nama
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 text-xs md:text-sm rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="category"
                  className="mb-1 text-xs md:text-sm font-medium text-gray-700"
                >
                  Tanggapan
                </label>
                <input
                  id="tanggapan"
                  type="text"
                  placeholder="Tanggapan"
                  className="border border-gray-300 text-xs md:text-sm rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </form>
          </section>
        </div>

        <div className=" w-full bg-white flex flex-col justify-between">
          <main className="container mx-auto px-5 md:px-16 py-12 max-w-full ">
            <h2
              data-aos="fade-in"
              className="text-center text-gray-800 font-semibold text-2xl md:text-3xl mb-6"
            >
              Frequently Asked Questions
            </h2>
            <div data-aos="fade-out">
              <According />
            </div>
          </main>
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <Footer />
          </div>
        </div>

        {modal && (
          <Modal
            message={modal.message}
            type={modal.type}
            onOk={() => setModal(null)}
          />
        )}
      </main>
    </>
  );
}
