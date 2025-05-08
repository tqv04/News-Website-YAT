"use client";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "./style/service.module.css";
export default function Service() {
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col className={`${styles.serviceCol}`}>
            <Image
              src="/baohanh.webp"
              width={50}
              height={50}
              alt="sevice"
            ></Image>
            <h1>Bảo hành dài hạn</h1>
            <p>
              Chính sách bảo hành dài hạn như để khẳng định giá trị cốt lõi,
              thương hiệu mà Roman luôn hướng tới.
            </p>
          </Col>
          <Col className={`${styles.serviceCol}`}>
            <Image
              src="/baohanh.webp"
              width={50}
              height={50}
              alt="sevice"
            ></Image>
            <h1>Bảo hành dài hạn</h1>
            <p>
              Chính sách bảo hành dài hạn như để khẳng định giá trị cốt lõi,
              thương hiệu mà Roman luôn hướng tới.
            </p>
          </Col>
          <Col className={`${styles.serviceCol}`}>
            <Image
              src="/baohanh.webp"
              width={50}
              height={50}
              alt="sevice"
            ></Image>
            <h1>Bảo hành dài hạn</h1>
            <p>
              Chính sách bảo hành dài hạn như để khẳng định giá trị cốt lõi,
              thương hiệu mà Roman luôn hướng tới.
            </p>
          </Col>
          <Col className={`${styles.serviceCol}`}>
            <Image
              src="/baohanh.webp"
              width={50}
              height={50}
              alt="sevice"
            ></Image>
            <h1>Bảo hành dài hạn</h1>
            <p>
              Chính sách bảo hành dài hạn như để khẳng định giá trị cốt lõi,
              thương hiệu mà Roman luôn hướng tới.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
