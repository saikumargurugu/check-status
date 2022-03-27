
import { Card, Divider } from '@mui/material'
import React from 'react'

function TotalBlance() {
  return (
    <Card>
        <div className='m-3'>
            <p className='text-sm font-bold my-2'>TOTAL BALANCE</p>
            <h1 className='text-xl font-bold my-2'>$3,787,681.00</h1>
        </div>
    <Divider />
            <div className='my-6'>
            <h1 className='text-sm font-bold text-gray-600 m-3'> AVAILABLE BALANCE </h1>
                
                <div className='flex'>
                <h1 className='text-xl font-bold mx-4 text-blue-900' >O</h1>
                <div className='flex justify-between'>
                    <p>US Dollars</p>
                    <p>$21,500.00</p>    
                </div>
                
                </div>
                <div className='flex'>
                <h1 className='text-xl font-bold mx-4 text-red-700' >O</h1>
                <div className='flex justify-between'>
                    <p>US Dollars</p>
                    <p>$21,500.00</p>    
                </div>
                
                </div>
                <div className='flex'>
                <h1 className='text-xl font-bold mx-4 text-green-600' >O</h1>
                <div className='flex justify-between'>
                    <p>US Dollars</p>
                    <p>$21,500.00</p>    
                </div>
                
                </div>
        </div>
        <Divider />
        <div>
        <div className='border-t border-1 h-auto bg-center p-4 ' >
            <h1 className='text-lg text-blue-700 hover:bg-gray-200 px-5 py-2 rounded-lg'  style={{width:'fit-content'}} >
                Add Money
            </h1>
            <h1 className='text-lg text-blue-700 hover:bg-gray-200 px-5 py-2 rounded-lg'  style={{width:'fit-content'}} >
                withdraw Fund
            </h1>
        </div>
        </div>
    </Card>
  )
}

export default TotalBlance