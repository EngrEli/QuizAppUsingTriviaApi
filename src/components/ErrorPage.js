import React from "react";
import { Link } from "react-router-dom";
import "./errorpage.css";
import { motion } from "framer-motion";

export default function ErrorPage() {
  return (
    <motion.div
      initial={{
        y: -1000,
      }}
      animate={{
        y: 0,
      }}
      className="error-container"
    >
      <span className="error">Error!</span> <br />
      <p>
        Please Select category
        <br /> and difficulty for the quiz!
      </p>
      <br />
      <motion.div
        animate={{
          scale: 1.1,
          transition: {
            yoyo: Infinity,
          },
        }}
      >
        <Link to="/" className="home-link">
          Okay , sorry!{" "}
        </Link>
      </motion.div>
    </motion.div>
  );
}
