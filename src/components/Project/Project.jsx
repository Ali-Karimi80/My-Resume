import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import ModalShip from "../ModaiShip/ModaiShip";

export default function Project() {
  const [isShowShipModal, setIsShowShipModal] = useState(false);
  const [selectModal, setSelectModal] = useState("");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      <div className="overflow-hidden">
        <div className="py-5 md:py-14 lg:py-20 xl:py-28 mt-32 mb-14">
          <motion.div
            ref={ref}
            style={{
              opacity: isInView ? 1 : 0,
              translateX: isInView ? 0 : -50,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s ",
            }}
          >
            <div className="space-y-4 px-4 md:px-6 lg:px-10 xl:px-28 mb-5">
              <p className="text-slate-500 text-3xl">- پروژه ها</p>
              <p className="font-bold text-4xl">پروژه های تکمیل شده اخیر</p>
            </div>
            <div>
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper px-4 md:px-6 lg:px-10 xl:px-28 pb-4 "
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              >
                <SwiperSlide>
                  <div
                    className="overflow-hidden rounded-md"
                    onClick={() => {
                      setIsShowShipModal(true);
                      setSelectModal("ship");
                    }}
                  >
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <img
                        className="h-96 w-full img-fluid block mx-auto"
                        src="images/projectsModal/ffa79e70ec087af9d82c53924a7ca2f9.jpg"
                        alt=""
                      />
                    </motion.div>
                  </div>
                  <div className=" mt-3 space-y-2">
                    <h4 className="text-2xl text-slate-500">مودال</h4>
                    <h3 className="text-4xl text-blue-900">کشتی زیبا</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="overflow-hidden rounded-md"
                    onClick={() => {
                      setIsShowShipModal(true);
                      setSelectModal("Ui");
                    }}
                  >
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <img
                        className="h-96 w-full img-fluid block mx-auto"
                        src="images/projectsModal/6230147.jpg"
                        alt=""
                      />
                    </motion.div>
                  </div>
                  <div className=" mt-3 space-y-2">
                    <h4 className="text-2xl text-slate-500">ساند کلاد</h4>
                    <h3 className="text-4xl text-blue-900">طراحی خلاقانه</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="overflow-hidden rounded-md"
                    onClick={() => {
                      setIsShowShipModal(true);
                      setSelectModal("vimo");
                    }}
                  >
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <img
                        className="h-96 w-full img-fluid block mx-auto"
                        src="images/projectsModal/hanged-brown-and-white-converse-all-star-high-top-sneaker.jpg"
                        alt=""
                      />
                    </motion.div>
                  </div>
                  <div className=" mt-3 space-y-2">
                    <h4 className="text-2xl text-slate-500">ویمو</h4>
                    <h3 className="text-4xl text-blue-900">ویگورا</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="overflow-hidden rounded-md"
                    onClick={() => {
                      setIsShowShipModal(true);
                      setSelectModal("youTube");
                    }}
                  >
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <img
                        className="h-96 w-full img-fluid block mx-auto"
                        src="images/projectsModal/desktop-wallpaper-youtube-3d-logo-gray-brickwall-creative-social-networks-youtube-logo-3d-art-youtube.jpg"
                        alt=""
                      />
                    </motion.div>
                  </div>
                  <div className=" mt-3 space-y-2">
                    <h4 className="text-2xl text-slate-500">یوتیوب</h4>
                    <h3 className="text-4xl text-blue-900">تکنولوژی نوین</h3>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>{" "}
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-blue-950 text-white py-[9px] px-10 rounded-md text-lg tracking-wide ml-4 hover:bg-transparent mt-5 block mx-auto hover:!text-slate-600 border-2"
            >
              پروژه ای دارید؟
            </motion.button>
          </motion.div>
        </div>
      </div>{" "}
      {isShowShipModal && (
        <ModalShip
          selectModal={selectModal}
          isShowShipModal={isShowShipModal}
          setIsShowShipModal={setIsShowShipModal}
        />
      )}
    </>
  );
}
