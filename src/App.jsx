import { useState } from 'react'
import "/Users/dylanramsey/Sites/rt-recipes/src/assets/sass/main.scss"
import AppTitle from './components/atoms/AppTitle'
import UtilityRow from './components/molecules/UtilityRow'

function App() {
  return (
    <div data-element="app">
      <div data-element="app__wrapper" className="App container mx-auto">
        <AppTitle />
        <UtilityRow />
      </div>
    </div>
  )
}

export default App
