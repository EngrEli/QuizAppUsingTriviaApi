import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import DifficultyChoose from "./components/DifficultyChoose";

import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default class App extends Component {
  state = {
    category: null,
    difficulty: null,
    quizDifficulty: ["easy", "medium", "hard"],
    quizCategory: [
      {
        value: "",
        text: "Random",
      },
      {
        value: "category=9",
        text: "General Knowledge",
      },
      {
        value: "category=27",
        text: "Animals",
      },
      {
        value: "category=18",
        text: "Information Technology",
      },
      {
        value: "category=14",
        text: "TV Entertainment",
      },
    ],
  };
  handleClickCategory = (e) => {
    this.setState({
      category: e.target.value,
    });
  };
  // turns to true if the user is finish answering
  handleTakeAnotherQuiz = () => {
    this.setState({
      category: null,
      difficulty: null,
    });
  };
  handleClickDifficulty = (e) => {
    this.setState({
      difficulty: e.target.value,
    });
  };
  render() {
    // =================================================================
    // deconstructing states
    const { difficulty, category, quizDifficulty, quizCategory } = this.state;
    // =================================================================
    // render the title of the equivalent category selected
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
        case "":
          return "Random Categories";
        default:
          return "";
      }
    };
    // =================================================================
    // framer motion button variants
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
    // =================================================================
    return (
      <Router>
        <Route exact path="/">
          <div className="app-container">
            <div className="category-box">
              {/* Category====================================================================== */}
              <div className="flex">
                {quizCategory.map((item, index) => {
                  return (
                    <div key={index}>
                      <motion.button
                        key={index}
                        // the variant we declared before return
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
                        name={item.text}
                        onClick={this.handleClickCategory}
                        className="home-button"
                        value={item.value}
                      >
                        <span className="caret-icon">
                          <FontAwesomeIcon icon={faCaretRight} />
                        </span>{" "}
                        {item.text}
                      </motion.button>
                    </div>
                  );
                })}
                {category !== null && (
                  <motion.div
                    initial={{
                      x: 1000,
                    }}
                    animate={{
                      x: 0,
                    }}
                    className="category-selected"
                  >
                    <hr className="hr" />
                    CATEGORY:
                    {` ${renderTitle()}`}
                  </motion.div>
                )}
                <div className="flex-2">
                  <div></div>
                  <Link to="/difficulty" className="link">
                    <motion.div
                      variants={nextButtonVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      whileTap={{
                        scale: 0.8,
                        rotate: -2,
                      }}
                      className="next-button"
                      style={{
                        display: category === null ? "none" : "inline-block",
                      }}
                    >
                      Next
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="next-icon"
                      />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Route>
        <Switch>
          {/* home route --- start of quiz */}
          <Route
            exact
            path="/quiz"
            render={(props) => (
              <Home
                {...props}
                category={category}
                difficulty={difficulty}
                handleTakeAnotherQuiz={this.handleTakeAnotherQuiz}
              />
            )}
          />
          {/* choose difficulty route */}
          <Route
            exact
            path="/difficulty"
            render={(props) => (
              <DifficultyChoose
                {...props}
                difficulty={difficulty}
                category={category}
                quizDifficulty={quizDifficulty}
                handleClickDifficulty={this.handleClickDifficulty}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}
