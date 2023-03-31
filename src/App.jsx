import { useState } from 'react'
import "/Users/dylanramsey/Sites/rt-recipes/src/assets/sass/main.scss"
import AppTitle from './components/atoms/AppTitle'
import UtilityRow from './components/molecules/UtilityRow'
import Recipes from './components/organism/Recipes'
import Modal from './components/organism/Modal'

function App() {
  return (
    <div data-element="app">
      <div data-element="app__wrapper" className="App container mx-auto mt-16">
        <AppTitle />
        <UtilityRow />
        <Recipes />
      </div>      
    </div>
  )
}

export default App
