import { Card, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AssessmentIcon from '@mui/icons-material/Assessment';
import styled from 'styled-components';
import compImage from '../../assets/screenusermanagement.png'
import Piechart from './overlaycharts/Piechart';
import GraphChart from './overlaycharts/GraphChart';
import TotalBlance from './overlaycharts/TotalBlance';

function Overview() {

  const [currency, setCurrency] = useState(
    'Last Month'
  )

  const Newtag = styled.div`
    background-color:rgb(16, 185, 129)
    `
  const Button1 = styled.button`
  background-color:rgb(16, 185, 129);
  &:hover{
  background-color:rgb(11, 129, 90);

  }
  `
  const BgDrop = styled.div`
  background-color:#F9FAFC;
`

const currencies = [
    {
      value: 'Last Week',
      label: 'Last Week'
    },
    {
      value: 'Last Month',
      label: 'Last Month',
    },
    {
      value: 'Last Year',
      label: 'Last Year',
    },
    {
      value: 'Last Time',
      label: 'Last Time',
    },
  ];

  return (
    <BgDrop className=' h-screen w-full p-4 pt-8 align-text-middle overflow-y-auto' >
      <div className="md:relative md:h-24 sm:mb-2 ">
        <div className="md:absolute flex  md:flex-row top-2 mt-4 mx-6 justify-evenly left-0 top-0 ">
          <div onClick={() => { }}>
            <h1 className='text-3xl font-bold' >
              Good Morning
            </h1>
          </div>
        </div>
        <div className="md:absolute flex flex-row top-2 mt-4 mx-6 justify-evenly right-0 ">
          <Button variant="outlined" className='h-10 rounded-2xl' > <AssessmentIcon /> Reports</Button>
          <div className='h-8 mx-3'>
            <TextField
              id="outlined-select-currency"
              select
              size="small"
              label="Period"
              value={currency}
              onChange={(a) => setCurrency(a.target.value)}
              sx={{
                height: "40px"
              }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
      </div>

      <Card className='flex flex-row md:h-64 sm:h-auto my-2 p-2' sx={{
        backgroundColor: 'rgb(80, 72, 229)'
      }} >
        <img src={compImage} width={200} height={200} alt='dfd' />
        <div className='text-white my-8' >
          <Newtag className=' text-white w-12 my-3 text-xs align-middle rounded-xl mx-1 px-2 h-7' >NEW</Newtag>
          <h1 className='text-3xl font-bold' >
            Welcome to Material Kit Pro v5!
          </h1>
          <p className='text-base my-3'>
            Your dashboard has been improved!
            Explore new features like Notifications,
            Search, Jobs Platform and more.
          </p>
          <Button1
            className=' w-40 h-10 justify-center rounded-xl'
          >
            Dismiss Banner
          </Button1>
        </div>
      </Card>

      <div className="grid sm:grid-cols-1 sm:gap-1 mt-6 md:grid-cols-2  md:gap-8" >
        <div className="flex-row top-2 mt-4  h-auto w-full justify-evenly left-0 top-0 ">
          <Piechart />
        </div>
        <div className="flex-row top-2 mt-4  h-auto w-full justify-evenly right-0 ">
          <Piechart />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 sm:gap-2 mt-6 md:grid-cols-2  md:gap-8" >
        <div className="flex-row top-2 mt-4  h-auto w-full justify-evenly left-0 top-0 ">
          <GraphChart />
        </div>
        <div className="flex-row top-2 mt-4  h-auto w-full justify-evenly right-0 ">
          <TotalBlance />
        </div>
      </div>


    </BgDrop>
  )
}

export default Overview