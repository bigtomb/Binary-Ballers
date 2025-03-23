//component for housing research results
import Image1 from '../assets/images/pillars.png';
import Image2 from '../assets/images/responsibility-curve.png';
import Image3 from '../assets/images/worth-progresssion-curve.png';
import Image4 from '../assets/images/game-example.png';

function Results() {
    return (
        <>
            <section className="bg-reseda bg-fixed bg-cover bg-center bg-no-repeat min-h-screen px-4 py-20 flex items-center">
                <div className="container mx-auto">
                    <div className="bg-money-green rounded-3xl overflow-hidden backdrop-blur-sm">
                        <div className="flex flex-col lg:flex-row">
                            {/* Left Text Section */}
                            <div className="lg:w-1/2 p-8">
                                <h2 className="text-3xl text-caramel font-secondary md:text-4xl font-bold mb-4">
                                    Research Results
                                </h2>
                                <p className="text-lg text-creamy font-primary">
                                    Explore key findings and insights from our latest research. These images showcase various aspects of our study, illustrating important themes and conclusions.
                                </p>

                                <p className="text-lg text-creamy font-primary mt-4">
                                    Understanding these results can help drive better decisions and deeper learning!
                                </p>
                            </div>

                            {/* Right Image Section */}
                            <div className="lg:w-1/2 bg-caramel p-8">
                                <div className="grid grid-cols-2 gap-4">
                                    <img src={Image1} alt="Research Image 1" className="w-full h-auto rounded-lg shadow-lg" />
                                    <img src={Image2} alt="Research Image 2" className="w-full h-auto rounded-lg shadow-lg" />
                                    <img src={Image3} alt="Research Image 3" className="w-full h-auto rounded-lg shadow-lg" />
                                    <img src={Image4} alt="Research Image 4" className="w-full h-auto rounded-lg shadow-lg" />
                                </div>
                                <p className="text-center text-lg text-drk-gray font-primary mt-4">
                                    A visual representation of our research findings.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Results;
