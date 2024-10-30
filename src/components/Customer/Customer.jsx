import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";

export default function Customer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const [imgIcons, setImgIcons] = useState([
    { id: 1, src: "images/IconPicture/1.png" },
    { id: 2, src: "images/IconPicture/2.png" },
    { id: 3, src: "images/IconPicture/3.png" },
    { id: 4, src: "images/IconPicture/4.png" },
    { id: 5, src: "images/IconPicture/5.png" },
    { id: 6, src: "images/IconPicture/6.png" },
    { id: 7, src: "images/IconPicture/7.png" },
    { id: 8, src: "images/IconPicture/8.png" },
  ]);

  return (
    <>
      <motion.div
        ref={ref}
        className="pt-28 py-5 md:py-14 lg:py-20 xl:py-28 px-4 md:px-6 lg:px-10 xl:px-28"
      >
        <motion.div
          style={{
            opacity: isInView ? 1 : 0,
            translateY: isInView ? 0 : 50,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s ",
          }}
        >
          <div className="space-y-6 mb-24">
            <span className="text-3xl text-stone-600">- مشتریان</span>
            <h3 className="text-4xl font-bold tracking-wide text-stone-900">
              مشتریان و کارفرمایان
            </h3>
          </div>{" "}
          <Container>
            <Row>
              {imgIcons.map((imgIcon) => (
                <Col xs={6} md={3} className="mb-20 border-b pb-5">
                  <div className="divide-x-8 divide-y-8 space-x-10">
                    <img className="mx-auto " src={imgIcon.src} alt="" />
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </motion.div>
      </motion.div>
    </>
  );
}
