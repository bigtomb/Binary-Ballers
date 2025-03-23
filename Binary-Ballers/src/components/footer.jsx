

function Footer() {

    return (
      <>
        <footer className="bg-caramel p-2">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className=" text-md text-black font-primary rounded hover:text-lght-green active:text-money-green sm:text-center ">© 2025 Team Binary Bandits All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="text-md text-black font-primary rounded hover:text-lght-green active:text-money-green me-4 md:me-6">Home</a>
                </li>
                <li>
                    <a href="#" className="text-md text-black font-primary rounded hover:text-lght-green active:text-money-greenme-4 md:me-6">Game</a>
                </li>
                <li>
                    <a href="#" className="text-md text-black font-primary rounded hover:text-lght-green active:text-money-green me-4 md:me-6">Resources</a>
                </li>
                <li>
                    <a href="#" className="text-md text-black font-primary rounded hover:text-lght-green active:text-money-green">About</a>
                </li>
            </ul>
            </div>
        </footer>
      </>
    )
  }
  
  export default Footer