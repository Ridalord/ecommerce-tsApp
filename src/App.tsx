import { useState } from "react"
import Header from "./components/Header"


function App() {
  const [viewCart, setViewCart] = useState(false)


  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
    </>
  )

  return content
}

export default App
