import { useState } from 'react'
import './App.css'
import { ButtonPage } from './pages/ButtonPage'
import { CheckboxesPage } from './pages/CheckboxesPage'


function App() {
  const [currentView, setCurrentView] = useState('button')
  
  const handleClick = () => {
    setCurrentView('checkboxes')
  }

  return (
    <>
      {currentView == 'button' && <ButtonPage handleClick={handleClick} />}
      {currentView == 'checkboxes' && <CheckboxesPage />}
    </>
  )
}

export default App
