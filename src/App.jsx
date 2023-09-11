import Screen from "./Components/Screen";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About"
import Gallery from './Components/Gallery'
import TicketMerch from "./Components/TicketMerch";

function App() {
  return (
    <>
      <Navbar />
      <Screen />
      <Home />
      <div className="content">
        <About />
        <div className="flex w-full items-center justify-center my-[3rem]">
          <Gallery />
        </div>
        <TicketMerch />
      </div>
    </>
  );
}

export default App;
