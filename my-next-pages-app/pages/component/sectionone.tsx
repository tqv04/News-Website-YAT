"use client";
import { useState, useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import React from "react";
import styles from "./style/sectionone.module.css";
export default function Section1() {
  const [posts, setPosts] = useState<Item[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://mock-data-yat.onrender.com/trending");
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);
  const [postMain, setPostMain] = useState<Item[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://mock-data-yat.onrender.com/postmain");
      const data = await res.json();
      setPostMain(data);
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
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <>
      <Container>
        <Row className="d-flex align-items-stretch">
          <Col md={3}>
            <Row>
              <div className={styles.wrapper}>
                <div className={styles.letterBox}>
                  <span className={styles.letter}>trending</span>
                </div>
                <div className={styles.line}></div>
              </div>
            </Row>
            <div className={`mt-3 ${styles.trendingC}`}>
              {posts.map((item) => (
                <div className={styles.trending} key={item.id}>
                  <Image
                    src={item.img}
                    alt="image"
                    className={styles.image}
                  ></Image>
                  <div className={styles.trendingBody}>
                    <div className={styles.trendingId}>
                      <h1>{item.id}</h1>
                    </div>
                    <div className={styles.trendingContent}>
                      <div className="d-flex align-items-center">
                        <h1 className={styles.trendingTitle}>
                          {item.category}
                        </h1>
                        <span
                          style={{ fontSize: "12px", color: "#777777" }}
                          className="ms-1"
                        >
                          / {item.time}
                        </span>
                      </div>

                      <p className={styles.trendingContentp}>{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-between">
            {postMain.map((item) => (
              <div className={styles.imageMainWrapper} key={item.id}>
                <Image
                  src={item.img}
                  alt="image"
                  width={item.w}
                  height={item.h}
                ></Image>
                <div className={styles.textMainAb}>
                  <div className={styles.maintitle}>
                    <span>{item.category}</span>
                    <span className="ms-1">/ {item.time}</span>
                  </div>
                  <h1>{item.title}</h1>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </Col>
          <Col md={3}>
            <div className={styles.tabs}>
              <div className={styles.tabButtons}>
                <button
                  className={`${styles.tabBtn} ${
                    activeTab === "tab1" ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab("tab1")}
                >
                  latest
                </button>
                <button
                  className={`${styles.tabBtn} ${
                    activeTab === "tab2" ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab("tab2")}
                >
                  videos
                </button>
                <button
                  className={`${styles.tabBtn} ${
                    activeTab === "tab3" ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab("tab3")}
                >
                  gallaries
                </button>
              </div>

              <div className={styles.tabContent}>
                {activeTab === "tab1" && (
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
                )}
                {activeTab === "tab2" && <p>Content for Tab 2</p>}
                {activeTab === "tab3" && <p>Content for Tab 3</p>}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
