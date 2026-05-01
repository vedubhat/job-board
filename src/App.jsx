import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import JobList from './components/Header/JobList/JobList'
import JobCard from './components/JobCard/JobCard'
import Loader from './components/Loader/Loader'

function App() {
  
  return (
    <>
      <Header />
      <JobList />
      <Loader />
    </>
  )
}

export default App
