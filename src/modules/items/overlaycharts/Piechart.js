import { Card } from '@mui/material'
import React from 'react'
import { Chart } from 'react-charts'
import { PieChart } from 'react-minimal-pie-chart';
import styled from 'styled-components';


function Pipechart() {

    const NumberText = styled.h1`
    color:rgb(80, 72, 229)
    `

  return (
    <Card className='w-auto'>
        <div className='flex h-40 p-5 pl-5 justify-items-start justify-start'>
            <PieChart
            className='w-auto'
            lineWidth={30}
            data={[
                { title: 'One', value: 10, color: 'rgb(80, 72, 229)' },
                { title: 'Three', value: 20, color: '#8561E8' },
            ]}
            />
            <div className='ml-5'>
            <NumberText className='text-4xl text-blue-800 font-bold' >
            0.299 BTC
            </NumberText>
            <h1 className='text-sm text-gray-400' >
            Your crypto wallet
            </h1>
            </div>
        </div>
        <div className='border-t border-1 h-20 bg-center p-4 ' >
            <h1 className='text-lg text-blue-700 hover:bg-gray-200 px-5 py-2 rounded-lg'  style={{width:'fit-content'}} >
                see full activity
            </h1>
        </div>
    </Card>
  )
}

export default Pipechart


 
function MyChart() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
 
  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  )
  return (lineChart)
}
