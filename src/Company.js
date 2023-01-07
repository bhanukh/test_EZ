import React from 'react'
import About from './Components/About'
import HeaderTypes from './Components/HeaderTypes'
import LoggedInPage from './Components/LoggedInPage'
import EntityDet from './Components/Main/EntityDet'
import "./App.css";

const Company = () => {
  return (
    <div>
         <LoggedInPage/>
          <About/>
          <HeaderTypes/>
          <Company/>
          <EntityDet/>

    </div>
  )
}

export default Company