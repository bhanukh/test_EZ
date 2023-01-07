import React from 'react';
import Card from './Card';
import Data from "../Api/ClientList";



const ClientsCard = () => {
  return (
    <div>
          {Data.map((Entity,index) => {
        return <Card key={index}/>;
      })}
    </div>
  )
}

export default ClientsCard