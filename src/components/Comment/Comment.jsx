import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";

import { motion, useInView } from "framer-motion";

export default function Comment() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const [comments, setComments] = useState([
    {
      id: 1,
      src: "images/avatar/images.png",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      name: "محمد محمدی",
      work: "طراح رابط کاربری سافت برتر",
    },
    {
      id: 2,
      src: "images/avatar/92.png",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      name: "کیانا راد",
      work: "طراح ارشد دیی کالا",
    },
    {
      id: 3,
      src: "images/avatar/1.png",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
      name: "هرمز مولایی",
      work: "مدیر محصول ویو",
    },
  ]);

  return (
    <>
      <motion.div
        ref={ref}
        className="bg-[#FFF5F6] text-center py-5 md:py-14 lg:py-20 xl:py-28"
      >
        <motion.div
          style={{
            opacity: isInView ? 1 : 0,
            translateX: isInView ? 0 : 50,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s ",
          }}
        >
          <div className="space-y-6 mb-24">
            <span className="text-xl md:text-3xl text-stone-600">- نظرات</span>
            <h3 className="text-2xl md:text-4xl font-bold tracking-wide text-stone-900">
              مشتری ها درباره من چه می گویند؟
            </h3>
          </div>{" "}
          <div>
            <Swiper
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              direction={"vertical"}
              slidesPerView={1}
              spaceBetween={30}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination, Autoplay]}
              className="mySwiper d-none d-md-block max-h-96"
            >
              {comments.map((comment) => (
                <SwiperSlide className="px-5">
                  <div>
                    <p className="text-2xl text-slate-600">{comment.comment}</p>
                    <div className="flex mt-5 justify-center items-center bg-transparent">
                      <img
                        src={comment.src}
                        className="img-fluid border-4 border-white w-20 ml-5 rounded-full"
                        alt=""
                      />
                      <p className="text-2xl font-bold">{comment.name}</p>
                    </div>
                    <p className="text-slate-500 mt-2 text-xl">
                      {comment.work}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper !m-0 d-md-none pb-5"
            >
              {comments.map((comment) => (
                <SwiperSlide className="!m-0 !p-0 w-96">
                  <div>
                    <p className="text-lg text-slate-600">{comment.comment}</p>
                    <div className="flex mt-5 justify-center items-center bg-transparent">
                      <img
                        src={comment.src}
                        className="img-fluid border-4 border-white w-20 ml-5 rounded-full"
                        alt=""
                      />
                      <p className="text-2xl font-bold">{comment.name}</p>
                    </div>
                    <p className="text-slate-500 mt-2 text-xl">
                      {comment.work}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
