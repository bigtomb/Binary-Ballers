import Footer from "../components/footer.jsx"
import ResourceTitle from "../components/resource-title.jsx"
import Research from "../components/research.jsx"
import LearningResources from "../components/learning-resources.jsx"

function Resources() {

    return (
      <>
        <div className="">
            <ResourceTitle />
            <Research />
            <LearningResources />
        </div>
        <Footer />
      </>
    )
  }
  
  export default Resources