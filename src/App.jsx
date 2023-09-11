import Screen from "./Components/Screen";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import TicketMerch from "./Components/TicketMerch";
function App() {
  return (
    <>
      <Navbar />
      <Screen />
      <div className="content">
        <Home />
        <About />
        <TicketMerch />
      </div>
    </>
  );
}

export default App;
