import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { motion, useInView } from "framer-motion";

export default function Introduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const dataInformations = [
    { id: 1, title: 3, detail: "سال تجربه مستمر" },
    { id: 2, title: 5, detail: "پروژه تکمیل شده" },
    { id: 3, title: 4, detail: "مشتری راضی" },
  ];
  return (
    <Container className="mt-20 mb-32 overflow-hidden">
      <Row>
        <Col xs={12} lg={5} xl={4}>
          <motion.div ref={ref}>
            <motion.div
              style={{
                opacity: isInView ? 1 : 0,
                translateX: isInView ? 0 : 50,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s ",
              }}
            >
              <span className="text-gray-500 text-2xl font-bold">
                - از ملاقات شما خوشبختم!
              </span>
              <h3 className="text-blue-950 text-5xl tracking-wider mt-4 font-bold">
                علی کریمی
              </h3>
              <p className="text-blue-900 text-xl mt-4">FRONTEND DEVELOPER</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-blue-950 mb-5 text-white py-[9px] px-10 rounded-md text-lg tracking-wide hover:bg-transparent mt-5 hover:!text-slate-600 border-2"
              >
                پروژه ای دارید؟
              </motion.button>
            </motion.div>
          </motion.div>
        </Col>
        <Col xs={12} lg={7} xl={8}>
          <motion.div className="overflow-hidden" ref={ref}>
            <motion.div
              style={{
                opacity: isInView ? 1 : 0,
                translateX: isInView ? 0 : -50,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
              }}
              className="text-2xl text-gray-600 space-y-10"
            >
              <p>
                سلام! من <span className="text-orange-500">علی کریمی</span>{" "}
                هستم. من یک طراح وب و توسعه دهنده بخش FRONTEND، من در کار بسیار پرتلاش و خستگی ناپذیر هستم.
              </p>
              <p>
                {" "}
                با 3 سال تجربه به عنوان یک طراح گرافیک حرفه ای، مهارت ها و دانش
                لازم برای موفقیت پروژه شما را به دست آورده ام. من از هر مرحله از
                فرآیند طراحی، از بحث و همکاری لذت می برم.
              </p>
              <Table responsive>
                <thead>
                  <tr className="text-center">
                    <th>
                      <span className="text-gray-600">سن</span>
                    </th>
                    <th>
                      <span className="text-gray-600">ساکن</span>
                    </th>
                    <th>
                      <span className="text-gray-600">ایمیل</span>
                    </th>
                    <th>
                      <span className="text-gray-600">تلفن</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center ">
                    <td>23</td>
                    <td>کرج</td>
                    <td>ak80850&gmail.com</td>
                    <td>09309602277</td>
                  </tr>
                </tbody>
              </Table>
            </motion.div>{" "}
          </motion.div>
        </Col>
      </Row>
      <Row className="mt-20">
        {dataInformations.map((data) => (
          <Col xs={12} xl={4} className="overflow-hidden" key={data.id}>
            <motion.div
              style={{
                opacity: isInView ? 1 : 0,
                translateY: isInView ? 0 : 50,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={` w-[95%] block mx-auto rounded-md mb-4 py-11 px-5 text-center bg-gradient-to-r from-[#A5A6FF] to-blue-500 text-white`}
              >
                <p className="text-[40px]">{data.title}</p>
                <p className="text-2xl">{data.detail}</p>
              </motion.div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
