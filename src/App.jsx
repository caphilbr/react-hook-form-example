import "./styling/App.css"
import Sublevel1 from "./Sublevel1"
import Button from "./styling/Button"
import { StateWrapper } from "./StateContext"
import { useState } from "react"

const App = () => {
  const [showLevelOne, setShowLevelOne] = useState(false)

  return (
    <StateWrapper>
      <h1>Examples: useContext, styled-components, React Hook Form</h1>
      <Button onClick={() => setShowLevelOne(!showLevelOne)}>
        Click here to toggle Level 1
      </Button>
      {showLevelOne && <Sublevel1 />}
    </StateWrapper>
  )
}

export default App