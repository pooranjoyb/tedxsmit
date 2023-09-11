import Screen from "./Components/Screen"
import Home from "./Components/Home"
import About from "./Components/About"
function App() {

  return (
    <>
      <Screen/>
      <Home />
      <div className="content">
        <About />
      </div>
    </>
  )
}

export default App
