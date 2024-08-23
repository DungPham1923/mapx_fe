"use client";
import React, { Fragment, useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);
  return (
    <Fragment>
      <div className="h-full text-body flex flex-col">
        <div
          className="w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/backgroundhome.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <header className="z-50 w-full transition bg-transparent mt-5">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-2 lg:px-4 xl:px-8 relative">
              {/* Menu Button */}
              <button className="lg:hidden flex items-center justify-center p-2">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-hidden="true"
                  className="svg-icon fill-current"
                >
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-hidden="true"
                  className="svg-icon hidden fill-current"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
                <span className="sr-only">Menu</span>
              </button>

              {/* Logo and Title */}
              <div className="flex items-center space-x-4 flex-shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Map_X Logo"
                  className="h-12 w-auto"
                />
                <h5 className="text-xl font-bold dark:text-white">
                  Map_X Travel
                </h5>
              </div>

              {/* Nav Menu */}
              <div className="flex-1 flex justify-center">
                <nav className="hidden lg:flex items-center space-x-4 text-xl">
                  <a
                    href="#home"
                    className="text-white hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
                  >
                    Trang chủ
                  </a>
                  <a
                    href="#about"
                    className="text-white hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
                  >
                    Khám phá
                  </a>
                  <a
                    href="#schedule"
                    className="text-white hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
                  >
                    Đặt lịch
                  </a>
                  <a
                    href="#about"
                    className="text-white hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
                  >
                    Về chúng tôi
                  </a>
                  <a
                    href="#contact"
                    className="text-white hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
                  >
                    Liên hệ
                  </a>
                </nav>
              </div>
              <a
                className="inline-flex items-center justify-center px-4 py-2 border-2 border-gray-300  bg-transparent rounded-md text-base font-semibold hover:bg-gray-100 hover:border-gray-500 hover:text-gray-500 transition-colors duration-300 text-white"
                href="http://localhost:3000/login"
              >
                Đăng nhập
              </a>
            </div>
          </header>

          <div id="js-hero" className="w-full pb-40 pt-16 sm:pb-48 lg:pb-60">
            <div className="px-4 py-7 text-center md:py-8 bg-white bg-opacity-80 max-w-6xl mx-auto rounded-xl">
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl md:leading-snug text-black">
                Tạo 
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mx-2">
                  hành trình du lịch 
                </span>
                ngay trên Map_X Travel
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-black dark:text-black sm:text-lg sm:leading-relaxed">
                Đối với các chuyến đi trong quá khứ, hiện tại và tương lai. Đính
                kèm ảnh, video và bài viết vào bản đồ của bạn. Chia sẻ bằng một
                liên kết đơn giản.
              </p>

              <div className="mx-auto mt-7 flex flex-wrap justify-center gap-4">
                <a
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 bg-transparent rounded-lg text-base font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  href="https://travelmap.net/itinerary"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-hidden="true"
                    className="w-5 h-5 mr-2"
                  >
                    <path d="M4,10V14H13L9.5,17.5L11.92,19.92L19.84,12L11.92,4.08L9.5,6.5L13,10H4Z" />
                  </svg>
                  Dùng thử ứng dụng
                </a>

                <a
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 bg-transparent bg-blue-600 rounded-lg text-base font-medium hover:bg-blue-700 hover:text-white transition-colors duration-300"
                  href="https://clem.travelmap.net/cycling-around-australia"
                  title="Open the demo TravelMap blog (new tab)"
                  target="_blank"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-hidden="true"
                    className="w-4 h-4 mr-2"
                  >
                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                  </svg>
                  Tạo bài viết
                </a>
              </div>
            </div>
          </div>
        </div>

        <main className="relative flex flex-col flex-1 items-center justify-center text-center px-4 py-24 sm:px-6 lg:px-8"></main>

        <footer class="bg-neutral-700 py-8 px-6 text-white sm:px-8">
          <div class="mx-auto flex max-w-4xl flex-col items-center gap-8 xs:flex-row xs:justify-between">
            <div class="flex items-center text-xs">
              <a class="hover:underline" href="https://travelmap.net/terms">
                Terms
              </a>
              <div class="mx-4">•</div>
              <a class="hover:underline" href="https://travelmap.net/privacy">
                Privacy
              </a>
              <div class="mx-4">•</div>
              <a class="hover:underline" href="https://travelmap.net/credits">
                Credits
              </a>
            </div>

            <div class="flex flex-wrap gap-4">
              <a
                class="flex items-center rounded-full bg-[#0165e1] p-2 hover:brightness-90"
                href="https://www.facebook.com/TravelMapCommunity"
                title="Open our Facebook page (new tab)"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-hidden="true"
                  class="fill-white"
                >
                  <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"></path>
                </svg>
                <span class="sr-only">Facebook</span>
              </a>

              <a
                class="flex items-center rounded-full bg-[#dd2a7b] p-2 hover:brightness-90"
                href="https://www.instagram.com/TravelMapCommunity"
                title="Open our Instagram page (new tab)"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-hidden="true"
                  class="fill-white"
                >
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path>
                </svg>
                <span class="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}
