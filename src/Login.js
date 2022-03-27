import React from 'react'
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import SettingsInputComponentRoundedIcon from '@mui/icons-material/SettingsInputComponentRounded';
import { useNavigate } from "react-router-dom";

const Login=()=> {
  let history = useNavigate();
  const Subtext=styled.p`
  color: rgb(101, 116, 139)
  `
  const Bgdiv = styled.div`color:#f9fafc`

  const Newtag = styled.div`
  background-color:rgb(80, 72, 229)
  `

  const Singdet = styled.p`
  color:rgb(101, 116, 139)`

  const Otheropt = styled.p`
  width: fit-content
  `

  const Button = styled.button`
  background-color:#1765D3;
  &:hover{
    background-color:#3832a0;
  }`
  return (
  <div className='bg-gray-100'>
    <div className="flex align-middle justify-center flex-row bg-white h-16 mt-2 p-2 border-b-2" >
    <Newtag className=' text-white align-middle text-sm justify-center text-center rounded-xl mx-1 px-2 h-6' >NEW</Newtag>
    <p>Visit our docs and find out how to switch between</p>
    </div>
  <Bgdiv className="grid min-w-1/4 place-items-center h-screen">
    <div className="p-10 md:w-4/12 rounded-2xl ">  
    <div className='items-center'>
      <Singdet className='w-full h-16 mb-20 p-4 bg-gray-200 border-2 rounded-lg' >
      The app authenticates via Amplify
      </Singdet>
    </div>
        <div className="w-fit h-fit flex flex-col p-8 text-center rounded overflow-hidden border shadow-lg bg-white">
        <h1 className="text-4xl py-2 font-bold text-black">
        Log in
        </h1>
        <Subtext className='text-sm py-2' >Sign in on the internal platform</Subtext>
        <div className='pt-5 justify-between' >
            <TextField
              required
              className='w-full py-2 rounded-2xl'
              id="outlined-disabled"
              label="Email Address"
              defaultValue="Hello World"
            />
            </div>
            <div className='pt-5 justify-between' >
            <TextField
              required
              className='w-full py-2 rounded-lg'
              id="filled-required"
              type="password"
              label="Email Address"
              defaultValue="Hello World"
            />
            </div>
            <div className='pt-5 py-2' >
              <Button
              onClick={()=>history('/demo/overview')}
              className='w-full rounded-lg p-3 '
              >
                Log in
              </Button>
            </div>
              <div
              className='mt-8 py-2 w-full bg-gray-200 rounded-lg p-2 '
              >
                <p className='text-black text-center' >
                You can use demo@devias.io and password Password123!
                </p>
            </div>
            <hr className='mt-6 border-gray-200' />
            <div className='mt-8 w-fit' >
            <Otheropt className='text-gray-700 hover:underline text-left text-sm m-1 cursor-pointer w-fit' >Create new account </Otheropt>
            <Otheropt className='text-gray-700 hover:underline text-left text-sm m-1 cursor-pointer w-fit' >Forgot Password</Otheropt>
            </div>
        </div>
    </div>
</Bgdiv>

    <div>
    <SettingsInputComponentRoundedIcon/>
    </div>
  </div>
)
}

export default Login