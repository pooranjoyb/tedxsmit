import Screen from "./Components/Screen"

function App() {

  return (
    <>
      <div className="background">
        <Screen />
        <div className="z-5 ml-[30%]">
          <img src="./assets/logo-white.png" width={1200} />
        </div>
      </div>
    </>
  )
}

export default App
