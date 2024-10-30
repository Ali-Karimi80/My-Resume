import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col } from "react-bootstrap";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import { motion } from "framer-motion";
import "./ModalShip.css";
export default function ModalShip(props) {
  return (
    <>
      {props.selectModal === "ship" && (
        <Modal show={props.isShowShipModal} size="lg" centered scrollable>
          <Modal.Body>
            <img
              src="images/projectsModal/pirate-ship-bright-moon-widescreen-8ci3xdsqekjla2of.jpg"
              className="block rounded-md"
              alt=""
            />
            <div className=" bottom-0 text-white space-y-3 my-4">
              <h4 className="text-2xl text-slate-500">مودال</h4>
              <h3 className="text-4xl text-black">کشتی زیبا</h3>
            </div>
            <Container className="mb-12">
              <Row>
                <Col
                  xs={8}
                  className="text-slate-500 space-y-4 text-xl text-justify"
                >
                  <p>
                    ما در دنیایی زندگی می‌کنیم که باید به سرعت حرکت کنیم و
                    ایده‌های خود را تا حد امکان انعطاف‌پذیر تکرار کنیم. ماکت‌های
                    ساختمانی تعادل ایده‌آل را در سهولت اصلاح ایجاد می‌کنند.
                    ساختن ماکت‌ها تعادل ایده‌آل را برای سهولت اصلاح ایجاد
                    می‌کند.
                  </p>
                  <p>
                    موکاپ ها هم برای مرحله خلاقانه پروژه مفید هستند - به عنوان
                    مثال زمانی که سعی می کنید جریان های کاربری خود یا سلسله
                    مراتب بصری مناسب را بفهمید - و هم برای مرحله تولید زمانی که
                    آنها مرحله زمانی که محصول هدف را نشان می دهند مفید هستند.
                    ساختن ماکت‌ها تعادل ایده‌آل را برای سهولت اصلاح ایجاد
                    می‌کند.
                  </p>
                </Col>
                <Col className="pr-10 space-y-3" xs={4}>
                  <div className="space-y-1">
                    <h3 className="text-xl text-slate-600 font-bold">
                      کارفرما
                    </h3>
                    <h2 className="text-lg text-slate-500">ماهور حقانی</h2>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl text-slate-600 font-bold">
                      دسته بندی
                    </h3>
                    <h2 className="text-lg text-slate-500"> جعبه مودال</h2>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl text-slate-600 font-bold">تاریخ</h3>
                    <h2 className="text-lg text-slate-500"> 10 آبان، 1402</h2>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl text-slate-600 font-bold">
                      اشتراک گذاری
                    </h3>
                    <h2 className="text-lg text-slate-500">
                      <div className="flex justify-between items-center w-24 space-y-1">
                        <InstagramIcon className="hover:text-yellow-500 transition-all cursor-pointer" />
                        <XIcon className="hover:text-yellow-500 transition-all cursor-pointer" />
                        <TelegramIcon className="hover:text-yellow-500 transition-all cursor-pointer" />
                      </div>
                    </h2>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="images/projectsModal/1156882-The-Pirate-Bay-ship-1080P.jpg"
                className="img-fluid rounded-sm"
                alt=""
              />
            </div>
            <Container className="my-4 ">
              <Row>
                <Col className="overflow-hidden rounded-lg">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    className="rounded-lg h-full"
                    src="images/projectsModal/sailing-ship-o2p0tiowdb4s3zqv.jpg"
                    alt=""
                  />
                </Col>
                <Col className="overflow-hidden rounded-lg">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    className="rounded-lg h-full"
                    src="images/projectsModal/pirate-ship-bright-moon-widescreen-8ci3xdsqekjla2of.jpg"
                    alt=""
                  />
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                props.setIsShowShipModal(false);
              }}
            >
              بستن
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {props.selectModal === "Ui" && (
        <Modal show={props.isShowShipModal} size="lg" centered scrollable>
          <Modal.Body>
            <div class="h_iframe-aparat_embed_frame">
              <span style={{ display: "block", paddingTop: "57%" }}></span>
              <iframe
                src="https://www.aparat.com/video/video/embed/videohash/a279z4d/vt/frame"
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              ></iframe>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                props.setIsShowShipModal(false);
              }}
            >
              بستن
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {props.selectModal === "vimo" && (
        <Modal show={props.isShowShipModal} size="lg" centered scrollable>
          <Modal.Body>
            <div class="h_iframe-aparat_embed_frame">
              <span style={{ display: "block", paddingTop: "57%" }}></span>
              <iframe
                src="https://www.aparat.com/video/video/embed/videohash/a60D2/vt/frame"
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              ></iframe>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                props.setIsShowShipModal(false);
              }}
            >
              بستن
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {props.selectModal === "youTube" && (
        <Modal show={props.isShowShipModal} size="lg" centered scrollable>
          <Modal.Body>
            <div class="h_iframe-aparat_embed_frame">
              <span style={{ display: "block", paddingTop: "57%" }}></span>
              <iframe
                src="https://www.aparat.com/video/video/embed/videohash/pDVP0/vt/frame"
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              ></iframe>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                props.setIsShowShipModal(false);
              }}
            >
              بستن
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
