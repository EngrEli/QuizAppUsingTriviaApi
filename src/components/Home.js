import React, { Component } from "react";
import axios from "axios";
import "./home.css";
import Questionnaire from "./Questionnaire";
import FinishQuiz from "./FinishQuiz";
import { motion } from "framer-motion";
import ErrorPage from "./ErrorPage";

class Home extends Component {
  state = {
    // the question and answer that is loaded from the api
    quizData: [],
    // this will be the index of the question, for advancing to the next question
    currentItem: 0,
    // overall score
    score: 0,
    // if the user clicks on a choice per question this will become true, else false
    isAnswered: false,
    // // for the amount of lifeline
    // removeOneWrong: 3,
    // // for timer
    // isTimesUp: false,
  };
  componentDidMount() {
    const { category, difficulty } = this.props;
    axios(
      // props is passed down to this url. The props are from the selected category and difficulty on the start page
      `https://opentdb.com/api.php?amount=15&${category}&difficulty=${difficulty}&type=multiple`
    )
      .then((res) => {
        const quiz = res.data.results.map((item) => {
          return {
            ...item,
            // returns a choices array that is already sorted
            choices: [item.correct_answer, ...item.incorrect_answers].sort(
              () => Math.random() - 0.5
            ),
          };
        });
        this.setState({
          quizData: quiz.sort(() => Math.random() - 0.5),
        });
      })
      .catch((err) => console.log(err));
  }

  // =====================================================================
  // =====================================================================

  componentDidUpdate(prevProps, prevState) {
    prevState.currentItem !== this.state.currentItem &&
      this.setState({
        // reset the isAnswered state
        isAnswered: false,
      });
  }
  // =====================================================================
  // =====================================================================

  handleSelectAnswer = (answer) => {
    const { quizData, currentItem } = this.state;

    // i compared the correct choice between the answer of the user.
    // if the user chose the correct answer, score is incremented
    // the next question is immediately called
    if (answer === quizData[currentItem].correct_answer) {
      // to prevent unli score when clicking the correct choice
      if (this.state.isAnswered === false) {
        this.setState((prevState) => {
          return {
            // add 1 to the score
            score: prevState.score + 1,
          };
        });
      }
    }
    this.setState({
      // default: if wrong or right answer
      isAnswered: true,
    });
  };
  // =====================================================================
  // =====================================================================
  // next question will be shown
  handleNextQuestion = () => {
    this.setState((prevState) => {
      return {
        currentItem: prevState.currentItem + 1,
      };
    });
  };

  render() {
    const { quizData, currentItem, score, isAnswered } = this.state;
    const { difficulty, category, handleTakeAnotherQuiz } = this.props;

    const conditional = (
      <React.Fragment>
        {/* load the data first, shows a loading screen while waiting for data */}
        {quizData.length > 0 ? (
          <React.Fragment>
            {currentItem >= quizData.length ? (
              <FinishQuiz
                score={score}
                handleTakeAnotherQuiz={handleTakeAnotherQuiz}
              />
            ) : (
              <Questionnaire
                data={quizData[currentItem]}
                quizData={quizData}
                score={score}
                handleSelectAnswer={this.handleSelectAnswer}
                handleNextQuestion={this.handleNextQuestion}
                handleRemoveOneWrong={this.handleRemoveOneWrong}
                isAnswered={isAnswered}
                currentItem={currentItem}
                category={category}
                difficulty={difficulty}
              />
            )}
          </React.Fragment>
        ) : (
          // this is for infinite animation of the loading div
          <motion.div
            animate={{
              scale: 1.1,
              transition: {
                yoyo: Infinity,
              },
            }}
            className="loading"
          >
            Loading...
          </motion.div>
        )}
      </React.Fragment>
    );
    return (
      <React.Fragment>
        {/* if the user changed the url , it will just redirect back to home */}
        {category === null || difficulty === null ? <ErrorPage /> : conditional}
      </React.Fragment>
    );
  }
}

export default Home;
