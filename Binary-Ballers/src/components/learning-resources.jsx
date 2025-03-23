import Pillars from '../assets/images/life-stages.png';

function LearningResources() {
    return (
        <>
            <section className="bg-lght-gray min-h-screen px-4 py-20 flex items-center">
                <div className="container mx-auto">
                    <div className="bg-money-green rounded-3xl overflow-hidden backdrop-blur-sm">
                        <div className="flex flex-col lg:flex-row">
                            {/* Left Text Section */}
                            <div className="lg:w-1/2 p-8">
                                <h2 className="text-3xl text-caramel font-secondary md:text-4xl font-bold mb-4">
                                    Financial Literacy Starts Here
                                </h2>
                                <p className="text-lg text-creamy font-primary">
                                    Every financial decision shapes your future. Learn to budget, save, invest, and make informed choices that build financial stability and success.
                                </p>
                                
                                {/* Styled Financial Tips List */}
                                <ul className="text-lg text-creamy font-primary mt-4 list-disc pl-5 space-y-2">
                                    <li><span className="font-bold">Create a Budget</span> – Track your income and expenses to manage your money effectively.</li>
                                    <li><span className="font-bold">Save First, Spend Later</span> – Prioritize saving before making non-essential purchases.</li>
                                    <li><span className="font-bold">Build an Emergency Fund</span> – Set aside 3-6 months' worth of expenses for unexpected situations.</li>
                                    <li><span className="font-bold">Understand Credit & Debt</span> – Use credit wisely, pay bills on time, and avoid high-interest debt.</li>
            
                                </ul>

                                <p className="text-lg text-creamy font-primary mt-4">
                                    Life can change quickly! Are you ready?
                                </p>
                            </div>

                            {/* Right Image Section */}
                            <div className="lg:w-1/2 bg-caramel p-8">
                                <div className="aspect-video rounded-lg bg-lght-gray flex items-center justify-center w-full h-full">
                                    <img src={Pillars} alt="Game Example Image" className="w-full h-full object-cover" />
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
    );
}

export default LearningResources;
