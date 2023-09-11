import Screen from "./Components/Screen";
import Home from "./Components/Home";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="background">
        <Screen />
        <Home />
      </div>
    </>
  );
}

export default App;
