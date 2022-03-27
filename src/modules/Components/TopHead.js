import React, { useState } from 'react'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Card } from '@mui/material';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Divider from '@mui/material/Divider';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useNavigate } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';

const TopHead = ({ toggelMenu, refs }) => {
  const history = useNavigate()
  const [showuserPopUp,setShowUserPopup] = useState(false)
  const HeaderContent = styled.div`
        border-bottom: 1px;
    `
  const iconStyles = {
    marginLeft: '15px',
    height: '30px',
    width: '30px',
    cursor: 'pointer'
  }

  const profileChip = [{
    'title': 'Profile',
    'icon': <PermIdentityRoundedIcon className='bg-gray-400' sx={{ ...iconStyles,height:'25px', width:'25px', 'border-radius': '20px' }} />
  }, {
    'title': 'Settings',
    'icon': <SettingsIcon sx={{ ...iconStyles, height:'25px', width:'25px', 'border-radius': '20px' }} />
  }, {
    'title': 'Change organization',
    'icon': <CompareArrowsIcon sx={{ ...iconStyles,height:'25px', width:'25px', 'border-radius': '20px' }} />
  }]


  return (
    <HeaderContent className='bg-card border-b shadow-xs sticky top-0 z-50 h-16 w-full' >
      <div className="relative h-32 ">
        <div className="absolute flex flex-row top-2 mt-4 mx-6 justify-evenly left-0 top-0 ">
          <div onClick={() => { toggelMenu() }}><MenuIcon style={iconStyles} /></div>
        </div>
        <div className="absolute flex flex-row top-2 mt-4 mx-6 justify-evenly right-0 ">
          <SearchIcon style={iconStyles} />
          <PeopleIcon style={iconStyles} />
          <NotificationsIcon style={iconStyles} />
          <Avatar sx={iconStyles} className="relative" onClick={()=>{
            setShowUserPopup(!showuserPopUp)
          }} >S</Avatar>
          <CSSTransition in={showuserPopUp} timeout={300} timein={300} classNames="visible" unmountOnExit >
          <div className='absolute mt-8 mr-24 h-64 w-72 rounded-lg '>
            <Card className='flex flex-col justify-between'>
              <div className='flex my-5'>
                <Avatar sx={{ ...iconStyles, height: '40px', width: '40px' }} className="relative">S</Avatar>
                <div className='flex m-1 flex-col' >
                  <h1>Sai Kumar</h1>
                  <p className='text-sm text-gray-500' >software developer</p>
                </div>
              </div>
            <Divider light />
              <div className=' h-auto flex flex-col my-3 justify-evenly'>
                {profileChip.map(pro => (<div className='flex my-3'>
                  {pro.icon}
                  <p className='ml-2' >{pro.title}</p>
                </div>))}
              </div>
            <Divider light />
            {/* <div className=' h-auto flex flex-col my-3 justify-evenly'> */}

            <div className=' h-auto flex my-3 cursor-pointer'
            onClick={(e)=>{
              e.preventDefault()
              history('/')
            }}
            >
              <LogoutRoundedIcon style={{ ...iconStyles,height:'25px', width:'25px', 'border-radius': '20px' }} />  
              <p className='ml-2'>Log Out</p>            
            </div>
            {/* </div> */}
            </Card>

          </div>
          </CSSTransition>
        </div>
      </div>
    </HeaderContent>
  )
}

export default TopHead