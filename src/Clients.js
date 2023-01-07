import React from 'react'
import ClientsCard from './Components/Client/ClientsCard'
import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'
import Select from './Components/Select'
import "./App.css";

const Clients = () => {
  return (
    <div className="clints">
      <Navbar/>
      <SearchBar/>
      <Select/>
      <ClientsCard/>
  </div>
  )
}

export default Clients