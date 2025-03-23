import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/life-ledger-logo.png'

function Navbar() {

    return (
      <>
        <nav className="bg-davy-gray fixed w-full z-20 top-0 nav">
            <div className=" flex flex-wrap items-center justify-between mx-4 p-5">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img className="h-10 mt-0 mb-0 hover:" src={Logo} alt="Logo" /> {/*Logo imag looks best at h-15-16*/}
                </Link>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
                </div>
                <ul className="bg-davy-gray flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:lght-green"> {/*Border box for main links(both in main and mini menu*/}
                    <li>
                    <Link to="/" className="block py-2 px-3 text-lg text-bank-green font-primary rounded hover:text-lght-green active:text-money-green md:p-0 ">
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link to="/game" className="block py-2 px-3 text-lg text-bank-green font-primary rounded hover:text-lght-green active:text-money-green md:p-0 ">
                        Game
                    </Link>
                    </li>
                    <li>
                    <Link to="/resources" className="block py-2 px-3 text-lg text-bank-green font-primary  rounded hover:text-lght-green active:text-money-green md:p-0 ">
                        Resources
                    </Link>
                    </li>
                </ul>
                </div>
            </nav>
      </>
    )
  }
  
  export default Navbar
