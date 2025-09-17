import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-[#222222da] text-white py-8 bg-cover text-lg bg-no-repeat"
      style={{ backgroundImage: "url('/assets/footer-bg-Cu47M1vb.png')" }}
    >
      <div className="mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-wrap justify-between gap-2">
          {/* Logo + About */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img
              className="h-44 w-44"
              src="https://tajtaazagicatters.com/assets/logoCircle-fP27se6m.png"
              alt="logo"
            />
            <p className="mt-5">
              Let Taj Taazagi Catters transform your special occasion into a
              masterpiece with our professional touch.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2 mt-5">
              <a
                className="text-md text-rose-800 bg-white p-2 border-2 rounded-full"
                href="/"
              >
                {/* YouTube / Video Icon */}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
              </a>

              <a
                className="text-lg text-rose-800 bg-white p-2 border-2 rounded-full"
                href="https://www.facebook.com/share/1B1PjVfUYh/"
                target="_blank"
                rel="noreferrer"
              >
                {/* Facebook */}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
              </a>

              <a
                className="text-md text-rose-800 bg-white p-2 border-2 rounded-full"
                href="https://www.instagram.com/tajtaazagicatters?igsh=d3UyaHlyaWpiZzI5"
                target="_blank"
                rel="noreferrer"
              >
                {/* Instagram */}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Our Services</h2>
            <div className="w-full flex justify-between flex-row gap-2">
              <ul>
                <li className="mb-2 py-1">Annaprasana</li>
                <li className="mb-2 py-1">Birthday Party</li>
                <li className="mb-2 py-1">House Warming</li>
                <li className="mb-2 py-1">Mehndi Function</li>
                <li className="mb-2 py-1">Corporate Events</li>
              </ul>
              <ul>
                <li className="mb-2 py-1">Wedding Event</li>
                <li className="mb-2 py-1">60th Wedding Event</li>
                <li className="mb-2 py-1">Engagement</li>
                <li className="mb-2 py-1">Seemantham</li>
                <li className="mb-2 py-1">Reception</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="w-full md:w-1/3">
            <h2 className="text-md font-bold mb-4">Contact Now</h2>
            <h2 className="text-xl font-bold mb-4 uppercase text-rose-500">
              Namrata Foods
            </h2>

            <p className="py-1 flex gap-1 items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 384 512"
                height="24"
                width="24"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
              </svg>
              At. Kh No. 61, In Front Of Basera Near Hotel Jaya Pee Palace,
              Fatehabad Road, Agra.
            </p>

            <p className="mt-4 py-1 flex gap-1 items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 24 24"
                height="24"
                width="24"
              >
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"></path>
              </svg>
              <a href="tel:+919084153502" className="text-white">
                +91 9084153502
              </a>
              ,{" "}
              <a href="tel:+916386437881" className="text-white">
                +91 6386437881
              </a>
            </p>

            <p className="mt-4 text-white py-1 flex gap-1 items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 24 24"
                height="24"
                width="24"
              >
                <path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"></path>
              </svg>
              <a
                href="mailto:tajtaazagicatters@gmail.com"
                className="text-white"
              >
                tajtaazagicatters@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center p-5">
          <p>
            © 2025 Taj Taazagi Catters All rights reserved | Designed By{" "}
            <a
              href="https://namratauniversal.com/"
              target="_blank"
              rel="noreferrer"
              className="text-rose-500"
            >
              Namrata Universal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
