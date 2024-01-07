import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import { TaskContext, TaskContextProvider } from './components/context/TaskContext'
import "./styles.css"
import React, { useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {

  return (
    <BrowserRouter>
      <>
        <TaskContextProvider>
          <div className="container">
            <Header />

            <Routes>
              <Route path='/' Component={Home} />

              <Route path='/about/' Component={About} />
            </Routes>

          </div>
        </TaskContextProvider>
      </>
    </BrowserRouter>
  )
}

export default App
