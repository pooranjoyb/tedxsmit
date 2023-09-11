import Screen from "./Components/Screen";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About"
function App() {
  return (
    <>
      <Navbar />
      <Screen />
      <div className="content">
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
