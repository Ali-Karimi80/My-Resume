import React from "react";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <motion.div className="overflow-hidden">
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 70,
          damping: 10,
        }}
      >
        <div className="container-fluid w-full bg-[#effbf8] pt-28 xl:px-10 min-h-screen 2xl:px-32 ">
          <div className="row flex-sm-row-reverse">
            <div className="col-12 col-lg-6">
              <div className="">
                <motion.img
                  initial={{
                    x: -50,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                  }}
                  src="images/Untitled-1.png"
                  className="img-fluid w-96 md:w-96 lg:w-full rounded-full"
                  alt=""
                />{" "}
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div>
                <div>
                  <motion.div
                    initial={{
                      y: -100,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.7,
                      duration: 0.5,
                    }}
                    className="text-[60px] min leading-[70px] font-extrabold text-blue-950 "
                  >
                    <div className="">
                      <h1 className="">
                        سلام، من <span className="text-[#A5A6FF]">علی</span>{" "}
                        هستم!
                      </h1>
                      <h1 className="">خلاق در برنامه نویسی</h1>
                      <h1 className="">ساکن در کرج</h1>
                    </div>
                    <p className="text-xl text-blue-900 mt-3">
                      من یک طراح وب و توسعه دهنده FRONTEND در کرج هستم با{" "}
                      <span className="text-[#A5A6FF]">+3 سال</span> تجربه.
                    </p>
                  </motion.div>
                </div>
                <motion.div
                  initial={{
                    y: 30,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.9,
                    duration: 0.5,
                  }}
                  className="mt-5"
                >
                  <button className="bg-blue-950 text-white py-[9px] px-10 rounded-md text-lg  ml-2 hover:bg-transparent hover:!text-slate-600 transition-all border-2 duration-300">
                    پروژه ای دارید؟
                  </button>
                  <button className=" text-slate-600 py-[9px] px-10 rounded-md text-lg tracking-wide hover:bg-blue-950 hover:!text-white transition-all border-2 duration-300">
                    بیا حرف بزنیم
                  </button>
                </motion.div>
                <motion.div
                  initial={{
                    x: 100,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1.1,
                    duration: 0.5,
                  }}
                  className="mt-36 mb-16 border-r-4 pr-3 space-y-5 text-2xl border-orange-500 rounded-sm font-bold"
                >
                  <p>09309602277</p>
                  <p>ak80850@gmail.com</p>
                  <p>ایران ، کرج ، رجایی شهر</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
