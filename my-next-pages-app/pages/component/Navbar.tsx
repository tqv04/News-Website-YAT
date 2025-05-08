"use client";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
import styles from "./style/navbar.module.css";
import Offcanvas from "react-bootstrap/Offcanvas";
export default function Navbar() {
  const [posts, setPosts] = useState<Category[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://mock-data-yat.onrender.com/category");
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container>
        <Row>
          <Col md={1} className="d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={styles.Fabars}
              onClick={handleShow}
            >
              <path d="M3 6h18a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h10a1 1 0 010 2H3a1 1 0 010-2z" />
            </svg>
          </Col>
          <Col md={10} className={styles.NavLink}>
            {posts.map((category) => (
              <div key={category.id} className={styles.menuItem}>
                <Link href={category.href} className={styles.FaLinks}>
                  {category.name}
                </Link>
                {category.sub.length > 0 && (
                  <ul className={styles.subMenu}>
                    {category.sub.map((subItem, idx) => (
                      <li key={idx}>
                        <Link
                          href={`${category.href}/${subItem
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          {subItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </Col>
          <Col md={1} className="d-flex align-items-center justify-content-end">
            <Search className={styles.FaSearch} />
          </Col>
        </Row>
      </Container>
      <Offcanvas show={show} onHide={handleClose} className={styles.offcanvasC}>
        <Offcanvas.Header
          closeButton
          closeVariant="white"
          className={styles.offcanvasHeader}
        >
          <Offcanvas.Title className={styles.offcanvasTitle}>
            <h1 className={styles.brandText}>YAT</h1>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Some text as placeholder...</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
