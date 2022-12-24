import { FunctionComponent } from "react"
import Button from "./components/Button"
import Dice from "./components/Dice"
import "./App.css"

const App: FunctionComponent = () => {

  const triggerRoll = () => {
    window.postMessage("roll");
  }

  return (
    <div className="container">
      <div className="App">
        <Dice />
        <Button marginTop="150px" onClick={triggerRoll}>Lancer</Button>
      </div>
    </div>
    
  )
}

export default App
