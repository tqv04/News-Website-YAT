"use client";
import { Row, Col, Container, Image } from "react-bootstrap";
import styles from "./style/sectiionthree.module.css";
import { useState, useEffect } from "react";
import React from "react";

export default function Section3() {
  const [posts, setPosts] = useState<Item[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://mock-data-yat.onrender.com/videos");
      const data = await res.json();
      setPosts(data);
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
                <span className={styles.letter}>videos</span>
              </div>
              <div className={styles.line}></div>
            </div>
          </Row>
          <Row>
            <Col md={7}>
              <div className={styles.imageWrapper}>
                <Image
                  src="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/gamer.jpg"
                  alt="image"
                  width={1000}
                  height={600}
                  className={styles.image}
                />
                <div className={styles.overlay}></div>
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
              </div>
            </Col>
            <Col md={5} className={styles.colG}>
              {posts.map((item) => (
                <div className={styles.colBlock} key={item.id}>
                  <Image src={item.img} alt="image" width={150}></Image>
                  <div className={styles.col2Body}>
                    <div className={styles.col2Title}>
                      <span style={{ lineHeight: "0" }}>{item.category}</span>
                      <span className="ms-1">/ {item.time}</span>
                    </div>
                    <p>{item.title}</p>
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
