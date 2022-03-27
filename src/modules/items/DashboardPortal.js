import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {routers} from '../../Routers' 
import Overview from './overview';

function DashboardPortal() {
  const { screen } = useParams();
 
  let component  = <p>{screen}</p>
  
  const getcomponent =(screen) =>{
    switch(screen) {
        case "overview":
            return <Overview />
        default :
        return null
    }
  }

    component = getcomponent(screen)
    console.log('innnnnnnnnnnnnnnnnnnnnnnnnnnn');
  return (component)
}

export default DashboardPortal