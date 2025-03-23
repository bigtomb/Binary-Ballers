import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Choice() {
    const [gameState, setGameState] = useState(); // Stores game state
    const [choices, setChoices] = useState({}); // Store all choices by category
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0); // Track the current category
    const [categories, setCategories] = useState([]); // List of category names
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchGameState();
        fetchChoices();
    }, []);


    const fetchGameState = async () => {
        try {
            const response = await axios.get('http://localhost:8000/game/start', {withCredentials: true});
            setGameState(response.data.game_state);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching initial game state:', error);
        }
    };

    const fetchChoices = async () => {
        try {
            const response = await axios.get('http://localhost:8000/game/choices', {withCredentials: true});
            setChoices(response.data.choices);
            setCategories(Object.keys(response.data.choices));

        } catch (error) {
            console.error('Error fetching choices:', error);
        }
    };


    // Handle the choice selection
    const handleChoiceSelect = async (id) => {
        try {
            const response = await axios.post('http://localhost:8000/game/selection', {id}, {withCredentials: true});
            setGameState(response.data.game_state);


            if (currentCategoryIndex < categories.length - 1) {
                setCurrentCategoryIndex(currentCategoryIndex + 1);
            } else {

                // Add Function to move to next decade here
                console.log('All categories completed!');

            }
        } catch (error) {
            console.error('Error making a choice:', error);
        }
    };


    // ADVANCE DECADE

    const advanceDecade = async () => {
        try {
            const response = await axios.get('http://localhost:8000/game/advance', {withCredentials: true})
            setGameState(response.data.game_state)
            fetchChoices()
            setCurrentCategoryIndex(0)

        } catch (error) {
            console.error('Error Advancing:', error);
        }
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!gameState || categories.length === 0) {
        return <div>No game state or choices found.</div>;
    }

    // Get the current category and its choices
    const currentCategory = categories[currentCategoryIndex];
    const currentChoices = choices[currentCategory] || [];
    const isEndOfList = currentCategoryIndex >= categories.length;

    return (
        <div className="">
            <div className="fixed top-4 right-4 z-10 flex gap-2 sm:gap-4 pt-20">
                <div className="bg-bank-gray rounded-full w-32 h-8">
                    <div className="font-secondary text-center text-bank-green pt-1">
                        
                        {gameState.net_worth}
                    </div> 
                </div>
                <div className="bg-bank-gray rounded-full w-32 h-8">
                    <div className="font-secondary text-center text-bank-green pt-1">
                        {gameState.income}
                    </div> 
                </div>
                <div className="bg-bank-gray rounded-full w-32 h-8">
                    <div className="font-secondary text-center text-bank-green pt-1">
                        {gameState.income}
                    </div> 
                </div>
                <div className="bg-bank-gray rounded-full w-32 h-8">
                    <div className="font-secondary text-center text-bank-green pt-1">
                        {gameState.debt}
                    </div> 
                </div>
            </div>   
            <h2 className="text-3xl font-primary md:text-4xl lg:text-5xl mb-4 md:mb-6 text-center text-bank-green bg-bank-gray justify-center px-auto">
                    {gameState.decade}
                </h2>

        <div className="max-w-md mx-auto bg-bank-gray rounded-3xl shadow-md overflow: auto md:max-w-2xl h-80">

            <div className="flex flex-col p-6 md:p-8">

                <p className="text-lg font-primary text-bank-green md:text-base font-bold text-center mb-6 md:mb-8">
                    {currentCategory}
                </p>
                <div
                    className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    {currentChoices.map((choice) => (
                        <button
                            key={choice.id}
                            onClick={() => handleChoiceSelect(choice.id)}
                            className="w-full bg-lght-gray hover:bg-[#94b2cc] text-white px-6 py-2 rounded-full border-0 cursor-pointer transition duration-300 ease-in-out"
                        >
                            {choice.name}
                        </button>
                    ))}
                </div>
                {currentCategoryIndex === categories.length - 1 && (
                    <div
                        className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button
                            className="w-full bg-lght-gray hover:bg-[#94b2cc] text-white px-6 py-2 rounded-full border-0 cursor-pointer transition duration-300 ease-in-out"
                            onClick={() => advanceDecade()}
                        >
                            ADVANCE
                        </button>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
}

export default Choice;

