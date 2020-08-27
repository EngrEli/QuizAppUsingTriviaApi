import React, { Component } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./questionnaire.css";
import { motion } from "framer-motion";

export default class Questionnaire extends Component {
  render() {
    // destructuring
    const {
      question,
      // choices is already sorted inside the componentDidMount on the app component
      choices,
      correct_answer,
    } = this.props.data;
    const {
      score,
      handleSelectAnswer,
      isAnswered,
      handleNextQuestion,
      quizData,
      currentItem,
      category,
      difficulty,
    } = this.props;
    // framer motion for next button
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
    const nextButton = (
      <motion.button
        variants={nextButtonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap={{
          scale: 0.8,
          rotate: -2,
        }}
        className="next-button"
        style={{ display: isAnswered ? "block" : "none" }}
        onClick={handleNextQuestion}
        autoFocus={true}
      >
        Next
        <FontAwesomeIcon icon={faArrowRight} className="next-icon" />
      </motion.button>
    );
    // framer motion
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
    const button = choices.map((item, index) => {
      return (
        <div key={index}>
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
            // className="choice-button"
            onClick={handleSelectAnswer.bind(this, item)}
            // this turns the color of the choices into red if wrong and green if right
            className={
              isAnswered
                ? item === correct_answer
                  ? "choice-button buttonStyle"
                  : "choice-button wrong"
                : "choice-button"
            }
            // sets the text to pure html
            dangerouslySetInnerHTML={{ __html: item }}
          />
        </div>
      );
    });
    // condinationally render title on the return
    const renderTitle = () => {
      switch (category) {
        case "category=9":
          return "General Knowledge";
        case "category=27":
          return "Animals";
        case "category=18":
          return "Information Technology";
        case "category=14":
          return "TV Entertainment";
        default:
          return "Random Categories";
      }
    };

    return (
      <React.Fragment>
        <div className="render-title">{`${renderTitle()} - ${difficulty}`}</div>
        <div className="container">
          <div className="inlined-score">
            <div>
              Score :<span className="score-number">{score}</span>
            </div>
            {/* {removeOneWrongButton} */}
            <div className="question-count">
              Question
              <span className="score-number"> {currentItem + 1}</span> of{" "}
              <span className="score-number"> {quizData.length}</span>
            </div>
          </div>

          <div
            className="question"
            dangerouslySetInnerHTML={{ __html: question }}
          />
          {button}
          {nextButton}
        </div>
      </React.Fragment>
    );
  }
}
