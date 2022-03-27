import React, { useEffect, useRef, useState } from 'react'
import SideBar from './Components/SideBar'
import HomeIcon from '@mui/icons-material/Home';
import TopHead from './Components/TopHead';
import { useNavigate } from 'react-router-dom';
import Overview from './items/overview';
import DashboardPortal from './items/DashboardPortal';
// import CSSTransition from 'react-addons-css-transition-group'
import cx from "classnames";
import { CSSTransition } from 'react-transition-group';
import Transition from "react-transition-group/Transition";
import {  isMobile } from 'react-device-detect';

const  Dashboard=()=> {
  
  const [showSidebar, setShowSidebar] = useState(!isMobile)

  const navigator = useNavigate()
  const ref = useRef(null)
  const panelData =[
    {
      'title': 'GENERAL',
      "id":1,
      "items":[{
        'title':"Overview",
        "id":1,
        "route":'/demo/overview',
        'subItems':false,
        "icon":<HomeIcon style={{
          color: 'white',
        }}/>
      },
      {
       'title':"Analatics",
       "id":2,
       'subItems':false,
       "icon":<HomeIcon style={{
         color: 'white',
       }}/>
       },
       {
       'title':"Logistics",
       "id":3,
       'subItems':false,
       "icon":<HomeIcon style={{
         color: 'white',
       }}/>
       },
       {
       'title':"Account",
       "id":4,
       'subItems':false,
       "icon":<HomeIcon style={{
         color: 'white',
       }}/>
     },]
    },
    {
        'title': 'GENERAL',
        "id":1,
        "items":[{
          'title':"Overview",
          "id":1,
          'subItems':false,
          "icon":<HomeIcon style={{
            color: 'white',
          }}/>
        },
        {
         'title':"Analatics",
         "id":2,
         'subItems':false,
         "icon":<HomeIcon style={{
           color: 'white',
         }}/>
         },
         {
         'title':"Logistics",
         "id":3,
         'subItems':false,
         "icon":<HomeIcon style={{
           color: 'white',
         }}/>
         },
         {
         'title':"Account",
         "id":4,
         'subItems':false,
         "icon":<HomeIcon style={{
           color: 'white',
         }}/>
       },]
    },
    {
        'title': 'GENERAL',
        "id":1,
        "items":[{
          'title':"Overview",
          "id":1,
          'subItems':false,
          "icon":<HomeIcon style={{
            color: 'white',
          }}/>
        },
        {
         'title':"Analatics",
         "id":2,
         'subItems':false,
         "icon":<HomeIcon style={{
           color: 'white',
         }}/>
         },
         {
         'title':"Logistics",
         "id":3,
         'subItems':false,
         "icon":<HomeIcon style={{
           color: 'white',
         }}/>
         },
         {
         'title':"Account",
         "id":4,
         'subItems':false,
         "icon":<HomeIcon style={{
           color: 'white',
         }}/>
        },
      {
      'title':"Logistics",
      'subItems':true,
      "icon":<HomeIcon style={{
        color: 'white',
      }}/>,
      "items":[
       {'title':"Logistics1",
       'subItems':true,
       "icon":<HomeIcon style={{
         color: 'white',
       }}/>,
       },
       {'title':"Logistics2",
       'subItems':true,
       "icon":<HomeIcon style={{
         color: 'white',
       }}/>,
       },
       {'title':"Logistics3",
       'subItems':true,
       "icon":<HomeIcon style={{
         color: 'white',
       }}/>,
       },
       {'title':"Logistics4",
       'subItems':true,
       "icon":<HomeIcon style={{
         color: 'white',
       }}/>,
       },
      ]
      },
      {
      'title':"Account",
      'subItems':false,
      "icon":<HomeIcon style={{
        color: 'white',
      }}/>
    },]
    },  
    {
    'title': 'GENERAL',
    "id":1,
    "items":[{
      'title':"Overview",
      "id":1,
      'subItems':false,
      "icon":<HomeIcon style={{
        color: 'white',
      }}/>
    },
    {
     'title':"Analatics",
     "id":2,
     'subItems':false,
     "icon":<HomeIcon style={{
       color: 'white',
     }}/>
     },
     {
     'title':"Logistics",
     "id":3,
     'subItems':false,
     "icon":<HomeIcon style={{
       color: 'white',
     }}/>
     },
     {
     'title':"Account",
     "id":4,
     'subItems':false,
     "icon":<HomeIcon style={{
       color: 'white',
     }}/>
    },
  {
  'title':"Logistics",
  'subItems':true,
  "icon":<HomeIcon style={{
    color: 'white',
  }}/>,
  "items":[
   {'title':"Logistics1",
   'subItems':true,
   "icon":<HomeIcon style={{
     color: 'white',
   }}/>,
   },
   {'title':"Logistics2",
   'subItems':true,
   "icon":<HomeIcon style={{
     color: 'white',
   }}/>,
   },
   {'title':"Logistics3",
   'subItems':true,
   "icon":<HomeIcon style={{
     color: 'white',
   }}/>,
   },
   {'title':"Logistics4",
   'subItems':true,
   "icon":<HomeIcon style={{
     color: 'white',
   }}/>,
   },
  ]
  },
  {
  'title':"Account",
  'subItems':false,
  "icon":<HomeIcon style={{
    color: 'white',
  }}/>
},]
    },
   ]

   const handleClickOutside=(event)=> {
     console.log(ref);
    if (ref.current && !ref.current.contains(event.target)) {
      setShowSidebar(false);
    }
  };

   useEffect(()=>{
    document.addEventListener('click', handleClickOutside, true);
    return()=>{
      document.removeEventListener('click', handleClickOutside, true);
    }
   },[])


  const toggelMenu = () =>{
    setShowSidebar(!showSidebar)
  }

  return (
    <div className='flex flex-row'>
      <CSSTransition
        in={showSidebar}
        timeout={300}
        timein={300}
        classNames="visible"
        unmountOnExit
      >
  <div  ref={isMobile?ref:null} >
  <SideBar panelData={panelData}  /></div>
     </CSSTransition>  
      <div className='w-full'>
        <TopHead  toggelMenu={toggelMenu} />
        <DashboardPortal />
      </div>
    </div>
    )
}

export default Dashboard