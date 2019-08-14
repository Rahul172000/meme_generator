import React from "react"

import Meme from "./components/meme-generator/fetchdata" 
import Header from "./components/meme-generator/header"

function App()
{
  return(
    <div>
      <Header/>
      <br/><br/>
      <Meme/>
    </div>
  )
}

export default App;