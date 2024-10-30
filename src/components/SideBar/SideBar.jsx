import React, { useState } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import IconButton from "@mui/material/IconButton";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function SideBar() {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <div className="sticky top-0">
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
          duration: 1,
          type: "spring",
          stiffness: 70,
          damping: 10,
        }}
        className="mt-5 text-center w-full"
      >
        <motion.img
          initial={{
            y: -50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          src="images/photo14303127844.jpg"
          className="img-fluid w-32 rounded-full block mx-auto border-2 !border-purple-500"
          alt=""
        />
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
            delay: 0.7,
            duration: 0.5,
          }}
          className="mt-2 mb-32"
        >
          <h2 className="text-4xl font-bold  pt-4 relative ">
            علی کریمی
            <h2 className="text-7xl  opacity-10 absolute top-0 w-full">
              علی کریمی
            </h2>
          </h2>
        </motion.div>
        <nav>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.9,
              duration: 0.5,
            }}
            className="text-2xl space-y-4 font-bold text-slate-500 "
          >
            <li>
              <Link
                to="/"
                className={`${
                  activeItem === "home"
                    ? "text-[#9b9cff]"
                    : "hover:text-[#b7b8ff] transition-all duration-200"
                }`}
                onClick={() => setActiveItem("home")}
              >
                خانه
              </Link>
            </li>
            <li>
              <Link
               to="/about"
                className={`${
                  activeItem === "about"
                    ? "text-[#A5A6FF]"
                    : "hover:text-[#b7b8ff] transition-all duration-200"
                }`}
                onClick={() => setActiveItem("about")}
              >
                درباره من
              </Link>
            </li>
            <li>
              <Link
               to="/services"
                className={`${
                  activeItem === "services"
                    ? "text-[#A5A6FF]"
                    : "hover:text-[#b7b8ff] transition-all duration-200"
                }`}
                onClick={() => setActiveItem("services")}
              >
                خدمات
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`${
                  activeItem === "resume"
                    ? "text-[#A5A6FF]"
                    : "hover:text-[#b7b8ff] transition-all duration-200"
                }`}
                onClick={() => setActiveItem("resume")}
              >
                نمونه کارها
              </Link>
            </li>
            <li>
              <Link
               to="/weblog" 
                className={`${
                  activeItem === "weblog"
                    ? "text-[#A5A6FF]"
                    : "hover:text-[#b7b8ff] transition-all duration-200"
                }`}
                onClick={() => setActiveItem("weblog")}
              >
                وبلاگ
              </Link>
            </li>
            <li>
              <Link
                to="/footer"
                className={`${
                  activeItem === "call"
                    ? "text-[#A5A6FF]"
                    : "hover:text-[#b7b8ff] transition-all duration-200"
                }`}
                onClick={() => setActiveItem("call")}
              >
                ارتباط با من
              </Link>
            </li>
          </motion.ul>
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1.1,
              duration: 0.5,
            }}
          >
            <div className="mt-20">
              <IconButton>
                <TelegramIcon className="text-blue-500 !text-5xl bg-slate-100 p-2 rounded-full" />
              </IconButton>
              <IconButton>
                <AlternateEmailIcon className="text-red-500 !text-5xl bg-slate-100 p-2 rounded-full" />
              </IconButton>
              <IconButton>
                <LinkedInIcon className="text-blue-500 !text-5xl bg-slate-100 p-2 rounded-full" />
              </IconButton>
            </div>
          </motion.div>
        </nav>
      </motion.div>
    </div>
  );
}
