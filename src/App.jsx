import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import MainPage from './MainPage'
import VirtualBusinessCardsMain from './VirtualBusinessCardsMain'

function App() {

  return (
    <>
    <Routes>
      <Route path='/*' element={<MainPage/>}/>
      <Route path='/vbc/*' element={<VirtualBusinessCardsMain/>}/>
    </Routes>
    </>
  )
}

export default App