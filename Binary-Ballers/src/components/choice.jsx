//reusable choice popup 
//Goal:
//Display choice text 
//have buttons for choices
import {Link} from 'react-router-dom'


function Choice() {

    return (
      <>
                <div className="max-w-md mx-auto bg-blue-100/80 rounded-3xl shadow-md overflow: auto md:max-w-2xl">
            <div className="flex flex-col p-6 md:p-8">
            {/* <div className="absolute -top-20 -right-16">
                            <img src={Sun} alt="Suni logo"
                            className="w-32 h-32 text-yellow-400" />
                        </div> */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 font-extrabold text-center">
                Take the Quiz!
                </h2>
                <p className="text-sm md:text-base font-bold text-center mb-6 md:mb-8">
                Let Suni know your Preferences, and he'll plan your trip for you!
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/" className="block py-2 px-3 text-drk-blue rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-drk-2-blue md:p-0 ">
                <button className="w-full bg-[#a5c3dd] hover:bg-[#94b2cc] text-white px-6 py-2 rounded-full border-0 cursor-pointer transition duration-300 ease-in-out">
                Let me Choose
                </button>
                </Link>
                <Link to="/" className="block py-2 px-3 text-drk-blue rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-drk-2-blue md:p-0 ">
                <button className="w-full bg-[#a5c3dd] hover:bg-[#94b2cc] text-white px-6 py-2 rounded-full border-0 cursor-pointer transition duration-300 ease-in-out">
                    Help me Decide
                    </button>
                </Link>
                <Link to="/" className="block py-2 px-3 text-drk-blue rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-drk-2-blue md:p-0 ">
                <button className="w-full bg-[#a5c3dd] hover:bg-[#94b2cc] text-white px-6 py-2 rounded-full border-0 cursor-pointer transition duration-300 ease-in-out">
                    Apply Business
                    </button>
                </Link>
                </div>
            </div>
            </div>
      </>
    )
  }
  
  export default Choice