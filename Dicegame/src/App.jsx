
import {  useState } from "react";
import HomePage from "./components/HomePage";
import PlayGame from "./components/PlayGame";


function App() {
  const [isplaying,setIsPlaying] = useState(true);

  const toggleToPlay = ()=>{
    setIsPlaying(!isplaying);
  }


  return (
    <>
    {
      !isplaying ? <PlayGame/>:<HomePage  toggleToPlay={toggleToPlay}/>
    }
   
    </>
  )
}

export default App
