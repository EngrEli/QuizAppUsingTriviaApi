# QuizAppUsingTriviaApi
# https://engreli.github.io/QuizAppUsingTriviaApi/quiz
### Welcome!
![Home page](https://user-images.githubusercontent.com/59436059/91493814-715af880-e8ea-11ea-8645-5293a45bdf76.png)

***

### This is a Quiz App that is made using React JS. 
### It fetches data from the Trivia Api https://opentdb.com/api_config.php
![triviaApi](https://user-images.githubusercontent.com/59436059/91494350-458c4280-e8eb-11ea-894b-3392ac11d475.png)

***

# INTRO
#### The quiz have 5 different selection of categories namely random, General Knowledge, Animals, Information Technology and TV entertainment. Each categories also have 3 different difficulties,the easy, medium and the hard. 

> Category

![category](https://user-images.githubusercontent.com/59436059/91497243-36f45a00-e8f0-11ea-9500-2d8946080722.png)

> Difficulty

![difficulty](https://user-images.githubusercontent.com/59436059/91497456-a5d1b300-e8f0-11ea-8fe1-78bf8fc39e21.png)
  
  I created this app to show my understanding of the React JS fundamentals and also to show how I design as a Front-end developer. This is some of the packages and logics I used. 
***
# FETCH DATA FROM THE API
To fetch question data from the api, I used **axios** to make request. I then saved it to a state located on the main component. <br/>
This state served as a main state for the other nested components inside its component.

![axios fetch](https://user-images.githubusercontent.com/59436059/91497671-f0ebc600-e8f0-11ea-8966-5eba949ae4ac.png)

***
# RANDOMIZE QUESTION
I randomize questions using sort function. In this way , users can see random arrangement if they try to answer the same set of questions.

![randomize](https://user-images.githubusercontent.com/59436059/91497869-517b0300-e8f1-11ea-9402-5fdec3062fa7.png)

***
# TERNARY OPERATORS
I mostly used ternary operators to conditionally render my components. when certain conditions are met , certain pages/components will come up. An example of this would be conditionally rendering an answer - this works if the user answers correct or if the answers wrong, the layout of the choices follows. 

![ternaryOperator](https://user-images.githubusercontent.com/59436059/91498175-e2ea7500-e8f1-11ea-8050-021fc22b5c4f.png)

***


# DISPLAY SINGLE QUESTION
To show single question and choices on the quiz route, I made a state that corresponds to the index of the question. "currentItem" will be always 0 at the start of the quiz to show the first question from the state. I then made a button that adds 1 to "currentItem" when the user clicks the next button. The question will change because the index is manipulated. 

![currentIndex](https://user-images.githubusercontent.com/59436059/91498377-3a88e080-e8f2-11ea-8384-0b13b7080d14.png)

***
# DIFFERENT ROUTES
I used react-router-dom to create different routes. The **home route** is where the user can select categories. After selecting category , the user then lands to the **"/difficulty"** route where he/she can select the desired level for a certain category of quiz. After this is all set, user then begins to answer sets of question on the **"/quiz"** route. Routing speeds up the app that provides great user-experience. 

![routes](https://user-images.githubusercontent.com/59436059/91498525-7cb22200-e8f2-11ea-8a1f-a0e8e4a09bf0.png)

***
# CHANGING URL MANUALLY BY USER
The user can't change the url directly because it will return an error. The user must go to step-by-step procedure of choosing categories and difficulty , after that , that is the only time the user can be directed to a "/quiz" route to answer his/her set of questions. 

![Error](https://user-images.githubusercontent.com/59436059/91498596-9f443b00-e8f2-11ea-9166-0c827eae6d55.png)

***
# DESIGNS
I used custom css to design all the layout of the quiz app. I can say that custom css is more powerful than using any other front-end frameworks because you can create the most unique design. I also installed Framer-motion to handle the animations happening inside my app. This made the app look natural
***
# SUMMARY

The most challenging part is how I can implement a **"category select"** and **"change difficulty"** option based on the structure of the API. I came up with the solution to **pass the categories and difficulty levels as props** to a component that fetches the data using axios. I took advantage of the template strings that can be used in es6 version of Javascript where props that are passed down changes the url of the api to be requested. This will produce different set of URLs and different set of URLs makes different sets of questions.

![templateString](https://user-images.githubusercontent.com/59436059/91498737-e5010380-e8f2-11ea-8606-227d21193a65.png)

