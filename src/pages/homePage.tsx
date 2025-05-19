import "../app.css";
import { motion } from "framer-motion";
import React from "react";
import TopNav from "../components/topNav";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <div className="homepage-container">
        <div className="homepage-contained">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.9 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <span className="big-gradient">
              it should really be called simple
            </span>
          </motion.p>
        </div>
        <div className="homepage-contained">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.9 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <span className="medium">
              notes.
              <br />
              for A-level students.
              <br />
              physics and computer science.
            </span>
          </motion.p>
        </div>
      </div>
      <footer className="main-footer">
        <div>
          © 2025 Arthur L<br />
          Made with ❤︎ at 3am
        </div>
      </footer>
    </>
  );
}
