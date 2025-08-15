"use client";
import { Accordion, AccordionItem } from "@heroui/react";

export default function According() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            overflowY: "unset",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                ease: "easeInOut",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            overflowY: "hidden",
            transition: {
              height: {
                ease: "easeInOut",
                duration: 0.25,
              },
              opacity: {
                ease: "easeInOut",
                duration: 0.3,
              },
            },
          },
        },
      }}
      className="cursor-pointer"
    >
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="Apa saja jenis pakaian yang bisa kami jahit?"
        className="bg-gray-100 px-5 rounded-md "
      >
        <p className="text-xs md:text-sm ">
          Kami melayani berbagai jenis pakaian seperti kemeja, celana, gaun,
          seragam kerja, pakaian olahraga, jas, hingga busana custom sesuai
          permintaan pelanggan.
        </p>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title=" Bagaimana proses pemesanannya?"
        className="bg-gray-100 px-5 rounded-md cursor-pointer"
      >
        <p className="text-xs md:text-sm">
          1. Konsultasi desain & spesifikasi. <br />
          2. Penentuan bahan dan ukuran. <br />
          3. Pembuatan sampel (jika diperlukan). <br />
          4. Produksi massal atau pengerjaan custom. <br />
          5. Pengiriman atau pengambilan pesanan.
        </p>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="Apakah bisa pesan dari luar kota?"
        className="bg-gray-100 px-5 rounded-md cursor-pointer"
      >
        <p className="text-xs md:text-sm">
          Bisa. Kami menerima pesanan dari seluruh Indonesia dan menyediakan
          layanan pengiriman melalui ekspedisi terpercaya.
        </p>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 4"
        title="Bagaimana cara pembayaran?"
        className="bg-gray-100 px-5 rounded-md cursor-pointer"
      >
        <p className="text-xs md:text-sm">
          Pembayaran dapat dilakukan melalui transfer bank, e-wallet, atau
          tunai. Untuk produksi massal biasanya diperlukan DP (uang muka)
          minimal 50%.
        </p>
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Accordion 5"
        title="Apakah bisa menggunakan bahan sendiri?"
        className="bg-gray-100 px-5 rounded-md cursor-pointer"
      >
        <p className="text-xs md:text-sm">
          Bisa. Anda dapat membawa bahan kain sendiri, atau kami bisa
          menyediakan bahan sesuai pilihan warna dan kualitas yang diinginkan.
        </p>
      </AccordionItem>
    </Accordion>
  );
}
