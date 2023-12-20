import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './HomePage/Navbar/Navbar'
import Banner from './HomePage/Banner/Banner'
import SearchSection from './HomePage/SearchSection/SearchSection'
import CustomizeSection from './HomePage/CustomizeSection/CustomizeSection'

function App() {


  return (
   <main className='min-h-screen'>
    <Navbar/>
    <Banner/>
   <SearchSection/>
  <CustomizeSection/>
   </main>
  )
}

export default App
