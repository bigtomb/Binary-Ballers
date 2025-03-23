import Title from "../components/title.jsx"
import Info from "../components/info.jsx"
import Hero from "../components/hero.jsx"
import Footer from "../components/footer.jsx"


function Home() {

  return (
    <>
      <div className="bg-drk-gray bg-fixed bg-cover bg-center bg-no-repeat min-h-screen w-full"
          style={{
        //   backgroundImage: `url(${ApartmentBackground})`
        }}>
            <Title />
            <Info />
            <Hero />
            <Footer />
    </div>

    </>
  )
}

export default Home