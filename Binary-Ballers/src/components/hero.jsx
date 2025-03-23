import GameExample from '../assets/images/game-example.png'

function Hero() {

    return (
      <>    
        <section className="bg-creamy min-h-screen px-4 py-20 flex items-center">
        <div className="container mx-auto">
        <div className="bg-wing-green rounded-3xl overflow-hidden backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-8">
                    <h2 className="text-3xl text-caramel font-secondary md:text-4xl font-bold mb-4">
                    Your Mornings Start Here
                    </h2>
                    <p className="text-lg text-creamy font-primary">
                    See your Calendar, Weather, and Budget / Spending all in one place!
                    </p>
                </div>
            <div className="lg:w-1/2 bg-caramel p-8">
                <div className="aspect-video rounded-lg bg-lght-gray flex items-center justify-center">
                    <div className="object-fill">
                        <img src={GameExample} alt="Game Example Image"></img>
                    </div>
                </div>
                    <p className="text-center text-lg text-drk-gray font-primary mt-4">
                    Experience a financial life!
                    </p>
            </div>
                </div>
            </div>
        </div>
        </section>
    </>
    )
}

export default Hero