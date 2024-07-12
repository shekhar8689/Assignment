import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Hero from './Components/HeroSection/Hero'
import LearningApproch from './Components/LearningApproch/LearningApproch';
import OurProgram from './Components/OurProgram/OurProgram';
import OurProgram2 from './Components/OurProgram/OurProgram2';
import SuccessStories from './Components/SuccessStory/SuccessStories';
import OurCampuses from './Components/OurCampuses/OurCampuses';
import About from './Components/About/About';


function App() {

  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <LearningApproch />
        <About/>
        <OurProgram/>
        <OurProgram2/>
        <SuccessStories/>
        <OurCampuses/>
        <Footer/>
      </div>

    </>
  )
}

export default App
