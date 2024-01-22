import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Turnover from "./components/Turnover";
import Footer from "./components/Footer";
// import NavScrollExample from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Services />
      <Projects />
      <Turnover />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
