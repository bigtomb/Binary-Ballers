import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Choice() {
  const [gameState, setGameState] = useState(null);
  const [choices, setChoices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch initial game state when the component mounts
  useEffect(() => {
    // Get the game state (this may come from the backend when the game starts)
    axios.get('http://127.0.0.1:8000/game/start')
      .then(response => {
        setGameState(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching initial game state:', error);
      });
  }, []);

  // Fetch the choices based on the current game state
  useEffect(() => {
    if (gameState) {
      axios.get('http://127.0.0.1:8000/game/choices')
        .then(response => {
          setChoices(response.data.choices);
        })
        .catch(error => {
          console.error('Error fetching choices:', error);
        });
    }
  }, [gameState]);

 // Handle the choice selection
  const handleChoiceSelect = (id) => {
    axios.post('http://127.0.0.1:8000/game/selection', { id })
      .then(response => {
        setGameState(response.data.game_state);  // Update game state after the choice
        setChoices(response.data.choices);  // You can also update choices if necessary
      })
      .catch(error => {
        console.error('Error making a choice:', error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!gameState || choices.length === 0) {
    return <div>No game state or choices found.</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-blue-100/80 rounded-3xl shadow-md overflow: auto md:max-w-2xl">
      <div className="flex flex-col p-6 md:p-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 font-extrabold text-center">
          {gameState.decade}
        </h2>
        <p className="text-sm md:text-base font-bold text-center mb-6 md:mb-8">
          Make your next decision.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          {choices.map((choice) => (
            <button
              key={choice.id}
              onClick={() => handleChoiceSelect(choice.id)}
              className="w-full bg-[#a5c3dd] hover:bg-[#94b2cc] text-white px-6 py-2 rounded-full border-0 cursor-pointer transition duration-300 ease-in-out"
            >
              {choice.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Choice;
