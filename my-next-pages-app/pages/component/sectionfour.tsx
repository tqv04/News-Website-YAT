"use client";
import { Row, Col, Container, Image } from "react-bootstrap";
import styles from "./style/sectonfour.module.css";
import { useState, useEffect } from "react";
import React from "react";

export default function Section4() {
  const [latest, setLatest] = useState<Item[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://mock-data-yat.onrender.com/latest");
      const data = await res.json();
      setLatest(data);
    }
    fetchPosts();
  }, []);
  return (
    <>
      <Container fluid className={`${styles.container} `}>
        <Container className="py-5">
          <Row className=" pb-4">
            <div className={styles.wrapper}>
              <div className={styles.letterBox}>
                <span className={styles.letter}>Business</span>
              </div>
              <div className={styles.line}></div>
            </div>
          </Row>
          <Row>
            <Col md={3} className={styles.col1C}>
              <div className={styles.col1}>
                <Image
                  src="https://media.vneconomy.vn/w800/images/upload/2024/01/31/81d6a9e8-f342-42b5-9c51-3648bb10037a.jpg"
                  alt="image"
                  className={styles.col1Img}
                ></Image>
                <div className={styles.col1Body}>
                  <div className={styles.col1Content}>
                    <span>entertainmet</span>
                    <span className="ms-1">/ 1 months ago</span>
                  </div>
                  <h2>6 Stunning new co-working spaces around the globe</h2>
                </div>
              </div>
              <div className={styles.col1}>
                <Image
                  src="https://shortlink.vn/wp-content/uploads/2024/03/fbbb.jpg"
                  alt="image"
                  className={styles.col1Img}
                ></Image>
                <div className={styles.col1Body}>
                  <div className={styles.col1Content}>
                    <span>entertainmet</span>
                    <span className="ms-1">/ 1 months ago</span>
                  </div>
                  <h2 className={styles.trendingContentp}>
                    6 Stunning new co-working spaces around the globe
                  </h2>
                </div>
              </div>
            </Col>
            <Col md={6} className={styles.imageWrapper}>
              <Image
                src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/5/7/1189311/Buffett-1.jpg"
                alt="image"
                className={styles.image}
              ></Image>
              <div className={styles.content}>
                <div className={styles.maintitle}>
                  <span>entertainment</span>
                  <span className="ms-1">/ 6 years ago</span>
                </div>
                <p>
                  Mod turns Counter-Strike into a Tekken clone with fighting
                  chickens
                </p>
              </div>
            </Col>
            <Col md={3} className={styles.lastContainer}>
              {latest.map((item) => (
                <div className={styles.lastBlock} key={item.id}>
                  <Image
                    src={item.img}
                    alt="img"
                    width={80}
                    className={styles.imgColLast}
                  />
                  <div className={styles.lastBody}>
                    <div className={styles.lastContent}>
                      <span>{item.category}</span>
                      <span>/ {item.time}</span>
                    </div>
                    <h2>{item.title}</h2>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
