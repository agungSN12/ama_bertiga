const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white p-10 md:m-10  rounded-3xl">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
          <div className="">
            <h3 className="font-bold text-lg mb-3">AMA BERTIGA</h3>
            <p className="text-xs leading-relaxed mb-4">
              PT Ama Bertiga adalah mitra terpercaya dalam pembuatan pakaian
              berkualitas, mulai dari seragam, koshen, hingga kebutuhan produk
              massal untuk berbagai sektor industri.
            </p>
            <p className="flex items-center text-xs mb-2 space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 0011.314-11.314l-1.414 1.414"
                />
              </svg>
              <span>Bandung, Indonesia</span>
            </p>
            <p className="flex items-center text-xs space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5h2l3.6 7.59-1.35 2.45A1.992 1.992 0 0010 18h10v-2H9.42a.25.25 0 01-.24-.34L10.28 14h7.42a2 2 0 002-2v-1a2 2 0 00-2-2H6.66"
                />
              </svg>
              <span>088-802-110-125</span>
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Program</h4>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Support</h4>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 flex justify-between items-center text-xs">
          <p>© 2025 Ama Bertiga All Rights Reserved.</p>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452H16.9v-5.569c0-1.328-.024-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.94v5.668H9.315V9h3.413v1.561h.048c.476-.9 1.637-1.852 3.369-1.852 3.604 0 4.271 2.372 4.271 5.457v6.286zM5.337 7.433a1.967 1.967 0 11-.001-3.934 1.967 1.967 0 01.001 3.934zm1.752 13.019H3.585V9h3.504v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.72v20.555C0 23.22.792 24 1.771 24h20.451C23.2 24 24 23.22 24 22.274V1.72C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;
