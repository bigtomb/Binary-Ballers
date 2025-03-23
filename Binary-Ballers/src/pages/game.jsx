
import React from 'react'
import Choice from '../components/choice.jsx'

import ApartmentBackground from '../assets/backgrounds/bg-apt.png'
import HomeBackground from '../assets/backgrounds/bg-home.png' 
import OfficeBackground from '../assets/backgrounds/bg-office.png'

function Game() {


  const questionsData = {
    firstQuestion: {
      question: "What's your preferred mode of transportation?",
      description: "Let us know how you prefer to travel, and we will suggest the best options for you!",
      choices: [
        { text: 'Car', nextQuestionKey: 'secondQuestion' },
        { text: 'Train', nextQuestionKey: 'secondQuestion' },
        { text: 'Flight', nextQuestionKey: 'secondQuestion' },
      ],
    },
    secondQuestion: {
      question: "Do you prefer luxury or budget options?",
      description: "We'll help you find the best travel option based on your preferences.",
      choices: [
        { text: 'Luxury', nextQuestionKey: 'thirdQuestion' },
        { text: 'Budget', nextQuestionKey: 'thirdQuestion' },
      ],
    },
    thirdQuestion: {
      question: "When do you plan to travel?",
      description: "Let us know your travel dates so we can find the best options.",
      choices: [
        { text: 'Next month', nextQuestionKey: 'end' },
        { text: 'In a few months', nextQuestionKey: 'end' },
      ],
    },
    end: {
      question: "Thank you for your preferences!",
      description: "We will now prepare the best travel options for you.",
      choices: [],
    }
  };


    return (
      <>
            <div className="bg-gray-900 bg-fixed bg-cover bg-center bg-no-repeat min-h-screen w-full"
          style={{
          backgroundImage: `url(${ApartmentBackground})`
        }}>
            <div className="pt-40">   
            <Choice
      initialQuestion={questionsData.firstQuestion.question}
      initialDescription={questionsData.firstQuestion.description}
      initialChoices={questionsData.firstQuestion.choices}
      questionsData={questionsData}
    />
            </div>
        </div>
      </>
    )
  }
  
  export default Game