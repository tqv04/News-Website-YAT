"user client";

import styles from "./style/header.module.css";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaUser,
} from "react-icons/fa";
import Navbar from "./Navbar";
import { Row, Col, Container } from "react-bootstrap";
export default function NewsHeader() {
  return (
    <>
      <div className={styles.header}>
        <Container>
          <Row>
            <Col className="d-flex align-items-center gap-3" md={3}>
              <button className={styles.btnLogoF}>
                <FaFacebookF className={styles.logo} />
              </button>
              <button className={styles.btnLogoT}>
                <FaTwitter className={styles.logo} />
              </button>
              <button className={styles.btnLogoI}>
                <FaInstagram className={styles.logo} />
              </button>
              <button className={styles.btnLogoY}>
                <FaYoutube className={styles.logo} />
              </button>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <h1 className={styles.brandText}>YAT</h1>
            </Col>
            <Col
              md={3}
              className="d-flex justify-content-end align-items-center"
            >
              <button>
                <FaUser className={styles.logoA} />
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar />
    </>
  );
}
