import React from 'react'
import Banner from './components/Banner'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className='max-w-7xl mx-auto'><Banner/></div>
    </div>
  )
}

export default App

