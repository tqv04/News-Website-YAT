"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaGithub,
  FaPinterestP,
} from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./style/footer.module.css";
export default function Footer() {
  const [posts, setPosts] = useState<Category[]>([]);
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://mock-data-yat.onrender.com/category");
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.brainText}>
          <h1>yat</h1>
        </div>
        <div className={`${styles.socialIcons} py-4`}>
          <button className={styles.fafacebook}>
            <FaFacebookF className={styles.icon} />
          </button>
          <button className={styles.fatwitter}>
            <FaTwitter className={styles.icon} />
          </button>
          <button className={styles.fainstagram}>
            <FaInstagram className={styles.icon} />
          </button>
          <button className={styles.falinked}>
            <FaLinkedinIn className={styles.icon} />
          </button>
          <button className={styles.fayoutube}>
            <FaYoutube className={styles.icon} />
          </button>
          <button className={styles.fatiktok}>
            <FaTiktok className={styles.icon} />
          </button>
          <button className={styles.fagithub}>
            <FaGithub className={styles.icon} />
          </button>
          <button className={styles.fapinterest}>
            <FaPinterestP className={styles.icon} />
          </button>
        </div>
        <div className={styles.linkC}>
          {posts.slice(0, 6).map((category) => (
            <div key={category.id} className={styles.menuItem}>
              <Link href={category.href} className={styles.FaLinks}>
                {category.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <footer className=" text-white mt-10">
        <div
          className="text-center text-sm py-4 text-white"
          style={{ backgroundColor: "black" }}
        >
          © {new Date().getFullYear()} TinTuc24h.{" "}
          <span style={{ color: "#00f1c9" }}>QuocVuong</span>
        </div>
      </footer>
    </>
  );
}
