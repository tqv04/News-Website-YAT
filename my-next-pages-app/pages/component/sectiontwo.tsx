"use client";
import { Row, Col, Container, Image } from "react-bootstrap";
import styles from "./style/sectiontwo.module.css";
import { useState, useEffect } from "react";
export default function Section2() {
  const [posts, setPosts] = useState<Item[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(
        "https://mock-data-yat.onrender.com/entertainment"
      );
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);
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
      <Container className="my-5">
        <Row>
          <div className={styles.wrapper}>
            <div className={styles.letterBox}>
              <span className={styles.letter}>entertainment</span>
            </div>
            <div className={styles.line}></div>
          </div>
        </Row>
        <Row className="mt-4">
          <Col md={5}>
            <div className={styles.imageMainWrapper}>
              <Image
                src="https://mvpthemes.com/zoxnews/wp-content/uploads/2017/07/game-thrones-560x600.jpg"
                alt="image"
              ></Image>
              <div className={styles.textMainAb}>
                <div className={styles.maintitle}>
                  <span>entertainment</span>
                  <span className="ms-1">/ 3 years ago</span>
                </div>
                <h1>final `game of thrones` episodes</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} className={`${styles.col2}`}>
            {posts.map((item) => (
              <div className={styles.col2C} key={item.id}>
                <Image
                  src={item.img}
                  alt="image"
                  className={styles.image}
                ></Image>
                <div className={styles.col2Body}>
                  <div className={styles.col2Content}>
                    <div className="d-flex align-items-center">
                      <h1 className={styles.col2Title}>{item.category}</h1>
                      <span
                        style={{ fontSize: "12px", color: "#777777" }}
                        className="ms-1"
                      >
                        / {item.time}
                      </span>
                    </div>
                    <p className={styles.col2Contentp}>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Col>
          <Col md={3}>
            <div className={styles.lastContainer}>
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
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
