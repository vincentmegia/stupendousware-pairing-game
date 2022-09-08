import React from 'react'
import {configuration, EnvironmentContext} from './components/enviroment'
import RootNavigation from './navigation/root-navigation'

const App = () => {
  return (
    <EnvironmentContext.Provider value={configuration}>
      <RootNavigation />
    </EnvironmentContext.Provider>
  )
}

export default App
