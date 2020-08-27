import React, { Component } from "react";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const buttonVariants = {
  hidden: {
    x: -1000,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  hover: {
    scale: 1.3,
  },
};
const nextButtonVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 2,
    },
  },
  hover: {
    scale: 1.3,
  },
};
export default class DifficultyChoose extends Component {
  render() {
    // props from App js
    const {
      quizDifficulty,
      difficulty,
      category,
      handleClickDifficulty,
    } = this.props;
    const difficultyItem = quizDifficulty.map((item, index) => {
      return (
        <div key={index} className="flex">
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            // hover
            whileHover="hover"
            transition={{
              type: "spring",
              // high stiff means more obvious spring motion
              stiffness: 200,
              // the lower the mass , the greater it stops the spring element from bouncing
              mass: 0.5,
            }}
            whileTap={{
              scale: 0.8,
              rotate: 2,
            }}
            className="home-button"
            onClick={handleClickDifficulty}
            value={item}
          >
            <span className="caret-icon">
              <FontAwesomeIcon icon={faCaretRight} />
            </span>
            {item}
          </motion.button>
        </div>
      );
    });
    const renderDifficulty = () => {
      switch (difficulty) {
        case "easy":
          return "Really??!!!";
        case "medium":
          return "You are not a 'risk taker'";
        case "hard":
          return "You must be a god";
        default:
          return "";
      }
    };
    const selectedDifficulty = (
      <div className="difficulty-selected">
        {/* if the user chose a difficulty , this div will occur */}
        {!difficulty ? (
          ""
        ) : (
          <motion.div
            initial={{
              x: 1000,
            }}
            animate={{
              x: 0,
            }}
          >
            <hr />
            DIFFICULTY: {difficulty.toLocaleUpperCase()} ({renderDifficulty()})
          </motion.div>
        )}
      </div>
    );

    const start = (
      <div className="flex-3">
        <Link to={`/quiz`}>
          <motion.div
            style={{
              display: !difficulty ? "none" : "inline-block",
            }}
            variants={nextButtonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap={{
              scale: 0.8,
              rotate: -2,
            }}
            className="start-quiz-button"
            onClick={this.props.handleAnswerQuiz}
          >
            Start Quiz
          </motion.div>
        </Link>
      </div>
    );
    return (
      <React.Fragment>
        {category !== null ? (
          <div className="flex">
            {difficultyItem} {selectedDifficulty} {start}
          </div>
        ) : (
          <ErrorPage />
        )}
      </React.Fragment>
    );
  }
}
