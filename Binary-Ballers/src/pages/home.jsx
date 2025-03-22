
function Home() {

  return (
    <>
      <div className="bg-gray-900 bg-fixed bg-cover bg-center bg-no-repeat min-h-screen w-full"
          style={{
        //   backgroundImage: `url(${ApartmentBackground})`
        }}>
          <div className="relative min-h-screen w-full">
            <div className="container mx-auto p-4">
              {/* Content Start */}
              <section>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                  <div className="max-w-3xl">
                    <h2 className="text-5xl font-extrabold sm:text-4xl">
                      Tell us about your dream trip!
                    </h2>
                  </div>

                  <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative sm:h-80 lg:h-full mt-10">
                      {/* Quiz popup Item */}
                    </div>

                    <div className="lg:py-16">
                      <article className="space-y-4 text-gray-600">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                          eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae
                          eius quidem quam repellat.
                        </p>

                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum explicabo quidem
                          voluptatum voluptas illo accusantium ipsam quis, vel mollitia? Vel provident culpa
                          dignissimos possimus, perferendis consectetur odit accusantium dolorem amet voluptates
                          aliquid, ducimus tempore incidunt quas. Veritatis molestias tempora distinctio
                          voluptates sint! Itaque quasi corrupti, sequi quo odit illum impedit!
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
              </section>
                    {/* Hero Section */}
        <section className="min-h-screen px-4 py-20 flex items-center">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-12 text-center">
              Tell us about your dream trip!
            </h1>

            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <div className="relative bg-blue-200/60 rounded-3xl p-8 backdrop-blur-sm">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    How Suni Works
                  </h2>
                  <p className="text-lg text-gray-700">
                    Suni takes in your feedback and creates the perfect vacation for you!
                  </p>
                  {/* <div className="absolute -top-14 -right-12">
                    <img src={} alt="Suni logo"
                    className="w-24 h-24 text-yellow-400" />
                  </div> */}
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="space-y-4">
                  <p className="text-lg text-gray-700">
                    Experience seamless travel planning with our intuitive platform.
                    We analyze your preferences, consider your budget, and create
                    a personalized itinerary that matches your dream vacation perfectly.
                  </p>
                  <p className="text-lg text-gray-700">
                    Let Suni guide you through the process of creating your ideal trip,
                    taking care of all the details so you can focus on the excitement
                    of your upcoming adventure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="min-h-screen px-4 py-20 flex items-center">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-12 text-center">
              Tell us about your dream trip!
            </h2>

            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="space-y-4">
                  <p className="text-lg text-gray-700">
                    Our platform brings together everything you need for your trip planning.
                    From weather forecasts to budget tracking, we've got you covered with
                    a comprehensive suite of tools designed to make your travel planning
                    experience smooth and enjoyable.
                  </p>
                  <p className="text-lg text-gray-700">
                    Start your day right with all the information you need at your fingertips.
                    Suni helps you stay organized and informed throughout your journey.
                  </p>
                </div>
              </div>

              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="relative bg-blue-200/60 rounded-3xl p-8 backdrop-blur-sm">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Your Mornings Start Here
                  </h2>
                  <p className="text-lg text-gray-700">
                    See your Calendar, Weather, and Budget / Spending all in one place!
                  </p>
                  {/* <div className="absolute -top-20 -right-12">
                    <img src={Sun} alt="Suni logo"
                    className="w-32 h-32  text-yellow-400" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="min-h-screen px-4 py-20 flex items-center">
          <div className="container mx-auto">
            <div className="bg-blue-200/60 rounded-3xl overflow-hidden backdrop-blur-sm">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Your Mornings Start Here
                  </h2>
                  <p className="text-lg text-gray-700">
                    See your Calendar, Weather, and Budget / Spending all in one place!
                  </p>
                </div>
                <div className="lg:w-1/2 bg-gray-900 p-8">
                  <div className="aspect-video rounded-lg bg-gray-800 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      <div className="bg-gray-700 rounded-lg p-4 aspect-square">
                        <div className="grid grid-cols-2 gap-2">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-full aspect-square"
                            />
                          ))}
                        </div>
                        <div className="mt-2">
                          <div className="bg-gray-600 h-2 rounded-full mb-1" />
                          <div className="bg-gray-600 h-2 rounded-full w-2/3" />
                        </div>
                      </div>
                      <div className="bg-gray-700 rounded-lg p-4 flex items-center justify-center">
                        <div className="w-full aspect-square rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-gray-400 mt-4">
                    Animation here showing user use
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
              {/* Content End*/}
            </div>
          </div>
        </div>
    </>
  )
}

export default Home