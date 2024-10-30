import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="bg-[#E9F9FF] p-4">
      <Container fluid>
        <Row className="overflow-hidden">
          <Col xs={12} md={6}>
            <motion.div
              ref={ref}
              style={{
                opacity: isInView ? 1 : 0,
                translateX: isInView ? 0 : 50,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s ",
              }}
            >
              <div className="space-y-6 ">
                <span className="text-3xl text-stone-600">- ارتباط با من</span>
                <h3 className="text-4xl font-bold tracking-wide text-stone-900">
                  در تماس باشید
                </h3>
              </div>
              <p className="text-xl mt-4 text-slate-500">
                من در حال حاضر برای انجام پروژه های جدید آماده هستم، بنابراین
                میتوانید برای طراحی وبسایت موردنظر خود به من پیام بدید. شما می
                توانید در هر زمان در 24/7 تماس بگیرید یا در پیام رسان های مختلف
                به من پیام بدید :)
              </p>
              <div className="mt-14 border-r-4 mb-5 pr-3 space-y-5 text-2xl border-orange-500 rounded-sm font-bold">
                <p>09309602277</p>
                <p>ak80850@gmail.com</p>
                <p>ایران ، کرج ، رجایی شهر</p>
              </div>
            </motion.div>
          </Col>
          <Col xs={12} md={6}>
            <motion.div
              ref={ref}
              style={{
                opacity: isInView ? 1 : 0,
                translateX: isInView ? 0 : -50,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s ",
              }}
            >
              <Form>
                <Form.Group className="mb-4">
                  <Form.Control
                    type="text"
                    className="text-xl placeholder:text-slate-500 text-slate-100 py-2"
                    placeholder="نام شما..."
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control
                    type="email"
                    className="text-xl placeholder:text-slate-500 text-slate-100 py-2"
                    placeholder="ایمیل شما..."
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <textarea
                    id=""
                    className="w-full h-[120px] placeholder:text-slate-500 text-xl p-2 rounded-md border"
                    placeholder="پیغام شما..."
                  ></textarea>
                </Form.Group>

                <button
                  type="submit"
                  className="bg-blue-950 text-white py-[9px] px-10 rounded-md text-lg tracking-wide ml-4 hover:bg-transparent hover:!text-slate-600 transition-all border-2 duration-300"
                >
                  پروژه ای دارید؟
                </button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
