import React, { Component } from "react";
import "./finishquiz.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default class FinishQuiz extends Component {
  render() {
    const scoreVariants = {
      hidden: {
        x: -1000,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
      },
    };
    const textVariants = {
      hidden: {
        x: 1000,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
      },
    };
    const takeAnotherQuizVariant = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          delay: 2,
          duration: 0.5,
        },
      },
      hover: {
        scale: 1.3,
      },
    };
    const { score } = this.props;
    const lowScore = (
      <React.Fragment>
        <motion.div
          variants={scoreVariants}
          initial="hidden"
          animate="visible"
          // hover
          transition={{
            type: "spring",
            // high stiff means more obvious spring motion
            stiffness: 200,
            // the lower the mass , the greater it stops the spring element from bouncing
            mass: 0.5,
          }}
          className="finish-score"
        >
          Your score is {score}
        </motion.div>
        <br />
        <motion.div
          className="finish-text"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          // hover
          transition={{
            type: "spring",
            // high stiff means more obvious spring motion
            stiffness: 200,
            // the lower the mass , the greater it stops the spring element from bouncing
            mass: 0.5,
          }}
        >
          Mess more with this quiz app and maybe you'll get higher score next
          time
        </motion.div>
      </React.Fragment>
    );
    const highScore = (
      <motion.p className="finish-score">
        Wow! Congrats! Your score is {score}
      </motion.p>
    );
    return (
      <React.Fragment>
        <div className="finish">
          {score <= 7 ? lowScore : highScore}
          <br />{" "}
          <Link to="/">
            <motion.div
              variants={takeAnotherQuizVariant}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap={{
                scale: 0.8,
                rotate: -2,
              }}
              className="finish-to-home"
              onClick={this.props.handleTakeAnotherQuiz}
            >
              Take Another Quiz
            </motion.div>
          </Link>{" "}
        </div>
      </React.Fragment>
    );
  }
}
