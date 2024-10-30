import React, { useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { motion, useScroll, useSpring } from "framer-motion";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import TelegramIcon from "@mui/icons-material/Telegram";
import IconButton from "@mui/material/IconButton";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function App() {
  const route = useRoutes(routes);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [activeItem, setActiveItem] = useState("home");
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <motion.div
        className="h-3 d-none d-lg-block bg-[#A5A6FF] fixed-top  z-10"
        style={{ scaleX }}
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 d-none d-lg-block p-0">
            <SideBar />
          </div>
          <div className="col-12 d-block p-0 d-lg-none">
            <Navbar
              expanded={expanded}
              onToggle={() => setExpanded(!expanded)}
              expand="lg"
              className="fixed-top bg-white"
            >
              <Container fluid>
                <Navbar.Brand className="text-indigo-500 text-3xl font-bold">
                  رزومه
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-lg`}
                  placement="start"
                >
                  <Offcanvas.Header
                    className="text-2xl"
                    closeButton
                  ></Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="text-center pe-3">
                      <div className="flex flex-col justify-evenly min-h-[80vh]">
                        <img
                          src="images/photo14303127844.jpg"
                          className="img-fluid w-32 rounded-full block mx-auto border-2 !border-purple-500"
                          alt=""
                        />
                        <ul className="text-2xl space-y-4 font-bold text-slate-500 ">
                          <li>
                            <Link
                              to="/"
                              className={`  ${
                                activeItem === "home"
                                  ? "text-[#9b9cff]"
                                  : "hover:text-[#b7b8ff] transition-all duration-200"
                              }`}
                              onClick={() => {
                                setActiveItem("home");
                                setExpanded(false);
                              }}
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
                              onClick={() => {
                                setActiveItem("about");
                                setExpanded(false);
                              }}
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
                              onClick={() => {
                                setActiveItem("services");
                                setExpanded(false);
                              }}
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
                              onClick={() => {
                                setActiveItem("resume");
                                setExpanded(false);
                              }}
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
                              onClick={() => {
                                setActiveItem("weblog");
                                setExpanded(false);
                              }}
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
                              onClick={() => {
                                setActiveItem("call");
                                setExpanded(false);
                              }}
                            >
                              ارتباط با من
                            </Link>
                          </li>
                        </ul>
                        <div>
                          <IconButton>
                            <TelegramIcon className="text-blue-500 !text-5xl bg-slate-100 p-2 rounded-full" />
                          </IconButton>
                          <IconButton>
                            <AlternateEmailIcon className="text-red-500 !text-5xl bg-slate-100 p-2 rounded-full" />
                          </IconButton>
                          <IconButton>
                            <LinkedInIcon className="text-blue-500 !text-5xl bg-slate-100 p-2 rounded-full" />
                          </IconButton>
                        </div>{" "}
                      </div>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </div>
          <div className="col-12 col-lg-9 p-0">
            <ScrollToTop />
            {route}
          </div>
        </div>
      </div>
    </div>
  );
}
