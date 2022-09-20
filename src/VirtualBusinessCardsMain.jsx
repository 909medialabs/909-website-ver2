import { Route, Routes } from "react-router-dom"

import VirtualCard from "./Pages/Virtual Business Cards/VirtualCard"

function VirtualBusinessCardsMain() {

  
    return (
      <>
      <Routes>
        <Route path='/' element={<VBCM/>}/>
        <Route path='/*' element={<VirtualCard/>}/>
      </Routes>
      </>
    )
  }
  
  export default VirtualBusinessCardsMain

  function VBCM (){
    return(
      <>
      <h2>Virtual Business Card</h2>
      </>
    )
  }