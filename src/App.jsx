import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
} from "./components";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <a href="#about">
              <Navbar></Navbar>
              <Hero></Hero>
            </a>
          </div>

          <About></About>
          <Experience></Experience>
          {/* <Tech></Tech> */}
          <Works></Works>
          {/* <Feedbacks></Feedbacks> */}
          {/* <div className="relative z-0"> */}
          <Contact></Contact>
          {/* <StarsCanvas></StarsCanvas> */}
          {/* </div> */}
          <Footer></Footer>
          <StarsCanvas></StarsCanvas>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
