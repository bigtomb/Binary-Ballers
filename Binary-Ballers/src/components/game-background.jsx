import React from 'react'

import ApartmentBackground from '../assets/backgrounds/bg-apt.png'
import HomeBackground from '../assets/backgrounds/bg-home.png' 
import OfficeBackground from '../assets/backgrounds/bg-office.png'

function GameBackground() {

    return (
      <>
        <div className="bg- h-screen">
            <img src={ApartmentBackground} alt="Apartment Background" className="w-full h-full object-cover" />
            {/* <img src={HomeBackground} alt="Home Background" className="w-full h-full object-cover" /> */}
            {/* <img src={OfficeBackground} alt="Office Background" className="w-full h-full object-cover" /> */}
        </div>
      </>
    )
  }
  
  export default GameBackground


  //TO BE REMOVED