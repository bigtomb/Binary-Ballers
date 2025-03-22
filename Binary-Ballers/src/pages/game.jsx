
import React from 'react'
import Choice from '../components/choice'

import ApartmentBackground from '../assets/backgrounds/bg-apt.png'
import HomeBackground from '../assets/backgrounds/bg-home.png' 
import OfficeBackground from '../assets/backgrounds/bg-office.png'

function Game() {

    return (
      <>
            <div className="bg-gray-900 bg-fixed bg-cover bg-center bg-no-repeat min-h-screen w-full"
          style={{
          backgroundImage: `url(${ApartmentBackground})`
        }}>
            <div className="pt-40">            
                <Choice />
            </div>

        </div>
      </>
    )
  }
  
  export default Game